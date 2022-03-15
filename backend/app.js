import express from "express"
import { PORT } from "./config.js"
import { problemsRoute } from "./src/routes/problems.js"
import { PROBLEMS, RUN, SUBMIT } from "./src/constants/enumRoutes.js"

const app = express()
app.use(PROBLEMS, problemsRoute)
// app.use(RUN, runRoute)
// app.use(SUBMIT, submitRoute)

app.listen(PORT)