// @ts-nocheck
import React, { useState, ReactNode } from "react";
import {
  Card,
  CardContent,
  Typography,
  useTheme,
  Button,
  ButtonGroup,
} from "@mui/material";
import {
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
} from "recharts";
import { HeaderCard } from "@components/dashboard/custom/cards/header";
import { useTranslate } from "react-admin";
interface DashboardBarChartProps {
  data: any;
  total?: number;
  titleName: string;
  valueName: string;
  height?: number;
  legend: {
    left: string;
    right: string;
    color: {
      primary: string;
      secondary: string;
    };
  };
  children?: ReactNode;
}

function getWeekNumber(d: Date) {
  const firstDayOfYear = new Date(d.getFullYear(), 0, 1);
  const pastDaysOfYear = (d.getTime() - firstDayOfYear.getTime()) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

export const DashboardBarChart: React.FC<DashboardBarChartProps> = ({
  data,
  total,
  valueName,
  titleName,
  height = 250,
  legend,
  children,
}) => {
  const theme = useTheme();
  const nameWithLength = `${titleName} ${total ? `(${total})` : ""}`;
  const [period, setPeriod] = useState("year");
  const translate = useTranslate();
  const filteredData = data.filter((item: any) => {
    const date = new Date(item.date);
    const now = new Date();

    if (period === "day") return date.toDateString() === now.toDateString();
    if (period === "week") return getWeekNumber(date) === getWeekNumber(now);
    if (period === "month") return date.getMonth() === now.getMonth();
    if (period === "year") return date.getFullYear() === now.getFullYear();
    return false;
  });

  // Génération d'un identifiant unique pour le gradient
  const gradientId = `gradientColor-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <Card
      style={{
        flex: "1 1 30%",
        maxWidth: "100%",
      }}
    >
      <CardContent style={{ width: "100%" }}>
        <HeaderCard title={nameWithLength} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            paddingTop: 16,
          }}
        >
          <ButtonGroup
            variant="outlined"
            size="small"
            style={{ marginRight: 16 }}
          >
            {/* <Button
              onClick={() => setPeriod("day")}
              color={period === "day" ? "secondary" : undefined}
            >
              Jour
            </Button> */}
            <Button
              onClick={() => setPeriod("week")}
              color={period === "week" ? "secondary" : undefined}
            >
              {translate("pos.dashboard.week")}
            </Button>
            <Button
              onClick={() => setPeriod("month")}
              color={period === "month" ? "secondary" : undefined}
            >
              {translate("pos.dashboard.month")}
            </Button>
            <Button
              onClick={() => setPeriod("year")}
              color={period === "year" ? "secondary" : undefined}
            >
              {translate("pos.dashboard.year")}
            </Button>
          </ButtonGroup>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "8px",
          }}
        >
          <Typography
            style={{
              transform: "rotate(-90deg)",
              whiteSpace: "nowrap",
              width: "60px",
              display: "flex",
              marginRight: "-20px",
              justifyContent: "center",
              letterSpacing: "2px",
              ...theme.typography.h6,
              fontWeight: "500",
            }}
          >
            {legend.left}
          </Typography>

          <ResponsiveContainer
            width="100%"
            height={height}
            style={{ padding: 4, margin: 0 }}
          >
            <AreaChart data={filteredData}>
              <defs>
                <linearGradient
                  id={gradientId}
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor="rgba(48, 157, 235, 1)"
                    stopOpacity="1"
                  />
                  <stop
                    offset="25%"
                    stopColor="rgba(48, 124, 221, 0.9)"
                    stopOpacity="1"
                  />
                  <stop
                    offset="50%"
                    stopColor="rgba(48, 124, 221, 0.9)"
                    stopOpacity="1"
                  />
                  <stop
                    offset="65%"
                    stopColor="rgba(48, 157, 235, 0.9)"
                    stopOpacity="1"
                  />
                  <stop
                    offset="100%"
                    stopColor="rgba(48, 157, 235, 1)"
                    stopOpacity="1"
                  />
                </linearGradient>
              </defs>

              <Area
                dataKey={valueName}
                fill={`url(#${gradientId})`}
                stroke="none"
              />
              <CartesianGrid strokeOpacity={0.02} />

              <XAxis
                dataKey="date"
                stroke={theme.palette.text.secondary}
                style={{
                  fontSize: "12px",
                  fontFamily: theme.typography.fontFamily,
                  fontWeight: 450,
                }}
                tickFormatter={(date) => {
                  // Convertir la date en objet Date
                  const dateObj = new Date(date);
                  // Obtenir les deux derniers chiffres de l'année
                  const shortYear = ("" + dateObj.getFullYear()).substr(2);
                  // Formater la date en DD/MM/YY
                  const formattedDate = `${dateObj
                    .getDate()
                    .toString()
                    .padStart(2, "0")}/${(dateObj.getMonth() + 1)
                    .toString()
                    .padStart(2, "0")}/${shortYear}`;
                  return formattedDate;
                }}
              />
              <YAxis />
              <Tooltip
                wrapperStyle={{
                  borderColor: theme.palette.divider,
                  boxShadow: "transparent",
                  backgroundColor: "transparent",
                  color: "black",
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
          <Typography
            variant="subtitle2"
            style={{
              transform: "rotate(90deg)",
              whiteSpace: "nowrap",
              width: "100px",
              display: "flex",
              justifyContent: "center",
              letterSpacing: "2px",
              ...theme.typography.h6,
              fontWeight: "500",
            }}
          >
            {legend.right}
          </Typography>
        </div>
        {children}
      </CardContent>
    </Card>
  );
};
