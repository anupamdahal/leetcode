#!/bin/sh
PROTOS_DIR=../../protos
GRPC_DIR=./src

mkdir -p src/protos

python3 -m grpc_tools.protoc \
  --python_out=${GRPC_DIR} \
  --grpc_python_out=${GRPC_DIR} \
  -I ../../ \
  ${PROTOS_DIR}/*.proto