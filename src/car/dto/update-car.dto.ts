import {
    IsMongoId,
    IsNumber,
    IsOptional,
    IsPositive,
    IsString,
  } from 'class-validator';
  
  export class UpdateCarDto {
    @IsMongoId()
    @IsOptional()
    _id?: string;
    @IsOptional()
    @IsString()
    model: string;
    @IsOptional()
    @IsString()
    color: string;
    @IsOptional()
    @IsNumber()
    @IsPositive()
   horsepower: number;
  }
  
