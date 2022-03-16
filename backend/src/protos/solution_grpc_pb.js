// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var protos_solution_pb = require('../protos/solution_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');

function serialize_result(arg) {
  if (!(arg instanceof protos_solution_pb.result)) {
    throw new Error('Expected argument of type result');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_result(buffer_arg) {
  return protos_solution_pb.result.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_submission(arg) {
  if (!(arg instanceof protos_solution_pb.submission)) {
    throw new Error('Expected argument of type submission');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_submission(buffer_arg) {
  return protos_solution_pb.submission.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProblemSolverService = exports.ProblemSolverService = {
  solve: {
    path: '/ProblemSolver/Solve',
    requestStream: false,
    responseStream: false,
    requestType: protos_solution_pb.submission,
    responseType: protos_solution_pb.result,
    requestSerialize: serialize_submission,
    requestDeserialize: deserialize_submission,
    responseSerialize: serialize_result,
    responseDeserialize: deserialize_result,
  },
};

exports.ProblemSolverClient = grpc.makeGenericClientConstructor(ProblemSolverService);
