// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var protos_solution_pb = require('../protos/solution_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');

function serialize_Result(arg) {
  if (!(arg instanceof protos_solution_pb.Result)) {
    throw new Error('Expected argument of type Result');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Result(buffer_arg) {
  return protos_solution_pb.Result.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Submission(arg) {
  if (!(arg instanceof protos_solution_pb.Submission)) {
    throw new Error('Expected argument of type Submission');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Submission(buffer_arg) {
  return protos_solution_pb.Submission.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProblemSolverService = exports.ProblemSolverService = {
  getResult: {
    path: '/ProblemSolver/GetResult',
    requestStream: false,
    responseStream: false,
    requestType: protos_solution_pb.Submission,
    responseType: protos_solution_pb.Result,
    requestSerialize: serialize_Submission,
    requestDeserialize: deserialize_Submission,
    responseSerialize: serialize_Result,
    responseDeserialize: deserialize_Result,
  },
};

exports.ProblemSolverClient = grpc.makeGenericClientConstructor(ProblemSolverService);
