FROM node:15.5.0-alpine3.10

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

CMD [ "node", "index.js" ]