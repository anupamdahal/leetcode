const problems = require('../../../db/problems.json')
const { DEFAULT } = require('../../constants/constants')

exports.getProblem = id => problems[id]
exports.getProblems = () => problems