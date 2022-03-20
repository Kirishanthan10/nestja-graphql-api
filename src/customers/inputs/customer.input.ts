import { InputType, Field } from 'type-graphql';

@InputType()
export class CustomerInput {
  @Field()
  readonly fullName: string;
  @Field()
  readonly address: string;
  @Field()
  readonly automobileType: string;
}

@InputType()
export class UpdateCustomerInput {
  @Field()
  readonly id: string;
  @Field()
  readonly fullName: string;
  @Field()
  readonly address: string;
  @Field()
  readonly automobileType: string;
}

@InputType()
export class FindCustomerInput {
  @Field()
  readonly id: string;
}
