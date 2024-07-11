// @ts-nocheck
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  useTheme,
  IconButton,
} from "@mui/material";
import { ResponsiveContainer } from "recharts";
import { HeaderCard } from "@components/dashboard/custom/cards/header";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import TextAnimation from "@components/dashboard/custom/animatorText/animator.text";

export const DashboardCard = ({ pending, url, color, legend, effect }) => {
  const theme = useTheme();

  return (
    <Card>
      <HeaderCard title={legend.title}></HeaderCard>
      <CardContent style={{ marginTop: -20 }}>
        <ResponsiveContainer
          width="100%"
          height={190}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h2"
            component="div"
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: color ? color : theme.palette.primary.main,
            }}
          >
            {effect ? (
              <TextAnimation text={pending.toString()} delay={100} />
            ) : (
              pending
            )}
          </Typography>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
