const express = require('express')
const app = express()
require("dotenv").config()
const path = require("path")

app.use(express.json())

let Rollbar = require('rollbar')
let rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
})

rollbar.log('Hello world!')

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./index.html"))
})

const port = process.env.PORT || 5050

app.listen(port, () => console.log(`Server listening on ${port}`))