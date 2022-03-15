import {Router} from 'express'

import {getProblems} from '../utils/data'

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

export {
  problemsRoute
}
