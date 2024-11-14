import { IsBoolean, IsDate, IsEnum, IsOptional, IsPositive, IsString } from "class-validator";
import { OrderStatusEnum } from "../enum/order";
import { Type } from "class-transformer";

export class PaginationDto {
    @IsOptional()
    @IsPositive()
    page?: number = 1;

    @IsOptional()
    @IsPositive()
    limit?: number = 10;
}

export class OrderFilterParams extends PaginationDto{
    @IsOptional()
    @IsString()
    @IsEnum(OrderStatusEnum)
    status?: string;

    @IsOptional()
    @IsBoolean()
    paid?: boolean;

    @IsOptional()
    @IsDate()
    @Type(() => Date)
    paidAt?: Date;
}