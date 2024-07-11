// @ts-nocheck
import React, { useState } from "react";
import { useTranslate } from "react-admin";
import { Card, CardContent, useTheme, IconButton } from "@mui/material";
import { PieChart, Pie, ResponsiveContainer, Label, Cell } from "recharts";
import { HeaderCard } from "@components/dashboard/custom/cards/header";
import { FooterBar } from "@components/dashboard/custom/cards/footer";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const DashboardPieChart = ({ data, legend }) => {
  const theme = useTheme();
  const translate = useTranslate();
  const { title, subtitle } = legend;

  const modes = [
    "average_daily",
    "average_weekly",
    "average_monthly",
    "average_yearly",
  ];
  const [displayMode, setDisplayMode] = useState(modes[0]);

  const displayValue = data[displayMode];

  const COLORS = [
    theme.palette.primary.main,
    "#f7f4f3",
    theme.palette.primary.main,
    "#f7f4f3",
  ];

  const handleModeChange = () => {
    const currentIndex = modes.indexOf(displayMode);
    const nextIndex = (currentIndex + 1) % modes.length;
    setDisplayMode(modes[nextIndex]);
  };

  const dynamicTitle = `${title} ${translate(
    `pos.dashboard.average.${displayMode}`
  ).toUpperCase()}`;

  const handlePieClick = (mode) => {
    setDisplayMode(mode);
  };

  return (
    <div>
      <Card>
        <HeaderCard title={dynamicTitle}>
          <IconButton
            size="small"
            style={{ marginLeft: "auto" }}
            onClick={handleModeChange}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </HeaderCard>
        <CardContent sx={{ marginTop: 1.3 }}>
          <ResponsiveContainer height={84}>
            <PieChart>
              <Pie
                data={modes.map((mode, index) => ({
                  name: mode,
                  value: data[mode],
                  index,
                }))}
                cx={"50%"}
                cy={"50%"}
                innerRadius={35}
                outerRadius={40}
                fill="#8884d8"
                paddingAngle={1}
                sx={{ border: "none" }}
                dataKey="value"
                onClick={(event, index) => handlePieClick(modes[index])} // Correct usage
              >
                {modes.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
                <Label
                  value={displayValue}
                  position="center"
                  style={{
                    fill: theme.palette.text.primary,
                    fontSize: "20px",
                    fontFamily: theme.typography.fontFamily,
                    alignmentBaseline: "middle",
                    textAnchor: "middle",
                  }}
                />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <FooterBar title={subtitle} />
        </CardContent>
      </Card>
    </div>
  );
};
