const fs = require("fs");
const http = require("http");
const https = require("https");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3062;

const envInfo = {
  version: process.env.NODE_ENV || "development",
};

let server;

if (envInfo.version === "production" || envInfo.version === "test") {
  // Définir le chemin du fichier PFX en fonction de l'environnement
  let pfxPath;

  if (envInfo.version === "production") {
    pfxPath =
      "C:\\ProgramData\\certify\\assets\\iot-902.lgiralt.com\\20240914_fb116436.pfx";
  } else if (envInfo.version === "test") {
    pfxPath =
      "C:\\ProgramData\\certify\\assets\\iot-902.lgiralt.com\\20240914_fb116436.pfx";
  }

  const options = {
    pfx: fs.readFileSync(pfxPath),
  };

  server = https.createServer(options, app);
} else {
  server = http.createServer(app);
}

// Configurer CORS pour accepter les requêtes depuis le port 5162
const corsOptions = {
  origin: ["http://localhost:5173", "https://localhost:5173"],
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Route pour vérifier si l'application est en vie
app.get("/health", (req, res) => {
  res.status(200).send("Server is alive and well!");
});

// Route pour simuler les données des capteurs
app.get("/simulate-sensor-data", (req, res) => {
  const simulatedData = {
    "LILYGO_TTGO_T-Beam_V1.1_ESP32_LORA": {
      wifi: Math.random() > 0.5,
      bluetooth: Math.random() > 0.5,
      lora: Math.random() > 0.5,
      gps: {
        latitude: (Math.random() * 180 - 90).toFixed(6),
        longitude: (Math.random() * 360 - 180).toFixed(6),
      },
      battery: (Math.random() * 100).toFixed(2) + "%",
    },
    "GY-BME280": {
      temperature: (Math.random() * 35 + 5).toFixed(2) + "°C",
      humidity: (Math.random() * 100).toFixed(2) + "%",
      pressure: (Math.random() * 20 + 980).toFixed(2) + "hPa",
    },
    SPH0645_I2S_MEMS: {
      soundLevel: (Math.random() * 100).toFixed(2) + "dB",
    },
    Heltec_WiFi_LoRa_32_V3: {
      wifi: Math.random() > 0.5,
      bluetooth: Math.random() > 0.5,
      lora: Math.random() > 0.5,
      display: "OK",
    },
    Sony_18650_VTC6: {
      battery: (Math.random() * 100).toFixed(2) + "%",
    },
    Waveshare_Dust_Sensor: {
      dustDensity: (Math.random() * 500).toFixed(2) + "µg/m³",
    },
  };

  res.status(200).json(simulatedData);
});

// Route pour simuler une connexion utilisateur
app.post("/auth", (req, res) => {
  const { username, password } = req.body;

  // Simuler une validation des informations d'identification
  if (username === "admin" && password === "password") {
    res.status(200).json(true);
  } else {
    res.status(401).json(false);
  }
});

server.listen(port, () => {
  console.log(
    `Server is running on ${
      envInfo.version === "production" || envInfo.version === "test"
        ? "https"
        : "http"
    }://localhost:${port}`
  );
});
