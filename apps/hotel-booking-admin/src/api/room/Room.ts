import { Order } from "../order/Order";

export type Room = {
  createdAt: Date;
  id: string;
  isAvailable: boolean | null;
  numberField: number | null;
  orders?: Array<Order>;
  price: number | null;
  typeField: string | null;
  updatedAt: Date;
};
