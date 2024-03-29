#!/bin/sh

command=bash

while [[ "$#" -gt 0 ]]; do
    case $1 in
        -c|--command) command="$2"; shift ;;
        *) echo "Unknown parameter passed: $1"; shift ;;
    esac
    shift
done

docker run \
  --name dynamodb-local \
  -p 0.0.0.0:8000:8000 \
  -d amazon/dynamodb-local

docker build \
  --build-arg COMMAND="$command" \
  -t lambda-environment-node \
  --network="host" \
  docker/. &&
docker run \
  --link dynamodb-local \
  -u`id -u`:`id -g` \
  -v $(pwd):/user/project \
  -v ~/.aws:/user/.aws \
  -v ~/.npmrc:/user/.npmrc \
  -it lambda-environment-node

status=$?

docker stop dynamodb-local -t 0
docker rm -f -v dynamodb-local

return $status
