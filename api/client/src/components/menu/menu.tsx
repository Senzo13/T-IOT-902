// CustomMenu.tsx
import React from "react";
import { MenuItemLink, useTranslate } from "react-admin";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AnalyticsIcon from "@mui/icons-material/BarChart";
import { Box, useTheme } from "@mui/material";

const CustomMenu: React.FC = () => {
  const theme = useTheme();
  const translate = useTranslate();

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        paddingTop: 6,
        width: "100%",
        zIndex: 1000,
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <MenuItemLink
        to="/"
        primaryText={translate("pos.menu.dashboard")}
        leftIcon={<DashboardIcon />}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
      <MenuItemLink
        to="/analytics"
        primaryText={translate("pos.analytics.name")}
        leftIcon={<AnalyticsIcon />}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
      <MenuItemLink
        to="/customers"
        primaryText={translate("pos.menu.users")}
        leftIcon={<PeopleIcon />}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      />
    </Box>
  );
};

export default CustomMenu;
