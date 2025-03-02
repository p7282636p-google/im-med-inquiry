#!/bin/bash

PORT=$1

if [ -z "$PORT" ]; then
  echo "Usage: $0 <port>"
  exit 1
fi

PID=$(lsof -t -i :$PORT)

if [ -n "$PID" ]; then
  echo "Killing process $PID using port $PORT"
  kill -9 $PID
else
  echo "No process found using port $PORT"
fi
