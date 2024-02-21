const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = 3000;

app.use(cors());

app.get("/sentry", async (req, res) => {
  try {
    const response = await axios.get(
      "https://o4504445735927808.ingest.sentry.io/api/4504445739532288/envelope",
      {
        params: req.query,
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});
