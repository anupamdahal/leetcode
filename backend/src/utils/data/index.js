import * as problems from '../../../db/problems.json'
export const getProblem = id => problems[id]
export const getProblems = () => problems