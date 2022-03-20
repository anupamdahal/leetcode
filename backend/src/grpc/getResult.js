const { client } = require('./client')
const proto = require('../protos/solution_pb')
const { SOLVER_HOST } = require('../../config')

exports.getResult = ({problemId, answer, testcase}) => 
  new Promise((resolve, reject) => {
    const submission = new proto.Submission()
    submission.setProblemid(problemId)
    submission.setAnswer(answer)
    submission.setTestcase(testcase)
    console.log(submission)
    client(SOLVER_HOST).getResult(submission, (err, result) =>
      err ? console.error(err) : resolve(result)    
    )
})
