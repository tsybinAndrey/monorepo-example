FROM node:12.16-alpine

ARG path_to_service

RUN echo "we are building this service at this path: ${path_to_service}"

RUN apk update && apk add --no-cache yarn && apk add --no-cache tini

WORKDIR /usr/src/app

COPY ${path_to_service}/package*.json ./
COPY ${path_to_service}/yarn.lock ./

RUN yarn install --production

COPY ${path_to_service} .

ENV NODE_ENV=production

EXPOSE 3000

USER node

ENTRYPOINT ["/sbin/tini", "--"]

CMD [ "node", "index.js" ]