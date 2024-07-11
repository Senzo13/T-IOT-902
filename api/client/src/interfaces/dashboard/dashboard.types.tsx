export interface FormattedServer {
  createdAt: string;
  name: string;
  shortDescription: string;
}

interface FormattedUser {
  createdAt: string;
  username: string;
  email: string;
}

export interface DashboardSensorData {
  LILYGO_TTGO_T_Beam_V1_1_ESP32_LORA: {
    wifi: boolean;
    bluetooth: boolean;
    lora: boolean;
    gps: {
      latitude: string;
      longitude: string;
    };
    battery: string;
  };
  GY_BME280: {
    temperature: string;
    humidity: string;
    pressure: string;
  };
  SPH0645_I2S_MEMS: {
    soundLevel: string;
  };
  Heltec_WiFi_LoRa_32_V3: {
    wifi: boolean;
    bluetooth: boolean;
    lora: boolean;
    display: string;
  };
  Sony_18650_VTC6: {
    battery: string;
  };
  Waveshare_Dust_Sensor: {
    dustDensity: string;
  };
}

interface SensorChartData {
  luminosities: {
    date: string;
    value: number;
  };
  temperatures: {
    date: string;
    value: number;
  };
  airHumidities: {
    date: string;
    value: number;
  };
  soilMoistures: {
    date: string;
    value: number;
  };
}

export interface DashboardInfo {
  infos: {
    projectName: {
      en: string;
      fr: string;
    };
    backVersion: string;
    frontVersion: string;
    gitInfo: any;
  };
  sensors: {
    total: number;
    average_daily: number;
    average_weekly: number;
    average_monthly: number;
    average_yearly: number;
    chartData: SensorChartData;
  };
  users: {
    total: number;
    average_daily: number;
    average_weekly: number;
    average_monthly: number;
    average_yearly: number;
    latest: FormattedUser[];
    chartData: any;
  };
  plants: {
    total: number;
    average_daily: number;
    chartData: any;
  };
  varieties: {
    total: number;
    average_daily: number;
    chartData: any;
  };
  categories: {
    total: number;
    average_daily: number;
  };
  games: {
    total: number;
  };
}
