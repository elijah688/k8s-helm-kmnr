FROM node:15.5.0-alpine3.10

RUN apk --no-cache add curl

CMD [ "which", "curl" ]