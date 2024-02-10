//index.js
import express from "express";
import ip from "ip";

const app = express();
const PORT = 3500;


"PELAJARAN 2 "

app.listen(PORT, () => console.log(`Server running on: ${ip.address()}: ${PORT}`))
