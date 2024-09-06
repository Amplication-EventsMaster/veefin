import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { EnumProcessStatus } from "./EnumProcessStatus";

@ObjectType("ProcessStatusObject")
class ProcessStatus {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    processName!: string;

    @Field(() => EnumProcessStatus)
    @ApiProperty({
        required: true,
        enum: EnumProcessStatus
    })
    status!: "pending" | "running" | "failed" | "completed";
}

export { ProcessStatus as ProcessStatus };