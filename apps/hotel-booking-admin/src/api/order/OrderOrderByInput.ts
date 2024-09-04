import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  bookingDate?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  numberOfNights?: SortOrder;
  roomId?: SortOrder;
  totalPrice?: SortOrder;
  updatedAt?: SortOrder;
};
