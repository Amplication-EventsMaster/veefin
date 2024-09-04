import { SortOrder } from "../../util/SortOrder";

export type RoomOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isAvailable?: SortOrder;
  numberField?: SortOrder;
  price?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
