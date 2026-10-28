const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const hrRoutes = require("./routes/hr");
const managerRoutes = require("./routes/manager");
const employeeRoutes = require("./routes/employee");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "StaffSync API is running." });
});

app.use("/api/auth", authRoutes);
app.use("/api/hr", hrRoutes);
app.use("/api/manager", managerRoutes);
app.use("/api/employee", employeeRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("MONGO_URI is missing. Copy .env.example to .env and set your values.");
  process.exit(1);
}

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`StaffSync backend running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  });
