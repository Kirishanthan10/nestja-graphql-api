import { Model, Types } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Customer } from './interfaces/customer.interface';
import { FindCustomerInput, CustomerInput, UpdateCustomerInput } from './inputs/customer.input';

@Injectable()
export class CustomersService {
  [x: string]: any;
  constructor(@InjectModel('Customer') private readonly customerModel: Model<Customer>) {}

  async create(createCustomerDto: CustomerInput): Promise<Customer> {
    const createdCustomer = new this.customerModel(createCustomerDto);
    return await createdCustomer.save();
  }

  async findAll(): Promise<Customer[]> {
    return await this.customerModel.find().exec();
  }

  async findOne(customer:FindCustomerInput):Promise<Customer>{
      return this.customerModel.findById(customer.id);
  }

//   async update(updateCustomer: UpdateCustomerInput):Promise<Customer>{
//       const customer = await this.customerModel.findOne(Types.ObjectId(updateCustomer.id));
//       customer.fullName = updateCustomer.fullName;
//       customer.address = updateCustomer.address;
//       customer.automobileType = updateCustomer.automobileType;
//       return customer.save();
//   }

  async delete(id: string): Promise<any>{
      return await this.customerModel.deleteOne({id: Types.ObjectId(id)});
  }
}