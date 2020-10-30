FROM node:10.22.1-buster

RUN mkdir -p /app

WORKDIR /app

RUN npm i lerna -g --loglevel notice
RUN npm i -g @nestjs/cli
RUN npm i -g typescript
RUN npm i -g ts-node
RUN npm i -g nodemon

ADD package.json .
RUN npm install --loglevel notice

ADD packages/backend ./packages/backend
ADD packages/common ./packages/common

ADD lerna.json .
ADD tsconfig.json .
ADD babel.config.js .

RUN lerna bootstrap
RUN lerna run build --scope=@project/backend

EXPOSE 3300

CMD [ "npm", "run" ,"--prefix", "packages/backend", "start:prod2" ]