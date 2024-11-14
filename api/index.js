const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Example GET endpoint
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express on Vercel!" });
});

// Export the app for Vercel
module.exports = app;
