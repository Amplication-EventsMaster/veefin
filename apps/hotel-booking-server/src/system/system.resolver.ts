import * as graphql from "@nestjs/graphql";
import { SystemService } from "./system.service";

export class SystemResolver {
  constructor(protected readonly service: SystemService) {}

  @graphql.Query(() => String)
  async RefreshProcessStatus(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.RefreshProcessStatus(args);
  }
}
