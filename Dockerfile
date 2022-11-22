FROM  node:alpine

WORKDIR /app

ADD package.json yarn.lock ./
RUN yarn install --production

ENV PORT=3000

ADD . ./
EXPOSE ${PORT}

CMD [ "yarn", "start" ]
