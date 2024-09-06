import { Injectable } from "@nestjs/common";

@Injectable()
export class SystemService {
  constructor() {}
  async RefreshProcessStatus(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
