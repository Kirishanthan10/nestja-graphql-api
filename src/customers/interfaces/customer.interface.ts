import { Document } from 'mongoose';

export interface Customer extends Document {
  readonly fullName: string;
  readonly address: string;
  readonly automobileType: string;
}