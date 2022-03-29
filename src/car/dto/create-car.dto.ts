import {
    IsNotEmpty,
    IsNumber,
    IsPositive,
    IsString,
  } from 'class-validator';
  
  export class CreateCarDto {
    @IsNotEmpty()
    @IsString()
    model: string;
    @IsNotEmpty()
    @IsString()
    color: string;
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    horsepower: number;

  }
  