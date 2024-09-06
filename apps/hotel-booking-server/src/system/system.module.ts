import { Module } from "@nestjs/common";
import { SystemService } from "./system.service";
import { SystemController } from "./system.controller";
import { SystemResolver } from "./system.resolver";

@Module({
  controllers: [SystemController],
  providers: [SystemService, SystemResolver],
  exports: [SystemService],
})
export class SystemModule {}
