const express = require('express')
const app = express()
// const path = require('path')
require("dotenv").config()

app.use(express.json())

let Rollbar = require('rollbar')
let rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
})

rollbar.log('Hello world!')



const port = process.env.PORT || 5050

app.listen(port, () => console.log(`Server listening on ${port}`))