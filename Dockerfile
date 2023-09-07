FROM node:18.12.1-alpine

RUN mkdir /app
WORKDIR /app

COPY . .

ENV NODE_ENV="production"

RUN yarn install --immutable --immutable-cache --check-cache

EXPOSE 3000

ENTRYPOINT [ "yarn", "start" ] 