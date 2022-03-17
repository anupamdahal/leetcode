from concurrent import futures
import grpc

from protos.solution_pb2_grpc import add_ProblemSolverServicer_to_server
from server.GetResult import GetResult

def serve():
  server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
  add_ProblemSolverServicer_to_server(GetResult(), server)
  server.add_insecure_port('[::]:50051')
  server.start()
  print('listening on port ')
  server.wait_for_termination()


if __name__ == '__main__':
  # logging.basicConfig()
  serve()
