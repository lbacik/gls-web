FROM node:20

RUN mkdir /project
COPY . /project
WORKDIR /project

RUN npm install

EXPOSE 3000

CMD ["node", "app.js"]
