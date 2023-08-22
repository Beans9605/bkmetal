FROM node:18.12.1-alpine

RUN mkdir /app
WORKDIR /app

COPY . .

ENV NODE_ENV="production"

RUN yarn

EXPOSE 3000

ENTRYPOINT [ "yarn", "start" ] 