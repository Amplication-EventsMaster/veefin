import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";
import { RoomTitle } from "../room/RoomTitle";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="BookingDate" source="bookingDate" />
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="NumberOfNights" source="numberOfNights" />
        <ReferenceInput source="room.id" reference="Room" label="Room">
          <SelectInput optionText={RoomTitle} />
        </ReferenceInput>
        <NumberInput label="TotalPrice" source="totalPrice" />
      </SimpleForm>
    </Create>
  );
};
