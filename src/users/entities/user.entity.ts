import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  username: string;

  @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop()
  gender: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  access_token: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
