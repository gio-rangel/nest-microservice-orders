import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsPositive } from "class-validator";
import { OrderStatusEnum } from "src/common/enum/order";

export class CreateOrderDto {
    @IsNumber({maxDecimalPlaces: 4})
    @IsNotEmpty()
    totalAmount: number; 

    @IsPositive()
    @IsNotEmpty()
    totalItems: number;

    @IsOptional()
    @IsEnum(OrderStatusEnum)
    status = OrderStatusEnum.PENDING; 

    @IsOptional()
    @IsBoolean()
    paid?: boolean = false; 
}
