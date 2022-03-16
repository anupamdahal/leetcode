import * as problems from '../../../db/problems.json'
import { DEFAULT } from '../../constants/constants'

export const getProblem = id => problems[id]
export const getProblems = () => problems[DEFAULT]