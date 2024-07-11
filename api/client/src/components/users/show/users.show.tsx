// @ts-nocheck
import React from "react";
import {
  TextField,
  EmailField,
  SimpleForm,
  ShowProps,
  Show,
} from "react-admin";

export const UserShow: React.FC<ShowProps> = (props) => {
  return (
    <Show {...props}>
      <SimpleForm sx={{ "& > div": { padding: "20px" } }}>
        <TextField source="id" />
        <TextField label="USERNAME" source="username" />
        <EmailField label="EMAIL" source="email" />
        <TextField label="ROLE ID" source="roleID" />
      </SimpleForm>
    </Show>
  );
};
