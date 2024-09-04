import { Customer } from "../customer/Customer";
import { Room } from "../room/Room";

export type Order = {
  bookingDate: Date | null;
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  numberOfNights: number | null;
  room?: Room | null;
  totalPrice: number | null;
  updatedAt: Date;
};
