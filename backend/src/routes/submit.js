const {Router} = require('express')

const submitRoute = Router()

submitRoute.post('/', async (req, res) => {
  //TODO: validate request
})

exports.submitRoute = submitRoute