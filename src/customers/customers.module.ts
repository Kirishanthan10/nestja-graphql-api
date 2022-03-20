import { Module } from '@nestjs/common';
import { CustomersResolver } from './customers.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerSchema } from './customers.schema';
import {CustomersService } from './customers.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Customer', schema: CustomerSchema }])],
  providers: [CustomersResolver, CustomersService],
})
export class CustomersModule {}
