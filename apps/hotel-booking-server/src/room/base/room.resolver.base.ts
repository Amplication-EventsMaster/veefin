/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Room } from "./Room";
import { RoomCountArgs } from "./RoomCountArgs";
import { RoomFindManyArgs } from "./RoomFindManyArgs";
import { RoomFindUniqueArgs } from "./RoomFindUniqueArgs";
import { CreateRoomArgs } from "./CreateRoomArgs";
import { UpdateRoomArgs } from "./UpdateRoomArgs";
import { DeleteRoomArgs } from "./DeleteRoomArgs";
import { OrderFindManyArgs } from "../../order/base/OrderFindManyArgs";
import { Order } from "../../order/base/Order";
import { RoomService } from "../room.service";
@graphql.Resolver(() => Room)
export class RoomResolverBase {
  constructor(protected readonly service: RoomService) {}

  async _roomsMeta(
    @graphql.Args() args: RoomCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Room])
  async rooms(@graphql.Args() args: RoomFindManyArgs): Promise<Room[]> {
    return this.service.rooms(args);
  }

  @graphql.Query(() => Room, { nullable: true })
  async room(@graphql.Args() args: RoomFindUniqueArgs): Promise<Room | null> {
    const result = await this.service.room(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Room)
  async createRoom(@graphql.Args() args: CreateRoomArgs): Promise<Room> {
    return await this.service.createRoom({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Room)
  async updateRoom(@graphql.Args() args: UpdateRoomArgs): Promise<Room | null> {
    try {
      return await this.service.updateRoom({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Room)
  async deleteRoom(@graphql.Args() args: DeleteRoomArgs): Promise<Room | null> {
    try {
      return await this.service.deleteRoom(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Order], { name: "orders" })
  async findOrders(
    @graphql.Parent() parent: Room,
    @graphql.Args() args: OrderFindManyArgs
  ): Promise<Order[]> {
    const results = await this.service.findOrders(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
