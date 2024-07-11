import React from "react";
import { Typography, useTheme } from "@mui/material";
import LetterDisplay from "@components/dashboard/custom/letterDisplay/letter.display";
interface HeaderCardProps {
  title: string;
  children?: React.ReactNode;
}

export const HeaderCard: React.FC<HeaderCardProps> = ({ title, children }) => {
  const theme = useTheme();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between", // Assure une répartition équitable de l'espace
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          flexGrow: 1, // Permet au titre de prendre tout l'espace disponible si children n'est pas présent
        }}
      >
        <div
          style={{
            minHeight: "60px",
            height: "auto",
            backgroundColor: theme.palette.primary.main,
            width: "10px",
          }}
        ></div>
        <div
          style={{ width: "100%", display: "flex", flexDirection: "column" }}
        >
          <Typography
            variant="subtitle2"
            component="div"
            style={{
              marginTop: -1,
              paddingRight: "4px",
              paddingLeft: "20px",
              height: "60px",
              fontWeight: "500",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              letterSpacing: "2px",
            }}
          >
            <LetterDisplay text={title} delay={85} />
          </Typography>
          <div
            style={{
              width: "100%",
              borderBottom: "1px solid",
              borderColor: theme.palette.background.paper,
            }}
          ></div>
        </div>
      </div>
      {children && (
        <div
          style={{
            height: "61px",
            padding: "2px",
            backgroundColor: theme.palette.background.paper,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};
