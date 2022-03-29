import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query,
  } from '@nestjs/common';
  import { CreateCarDto } from './dto/create-car.dto';
  import { UpdateCarDto } from './dto/update-car.dto';
  import Car from './car.interface';
  
  import { CarService } from './car.service';
  
  @Controller('car')
  export class CarController {
    constructor(private readonly carService: CarService) {}
    @Get()
    findAll() {
      return this.carService.findAll();
    }
  
    @Post()
    create(@Body() createCarDto: CreateCarDto): Promise<Car> {
      return this.carService.create(createCarDto);
    }
  
    @Put(':id')
    update(
      @Param('id') id: string,
      @Body() updateCarDto: UpdateCarDto,
    ): Promise<Car> {
      return this.carService.update(id, updateCarDto);
    }
  
    @Delete(':id')
    delete(@Param('id') id: string) {
      return this.carService.delete(id);
    }
  }
  
