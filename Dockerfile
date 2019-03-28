FROM node:11-alpine

RUN mkdir /project
COPY . /project
WORKDIR /project

RUN npm install

EXPOSE 3000

CMD node app.js
