#!/bin/sh

unset dynamodb
command=bash

while [[ "$#" -gt 0 ]]; do
    case $1 in
        -d|--dynamodb) dynamodb="yes" ;;
        -c|--command) command="$2"; shift ;;
        *) echo "Unknown parameter passed: $1"; shift ;;
    esac
    shift
done

if [ "$dynamodb" = 'yes' ];
then
  docker run \
    --name dynamodb-local \
    -p 0.0.0.0:8000:8000 \
    -d amazon/dynamodb-local
  OPT='--link dynamodb-local -e DYNAMODB_LOCAL_ENABLE=true'
else
  OPT='--net host'
fi

docker build \
  --build-arg COMMAND="$command" \
  -t lambda-environment-node \
  --network="host" \
  docker/. &&
docker run \
  $OPT \
  -u`id -u`:`id -g` \
  -v $(pwd):/user/project \
  -v ~/.aws:/user/.aws \
  -v ~/.npmrc:/user/.npmrc \
  -it lambda-environment-node

status=$?

if [ "$dynamodb" = 'yes' ]; then
  docker stop dynamodb-local -t 0
  docker rm -f -v dynamodb-local
fi

return $status
