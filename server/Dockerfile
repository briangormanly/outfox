FROM node:12
WORKDIR /usr/src/app
COPY package.json .
COPY tsconfig.json .
COPY ./src ./src

RUN npm i -g typescript
RUN npm install
RUN npm run production
CMD ["npm", "run", "start"]
EXPOSE 8080