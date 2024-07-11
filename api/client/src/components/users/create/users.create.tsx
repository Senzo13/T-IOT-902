// @ts-nocheck
import React from "react";
import {
  TextInput,
  SimpleForm,
  Create,
  required,
  SelectInput,
} from "react-admin";
import { Box, Typography, Paper, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useTranslate } from "react-admin";

export const UserCreate: React.FC = () => {
  const theme = useTheme();
  const translate = useTranslate();

  return (
    <Box sx={{ p: 0 }}>
      <Create>
        <SimpleForm sx={{ "& > div": { padding: "20px" } }}>
          <Box sx={{ width: "100%", maxWidth: 600, margin: "auto" }}>
            <Paper elevation={0} sx={{ padding: 2, borderRadius: 1 }}>
              <Typography variant="h6" gutterBottom sx={{ marginBottom: 2 }}>
                {translate("pos.users.create.title")}
              </Typography>
              <Stack direction="column" spacing={2}>
                <TextInput
                  label="USERNAME"
                  source="username"
                  variant="outlined"
                  fullWidth
                  validate={required()}
                />
                <TextInput
                  label="EMAIL"
                  source="email"
                  variant="outlined"
                  fullWidth
                  validate={required()}
                />
                <TextInput
                  label="PASSWORD"
                  source="password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  validate={required()}
                />
                <TextInput
                  label="CITY"
                  source="city"
                  variant="outlined"
                  fullWidth
                  validate={required()}
                />
                <TextInput
                  label="COUNTRY"
                  source="country"
                  variant="outlined"
                  fullWidth
                  validate={required()}
                />
                <TextInput
                  label="POSTAL CODE"
                  source="postalCode"
                  variant="outlined"
                  fullWidth
                  validate={required()}
                />
                <TextInput
                  label="ADDRESS"
                  source="address"
                  variant="outlined"
                  fullWidth
                  validate={required()}
                />
                <TextInput
                  label="PHONE"
                  source="phone"
                  variant="outlined"
                  fullWidth
                  validate={required()}
                />
                <SelectInput
                  source="roleID"
                  label="ROLE"
                  variant="outlined"
                  fullWidth
                  validate={required()}
                  choices={[
                    { id: 1, name: "Admin" },
                    { id: 2, name: "User" },
                  ]}
                />
              </Stack>
            </Paper>
          </Box>
        </SimpleForm>
      </Create>
    </Box>
  );
};
