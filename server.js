const express = require("express");
const dotenv = require("dotenv");
const app = express();
const PORT = process.env.PORT || 3000;
const mongodb = require("./config/db");
const passport = require("passport");
const session = require("express-session");

dotenv.config();
mongodb.connectDB();

app.use(express.json());

// Routes
app.use("/", require("./routes/index"));
app.use("/api-docs", require("./routes/swagger"));
app.use("/spellcasters", require("./routes/spellcasters"));
app.use("/spells", require("./routes/spells"));

// Catch-all for unknown routes
app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

// Global error handler
app.use((error, req, res, next) => {
  console.error(error.stack);
  res
    .status(error.status || 500)
    .json({ error: error.message || "Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
