# Installation

## Install dependencies
```bash
nvm install 10.16.3
nvm use 10.16.3

npm i -g yarn
npm i -g gulp
npm i -g solidarity solidarity-react-native
npm i -g @nestjs/cli
npm i -g typescript
npm i -g lerna
npm i -g ts-node
npm i -g nodemon

lerna bootstrap
```

Additionally install: Java8, Android SDK, Xcode and PostgreSQL  
 
## Configuration Backend

```bash
cp packages/backend/.env.clone .env
```
complete the values ​​in .env


```bash
lerna run db:fill
```

## Run Backend & Frontend

```bash
lerna run start
```

## Run Mobile

```bash
lerna run env:prod

cd packages/mobile

#Android
npx react-native run-android

#IOS
npx react-native run-ios
```