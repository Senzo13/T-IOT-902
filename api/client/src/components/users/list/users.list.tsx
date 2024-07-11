import React, { useState, useEffect } from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  ListProps,
  DeleteButton,
  TopToolbar,
  SortButton,
  CreateButton,
  FilterLiveSearch,
  useListContext,
} from "react-admin";
import {
  Box,
  useTheme,
  Typography,
  Paper,
  Stack,
} from "@mui/material";
import { useTranslate } from "react-admin";

interface UserRecord {
  id: number;
  profile: {
    status: string;
    username: string;
    email: string;
    role: string;
  };
  avatar: string;
}


const StatusFilter: React.FC = () => {
  return (
    <Box sx={{ mb: 1 }}>
    </Box>
  );
};

const UserActions: React.FC = () => {
  return (
    <TopToolbar>
      <SortButton fields={["username"]} />
      <CreateButton />
    </TopToolbar>
  );
};

const UserFilters: React.FC = () => {
  const translate = useTranslate();
  const { filterValues, setFilters } = useListContext();
  const [prevUsernameFilter, setPrevUsernameFilter] = useState(
    filterValues["username"] || ""
  );

  useEffect(() => {
    const currentUsernameFilter = filterValues["username"] || "";
    if (prevUsernameFilter !== "" && currentUsernameFilter === "") {
      setFilters({ username: filterValues.username }, null);
    }
    setPrevUsernameFilter(currentUsernameFilter);
  }, [filterValues, setFilters]);

  return (
    <>
      <Box sx={{ mb: 2 }}>
        <StatusFilter />
        <FilterLiveSearch
          source="username"
          label={translate("pos.users.filter.username")}
          alwaysOn
        />
      </Box>
    </>
  );
};

export const UserList: React.FC<ListProps> = (props) => {
  const theme = useTheme();
  const translate = useTranslate();

  return (
    <Box sx={{ p: 0 }}>
      <Paper elevation={3} sx={{ width: "100%", overflowX: "auto", p: 2 }}>
        <Typography variant="h6" gutterBottom>
          {translate("pos.users.title")}
        </Typography>
        <Stack direction="column" spacing={2}>
          <List<UserRecord>
            {...props}
            actions={<UserActions />}
            filters={<UserFilters />}
            perPage={25}
            sort={{ field: "username", order: "ASC" }}
          >
            <Datagrid rowClick="edit">
              <TextField label="ID" source="id" />
              <TextField label="CITY" source="city" />
              <TextField label="COUNTRY" source="country" />
              <TextField label="POSTAL CODE" source="postalCode" />
              <TextField label="USERNAME" source="username" />
              <TextField label="address" source="address" />
              <EmailField label="EMAIL" source="email" />
              <TextField label="ROLE ID" source="roleID" />
              <DeleteButton sx={{ color: theme.palette.error.main }} />
            </Datagrid>
          </List>
        </Stack>
      </Paper>
    </Box>
  );
};
