import { ObjectType, Field, Int, ID } from 'type-graphql';

@ObjectType()
export class CustomerType {
  @Field()
  id: string;
  @Field()
  readonly fullName: string;
  @Field()
  readonly address: string;
  @Field()
  readonly automobileType: string;
}