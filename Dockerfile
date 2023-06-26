FROM node:18.12.1-alpine

RUN mkdir /app
WORKDIR /app

COPY . .

RUN yarn

RUN yarn build

EXPOSE 3000

ENTRYPOINT [ "yarn", "start" ] 