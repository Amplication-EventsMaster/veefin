import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type OrderUpdateInput = {
  bookingDate?: Date | null;
  customer?: CustomerWhereUniqueInput | null;
  numberOfNights?: number | null;
  room?: RoomWhereUniqueInput | null;
  totalPrice?: number | null;
};
