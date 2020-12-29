FROM node:15.5.0-alpine3.10 as build

WORKDIR /client

COPY package.json package-lock.json ./

RUN apk add python2 make --no-cache && npm ci && apk del python2 make

COPY . .

RUN npm run build

FROM elijah/nginx:1.0.0

WORKDIR /usr/share/nginx/html

COPY --from=build /client/build /client/scripts ./

RUN ./load_config_path.sh

ENTRYPOINT [ "./entrypoint.sh" ]
