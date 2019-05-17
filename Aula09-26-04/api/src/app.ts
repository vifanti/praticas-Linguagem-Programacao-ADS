import express = require("express");

// Our Express APP config
const app = express();
app.set("port", process.env.PORT || 3000);

// API Endpoints
app.get("/", (req, res) => {
  res.status(200).send("Hi");
});

// export our app
export default app;