require('dns').setServers(['8.8.8.8', '1.1.1.1']);
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
const PORT =  process.env.PORT || 5000;
connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => 
{
  res.send("CyberLearn Backend Running 🚀");
});

app.listen(PORT, () => 
{
  console.log(`Server running on port ${PORT}`);
});