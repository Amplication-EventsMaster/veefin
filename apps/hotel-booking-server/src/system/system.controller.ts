import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { SystemService } from "./system.service";

@swagger.ApiTags("systems")
@common.Controller("systems")
export class SystemController {
  constructor(protected readonly service: SystemService) {}

  @common.Get("/:id/refresh-process-status")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RefreshProcessStatus(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.RefreshProcessStatus(body);
      }
}
