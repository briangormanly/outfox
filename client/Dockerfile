FROM node:12
WORKDIR /usr/src/app
COPY package.json .
COPY package-lock.json .
COPY ./src ./src
COPY ./public ./public

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
RUN npm run build
CMD ["npm", "start"]
EXPOSE 3000