import * as React from "react";
import { useTranslate } from "react-admin";
import { useTheme, Card, CardContent } from "@mui/material";
import { ResponsiveContainer } from "recharts";
import { HeaderCard } from "@components/dashboard/custom/cards/header";

export const UserLatestList: React.FC<any> = ({ props }) => {
  const theme = useTheme();
  const translate = useTranslate();

  return (
    <Card>
      <CardContent style={{ width: "100%" }}>
        <HeaderCard
          title={`${translate("pos.dashboard.list.last_users")} (${
            props.length
          })`}
        />
        <ResponsiveContainer
          height={590}
          width="100%"
          style={{ overflow: "auto" }}
        >
          {props.map((user: any, index: number) => (
            <>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    padding: 20,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                    }}
                  >
                    <img
                      src={"https://top-serveurs.net/images/logo-icon.svg"}
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        marginRight: 20,
                      }}
                      alt="user"
                    />
                    <div style={{ textAlign: "left" }}>
                      <p
                        style={{ fontSize: 20, fontWeight: "bold", margin: 0 }}
                      >
                        {user.username}
                      </p>
                      <p style={{ fontSize: 15, margin: 0 }}>{user.email}</p>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    marginRight: 20,
                  }}
                >
                  <p
                    style={{
                      fontSize: 12,
                      fontWeight: "bold",
                      flex: "1 1 auto",
                      textAlign: "right",
                      fontStyle: "italic",
                    }}
                  >
                    {user.createdAt}
                  </p>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  borderBottom:
                    index === props.length - 1 ? "none" : "1px solid",
                  borderColor: theme.palette.background.paper,
                }}
              ></div>
            </>
          ))}
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
