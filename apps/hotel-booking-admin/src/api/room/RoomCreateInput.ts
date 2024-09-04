import { OrderCreateNestedManyWithoutRoomsInput } from "./OrderCreateNestedManyWithoutRoomsInput";

export type RoomCreateInput = {
  isAvailable?: boolean | null;
  numberField?: number | null;
  orders?: OrderCreateNestedManyWithoutRoomsInput;
  price?: number | null;
  typeField?: string | null;
};
