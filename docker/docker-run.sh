#!/usr/bin/env bash

# docker build -t test:latest -f docker/Dockerfile .


 #docker run -p 1111:8080 test:latest

#  docker run -p 300:300 -v /Users/doanconghuong/finchpayment:/usr/src/app -w "/usr/src/app" node:11 npm start
# docker run -p 300:300 -v $(pwd):/usr/src/app -w "/usr/src/app" node:11 npm start

#docker run -d --name my-postgres postgres

# docker-compose -f docker/docker-compose1.yml up postgresdb