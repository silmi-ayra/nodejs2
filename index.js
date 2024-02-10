//index.js
import express from "express";
import ip from "ip";
const app = express();

//GET RESPONSE => STRING
app.get('/', (req, res, next) => {
  res.send('Response tanpa Router')
})
app.use(express.json())

const router = express.Router();
//ROUTER => GET RESPONSE => OBJECT
const dtuser1 = {
  email: "satu1@gmail.com",
  password: "123456789",
}
router.get('/', (req, res, next) => {
  res.json({
    message: 'GET Data User Sukses',
    data: dtuser1
  })
})
// ROUTER => GET RESPONSE => STRING
router.post('/', (req, res, next) => {
  res.json({
    message: 'POST Data User Sukses',
    data: req.body
  })
})
app.use("/dtuser", router)

const PORT = 3500

app.listen(PORT, () => console.log(`Server running on: ${ip.address()}: ${PORT}`))