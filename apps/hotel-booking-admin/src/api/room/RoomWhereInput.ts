import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RoomWhereInput = {
  id?: StringFilter;
  isAvailable?: BooleanNullableFilter;
  numberField?: IntNullableFilter;
  orders?: OrderListRelationFilter;
  price?: FloatNullableFilter;
  typeField?: StringNullableFilter;
};
