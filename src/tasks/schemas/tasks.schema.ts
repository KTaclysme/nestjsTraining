import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TaskDocument = HydratedDocument<Task>;

@Schema()
export class Task {
  @Prop({ required: true })
  id: number;

  @Prop()
  description: string;

  @Prop({ default: false })
  state: boolean;

  @Prop()
  createdAt: Date;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
