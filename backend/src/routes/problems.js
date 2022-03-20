const {Router} = require('express')
const {getProblems} = require('../utils/data')

const problemsRoute = Router()

problemsRoute.get('/', (req, res) => {
  const problems = getProblems()
  const err = problems ? null : problems
  if (err) {
    res.sendStatus(404)
    return
  }
  res.send(problems)
})

exports.problemsRoute = problemsRoute
