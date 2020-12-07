FROM node:12

LABEL MAINTAINER Robert Lynch "robert.lynch3@marist.edu"
COPY client/package*.json ./

RUN npm install
COPY . /

CMD npm start --prefix client