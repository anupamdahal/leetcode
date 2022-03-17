import { Submission } from '../protos/solution_pb'
import {client} from './client'

export const getResult = ({problemId, answer, testcase}) => 
  new Promise((resolve, reject) => {
    const submission = new Submission(problemId, answer, testcase)
    await client.getResult(submission, (err, result) =>
      err ? reject(err) : resolve(result)    
    )
})
