#!/bin/sh
PROTOS_DIR=../../protos
GRPC_DIR=./src
OUT_DIR=src/protos

mkdir -p ${OUT_DIR}

python3 -m grpc_tools.protoc \
  --python_out=${GRPC_DIR} \
  --grpc_python_out=${GRPC_DIR} \
  -I ../../ \
  ${PROTOS_DIR}/*.proto

test -f ${OUT_DIR}/__init__.py || touch ${OUT_DIR}/__init__.py