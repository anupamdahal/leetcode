const express = require('express')
const { PORT } = require("./config.js")
const { problemsRoute } = require("./src/routes/problems.js")
const { PROBLEMS, RUN, SUBMIT } = require("./src/constants/enumRoutes.js")
const { getResult } = require("./src/grpc/getResult.js")

const app = express()
app.use(PROBLEMS, problemsRoute)
// app.use(RUN, runRoute)
// app.use(SUBMIT, submitRoute)

getResult({
  problemId: "2",
  answer: "kljafl",
  testcase: null
}).then(res => {
  console.log('reading')
  console.log(res)
})


app.listen(PORT)