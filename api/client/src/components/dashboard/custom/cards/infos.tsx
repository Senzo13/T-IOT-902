// @ts-nocheck
import React from "react";
import { Card, Typography, useTheme } from "@mui/material";
import { ResponsiveContainer } from "recharts";
import { HeaderCard } from "@components/dashboard/custom/cards/header";
export const InfoCard = ({ title, value }) => {
  const theme = useTheme();
  return (
    <Card
      style={{
        flex: "1 1 30%",
        maxWidth: "100%",
      }}
    >
      <HeaderCard title={title} />
      <ResponsiveContainer height={60}>
        <Typography
          variant="h6"
          component="div"
          style={{
            color: theme.palette.text.primary,
            paddingLeft: "14px",
            paddingTop: "14px",
            paddingBottom: "14px",
            fontWeight: "bold",
            letterSpacing: "2px",
            margin: 0,
          }}
        >
          {value}
        </Typography>
      </ResponsiveContainer>
    </Card>
  );
};
