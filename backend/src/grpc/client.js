import { ProblemSolverClient } from '../protos/solution_pb'
import { credentials } from 'grpc'

export const client = url => new ProblemSolverClient(
  url,
  credentials.createInsecure(),
)