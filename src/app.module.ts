import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { CarModule } from './car/car.module';
import { Module } from '@nestjs/common';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/cardb'),
    CarModule,

    UsersModule,
  ],
  providers: [
    
  ],
})
export class AppModule {}

