#!/bin/bash
PROTOS_DIR=../protos
GRPC_DIR=./src

# Generate JavaScript code
yarn run grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${GRPC_DIR} \
    --grpc_out=${GRPC_DIR} \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    -I ../ \
    ${PROTOS_DIR}/*.proto