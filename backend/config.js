const dotenv = require('dotenv')

exports.ENV    = dotenv.config({path: '../.env'})
exports.PORT   = process.env.BACKEND_PORT || 8080
exports.SOLVER_HOST = `${process.env.LOCAL_HOST}:${process.env.PYTHON_SERVER_PORT}`