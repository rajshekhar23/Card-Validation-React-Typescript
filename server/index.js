const express = require("express")
const cors = require('cors')

const app = express()
const port = 8000
let userBalance = 0
app.use(express.json())
app.use(cors(), function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.get("/", (req, res) => {
  res.send("Hello Tap Payment Server!")
})
app.get("/api/balance", (req, res) => {
  res.status(200).send({ balance: userBalance })
})
app.post("/api/balance", (req, res) => {
  const { amount } = req.body
  if (typeof amount !== "number" && amount > 0) return res.status(400).send({ error: "Invalid amount!" })
  userBalance += amount
  res.status(200).send({ balance: 10 });
})
app.listen(port, () => {
  console.log(`server app listening at http://localhost:${port}`)
})
