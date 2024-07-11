import React, { useEffect, useState } from "react";
import { useDataProvider, ListProps } from "react-admin";
import { Grid, useTheme } from "@mui/material";
import { DashboardBarChart } from "@components/dashboard/custom/barChart/bar.chart";
import { DashboardSensorData } from "@interfaces/dashboard/dashboard.types";

export const Analytics: React.FC<ListProps> = () => {
  const theme = useTheme();
  const dataProvider = useDataProvider();
  const [sensorData, setSensorData] = useState({} as DashboardSensorData);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("currentDate", currentDate);
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const fetchSensorData = async () => {
      try {
        const { data } = await dataProvider.getSensorData();
        console.log("data sensors", data);
        setSensorData(data.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchSensorData();

    const intervalId = setInterval(fetchSensorData, 10000);

    return () => clearInterval(intervalId);
  }, [dataProvider]);

  const hasData =
    sensorData &&
    sensorData.LILYGO_TTGO_T_Beam_V1_1_ESP32_LORA &&
    sensorData.GY_BME280 &&
    sensorData.SPH0645_I2S_MEMS &&
    sensorData.Heltec_WiFi_LoRa_32_V3 &&
    sensorData.Sony_18650_VTC6 &&
    sensorData.Waveshare_Dust_Sensor;

  return (
    <>
      {hasData ? (
        <>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={6}>
              <DashboardBarChart
                data={sensorData.LILYGO_TTGO_T_Beam_V1_1_ESP32_LORA}
                titleName="LILYGO TTGO T-BEAM V1.1 ESP32 LORA"
                valueName="value"
                height={280}
                legend={{
                  left: "PERCENTAGE",
                  right: "YEARS",
                  color: {
                    primary: theme.palette.primary.main,
                    secondary: theme.palette.background.default,
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <DashboardBarChart
                data={sensorData.GY_BME280}
                titleName="GY-BME280"
                valueName="value"
                height={280}
                legend={{
                  left: "DEGREE",
                  right: "YEARS",
                  color: {
                    primary: theme.palette.primary.main,
                    secondary: theme.palette.background.default,
                  },
                }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid item xs={12} md={6} lg={6}>
              <DashboardBarChart
                data={sensorData.SPH0645_I2S_MEMS}
                titleName="SPH0645 I2S MEMS"
                valueName="value"
                height={280}
                legend={{
                  left: "PERCENTAGE",
                  right: "YEARS",
                  color: {
                    primary: theme.palette.primary.main,
                    secondary: theme.palette.background.default,
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <DashboardBarChart
                data={sensorData.Heltec_WiFi_LoRa_32_V3}
                titleName="HELTEC WIFI LORA 32 (V3)"
                height={280}
                valueName="value"
                legend={{
                  left: "PERCENTAGE",
                  right: "YEARS",
                  color: {
                    primary: theme.palette.primary.main,
                    secondary: theme.palette.background.default,
                  },
                }}
              />
            </Grid>
          </Grid>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
