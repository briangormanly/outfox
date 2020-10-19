FROM node:latest
RUN npm install
WORKDIR /server
RUN npm install
WORKDIR /
WORKDIR /client
RUN npm install
WORKDIR /
EXPOSE 3000
COPY . .
CMD npm run dev
