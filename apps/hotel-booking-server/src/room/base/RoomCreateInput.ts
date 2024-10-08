/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

import {
  IsBoolean,
  IsOptional,
  IsInt,
  Min,
  Max,
  ValidateNested,
  IsNumber,
  IsString,
  MaxLength,
} from "class-validator";

import { OrderCreateNestedManyWithoutRoomsInput } from "./OrderCreateNestedManyWithoutRoomsInput";
import { Type } from "class-transformer";

@InputType()
class RoomCreateInput {
  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isAvailable?: boolean | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  numberField?: number | null;

  @ApiProperty({
    required: false,
    type: () => OrderCreateNestedManyWithoutRoomsInput,
  })
  @ValidateNested()
  @Type(() => OrderCreateNestedManyWithoutRoomsInput)
  @IsOptional()
  @Field(() => OrderCreateNestedManyWithoutRoomsInput, {
    nullable: true,
  })
  orders?: OrderCreateNestedManyWithoutRoomsInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  typeField?: string | null;
}

export { RoomCreateInput as RoomCreateInput };
