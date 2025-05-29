# syntax=docker/dockerfile:1

ARG NODE_VERSION=18.20.6

FROM node:${NODE_VERSION}

ENV NODE_ENV production

WORKDIR /usr/src/app

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    npm ci --omit=dev

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
