import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  SelectInput,
  useTranslate,
} from "react-admin";
import { Box, Typography, Paper, Stack } from "@mui/material";

export const EditUser: React.FC = () => {
  const translate = useTranslate();

  return (
    <Box sx={{ p: 0 }}>
      <Edit sx={{ marginTop: -2 }} title={translate("pos.users.edit.title")}>
        <SimpleForm sx={{ "& > div": { padding: "20px" } }}>
          <Box sx={{ width: "100%", maxWidth: 600, margin: "auto" }}>
            <Paper elevation={0} sx={{ padding: 2, borderRadius: 1 }}>
              <Typography variant="h6" gutterBottom sx={{ marginBottom: 2 }}>
                {translate("pos.users.edit.title")}
              </Typography>
              <Stack direction="column" spacing={2}>
                <TextInput
                  source="username"
                  label="USERNAME"
                  variant="outlined"
                  fullWidth
                  required
                />
                <TextInput
                  source="email"
                  label="EMAIL"
                  variant="outlined"
                  fullWidth
                  required
                />
                <TextInput
                  source="city"
                  label="CITY"
                  variant="outlined"
                  fullWidth
                  required
                />
                <TextInput
                  source="country"
                  label="COUNTRY"
                  variant="outlined"
                  fullWidth
                  required
                />
                <TextInput
                  source="postalCode"
                  label="POSTAL CODE"
                  variant="outlined"
                  fullWidth
                  required
                />
                <SelectInput
                  source="roleID"
                  label="ROLE"
                  variant="outlined"
                  fullWidth
                  required
                  choices={[
                    { id: 1, name: "Admin" },
                    { id: 2, name: "User" },
                  ]}
                />
              </Stack>
            </Paper>
          </Box>
        </SimpleForm>
      </Edit>
    </Box>
  );
};
