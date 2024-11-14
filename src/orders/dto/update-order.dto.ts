import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';
import { IsDate, IsNotEmpty, IsOptional, IsPositive } from 'class-validator';
import { Type } from 'class-transformer';


export class UpdateOrderDto extends PartialType(CreateOrderDto) {
  @IsPositive()
  @IsNotEmpty()
  id: number;

  @IsOptional()
  @IsDate()
  @Type(() => Date)
  paidAt: Date; 
}
