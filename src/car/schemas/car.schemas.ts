
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CarDocument = Car & Document;

@Schema()
export class Car {
  @Prop({ required: true, type: String })
  model: string;

  @Prop({ required: true, type: String })
  color: string;

  @Prop({ required: true, type: Number })
  horsepower: number;

}

export const CarSchema = SchemaFactory.createForClass(Car);
