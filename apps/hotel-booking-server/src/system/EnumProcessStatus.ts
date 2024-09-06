import { registerEnumType } from "@nestjs/graphql";

export enum EnumProcessStatus {
    Pending = "pending",
    Running = "running",
    Failed = "failed",
    Completed = "completed"
}

registerEnumType(EnumProcessStatus, {
    name: "EnumProcessStatus",
  });