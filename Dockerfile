FROM node:18-alpine3.15
WORKDIR /home/node/app

RUN apk update && \
    apk add --no-cache git && \
    apk add --update python3 make g++ &&\
    rm -rf /var/cache/apk/*

COPY package.json package-lock.json /home/node/app/

RUN npm ci