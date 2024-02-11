//index.js
import express from "express";
import ip from "ip";
import UserRouter from "./routes/UserRoute.js";
const app = express();

//GET RESPONSE => STRING
app.get('/', (req, res, next) => {
  res.send('Response tanpa Router')
})
app.use(express.json())

app.use("/dtuser", UserRouter)

const PORT = 3500

app.listen(PORT, () => console.log(`Server running on: ${ip.address()}: ${PORT}`))