import * as mongoose from 'mongoose';

export const CustomerSchema = new mongoose.Schema({
  fullName: String,
  address: String,
  automobileType: String
});