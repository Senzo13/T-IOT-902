// @ts-nocheck
import React from "react";
import { Typography, useTheme } from "@mui/material";

export const FooterBar = ({ title }) => {
  const theme = useTheme();

  // Séparation du titre avant et après le ":"
  const titleParts = title.split(":");
  const beforeColon = titleParts[0];
  const afterColon =
    titleParts.length > 1 ? `:${titleParts.slice(1).join(":")}` : "";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center", // S'assurer que le contenu de la div est centré verticalement
        width: "100%",
      }}
    >
      <Typography
        variant="subtitle1"
        component="div"
        style={{
          height: "34px",
          fontWeight: "500",
          display: "flex", // Ajouter flex ici
          flexDirection: "row", // S'assurer que les éléments sont en ligne
          alignItems: "center", // Centrer les éléments verticalement dans la Typography
          letterSpacing: "2px",
          marginTop: "14px",
          justifyContent: "center", // Centrer les éléments horizontalement dans la Typography
          backgroundColor: theme.palette.tertiary.main,
          width: "100%", // Prend toute la largeur disponible
        }}
      >
        <div style={{ margin: 0 }}>{beforeColon}</div>
        {afterColon && (
          <>
            <div
              style={{
                margin: 0,
                marginLeft: "4px",
              }}
            >
              :
            </div>
            <div
              style={{
                margin: 0,
                color: theme.palette.secondary.main,
                marginLeft: "4px",
              }}
            >
              {afterColon.substring(1)}
            </div>
          </>
        )}
      </Typography>
    </div>
  );
};
