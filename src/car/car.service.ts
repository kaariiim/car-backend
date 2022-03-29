import { HttpException, Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { Car, CarDocument } from './schemas/car.schemas';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class CarService {
  constructor(
    @InjectModel(Car.name) private carModel: Model<CarDocument>,
  ) {}

  async create(createCarDto: CreateCarDto): Promise<Car> {
    const createdCar = new this.carModel({
      ...createCarDto,
    });
    return createdCar.save();
  }

  async update(
    id: string,
    updateCarDto: UpdateCarDto,
  ): Promise</*UpdateResult*/ any> {
    return this.carModel.updateOne({ _id: id }, updateCarDto);
  }

  async findAll(): Promise<Car[]> {
    return this.carModel.find().exec();
  }

  async delete(id: string): Promise</*DeleteResult*/ any> {
    return this.carModel.deleteOne({ _id: id });
  }
}
