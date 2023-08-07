import { IsString, IsOptional, IsNumber } from "@nestjs/class-validator";

export class GetAllReq {
    @IsString()
    @IsOptional()
    searchKeyword: string;
    @IsOptional()
    @IsString()
    searchType: string;
    @IsNumber()
    pageNumber: number;
    @IsNumber()
    rateByPage: number;
}