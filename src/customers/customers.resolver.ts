import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CustomersService } from './customers.service';
import { CustomerType } from './dto/create-customer.dto';
import { FindCustomerInput, CustomerInput, UpdateCustomerInput } from './inputs/customer.input';

@Resolver()
export class CustomersResolver {
  constructor(private readonly customersService: CustomersService) {}

  @Query(() => String)
  async hello() {
    return 'hello';
  }

  @Query(() => [CustomerType])
  async customers() {
    return this.customersService.findAll();
  }

  @Mutation(() => CustomerType)
  async createCustomer(@Args('input') input: CustomerInput) {
    return this.customersService.create(input);
  }

  @Mutation(() => CustomerType)
  async updateCustomer(@Args('input') input: UpdateCustomerInput) {
    return this.customersService.update(input);
  }

  @Mutation(() => CustomerType)
  async findCustomer(@Args('input') input: FindCustomerInput) {
    return this.customersService.findOne(input);
  }

  @Mutation(() => CustomerType)
  async deleteCustomer(@Args('input') input: FindCustomerInput):Promise<any> {
    await this.customersService.delete(input.id);
    return "Customer Removed.";
  }
}
