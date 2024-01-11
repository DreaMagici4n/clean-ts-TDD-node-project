FROM node:20.11.0-alpine3.19

WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY ~/.ssh ../.ssh
CMD ["sh", "-c", "apk add git openssh && npm i"]