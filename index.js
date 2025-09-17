const express = require("express")
const connectDB = require("./config/db")

const useRoute=require("./routes/userRoutes")
require("dotenv").config();
const cors=require("cors")
const app=express()
connectDB();
app.use(cors());
app.use(express.json());  
app.use("/",useRoute);
app.get("/", (req, res) => {
  res.send("Hello World!")
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server is running on port https://localhost:${PORT}`)
})

module.exports = app
