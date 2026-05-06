import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  collection: 'users',
  strict: true,
  timestamps: true,
  collation: { locale: 'en', strength: 1 },
})
export class User extends Document {
  @Prop({ unique: true, required: true, trim: true })
  email!: string;

  @Prop({ required: true })
  password!: string;

  @Prop({ required: true, trim: true, unique: true })
  username!: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
