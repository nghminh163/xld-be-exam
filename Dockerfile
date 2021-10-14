# layer caching
FROM node:lts-alpine

EXPOSE 3000
WORKDIR /app

ADD package.json yarn.lock /app/
RUN yarn --pure-lockfile

ADD . /app

RUN yarn build
RUN yarn prisma:generate
RUN yarn prisma:push

CMD ["yarn", "start"]
