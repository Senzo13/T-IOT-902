const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3062;

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

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
