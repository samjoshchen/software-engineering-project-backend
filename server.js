require('dns').setServers(['8.8.8.8', '1.1.1.1']);
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const lessonRoutes = require("./routes/lessonRoutes");
const chapterRoutes = require("./routes/chapterRoutes")

const app = express();
const PORT =  process.env.PORT || 5000;
connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/lessons", lessonRoutes);
app.use("/api/chapters", chapterRoutes);

app.get("/", (req, res) => 
{
  res.send("CyberLearn Backend Running 🚀");
});

app.listen(PORT, () => 
{
  console.log(`Server running on port ${PORT}`);
});