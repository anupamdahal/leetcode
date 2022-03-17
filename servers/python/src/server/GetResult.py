from solver.solver import solve
from protos.solution_pb2_grpc import ProblemSolverServicer
from protos.solution_pb2 import Result

class GetResult(ProblemSolverServicer):
  def GetResult(self, request, context):
    result = solve(
      request.problemId,
      request.answer,
      request.testcase
    )
    return Result(
      success=result["success"],
      noOfSuccess=result["noOfSuccess"],
      noOfFailed=result["noOfFailed"],
      output=result["output"]
    )