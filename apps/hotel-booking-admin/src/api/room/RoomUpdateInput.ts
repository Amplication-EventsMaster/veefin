import { OrderUpdateManyWithoutRoomsInput } from "./OrderUpdateManyWithoutRoomsInput";

export type RoomUpdateInput = {
  isAvailable?: boolean | null;
  numberField?: number | null;
  orders?: OrderUpdateManyWithoutRoomsInput;
  price?: number | null;
  typeField?: string | null;
};
