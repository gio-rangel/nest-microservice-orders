import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order, PrismaClient } from '@prisma/client';
import { RpcException } from '@nestjs/microservices';
import { OrderFilterParams } from 'src/common/dto/pagination.dto';
import { removeUndefined } from 'src/common/utils/utils';

@Injectable()
export class OrdersService extends PrismaClient implements OnModuleInit {
  private readonly logger = new Logger(OrdersService.name);

  onModuleInit() {
    this.$connect();

    this.logger.debug(`Database connected`)
  }
  
  create(createOrderDto: CreateOrderDto) {
    try {
      return this.order.create({data: createOrderDto})
    } catch (error) {
      throw new RpcException(error); 
    }
  }

  async findAll(filters: OrderFilterParams) {
    const {page, limit, ...whereParams} = filters;

    const where = (removeUndefined(whereParams)) as Order; 

    try {
      const [products, total] = await Promise.all([
        this.order.findMany({
          where,
          skip: (page -1 ) * limit,
          take: limit,
        }),
        this.order.count()
      ])
  
      const pagination = {
        total,
        page,
        limit
      }
  
      return {products, pagination}
    } catch (error) {

    }
  }

  findOne(id: number) {
    try {
      const order = this.order.findFirst({ where: {id} });

      if(!order) {
        throw new RpcException(`Order not found`);
      }
  
      return order; 
    } catch (error) {
      throw new RpcException(error); 
    }
  }

  update(updateOrderDto: UpdateOrderDto) {
    try {
      const {id, ...updateOrder} = updateOrderDto; 

      return this.order.update({
        where: { id },
        data: updateOrder
      });
    } catch (error) {
      throw new RpcException(error);
    }
  }
}
