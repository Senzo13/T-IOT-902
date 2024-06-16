const fs = require("fs");
const http = require("http");
const https = require("https");
const express = require("express");
const bodyParser = require("body-parser");

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

app.use(bodyParser.json());

// Route pour vérifier si l'application est en vie
app.get("/health", (req, res) => {
  res.status(200).send("Server is alive and well!");
});

app.post("/ttn-webhook", (req, res) => {
  console.log("Received data from TTN:");
  console.log(req.body);

  // Traitez les données ici (par exemple, les enregistrer dans une base de données)

  res.status(200).send("Data received");
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
