FROM node:12

LABEL MAINTAINER Robert Lynch "robert.lynch3@marist.edu"
COPY server/package*.json ./

RUN npm install
COPY . /

CMD npm run devts --prefix server