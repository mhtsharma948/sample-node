FROM node:6.11.0-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "npm-shrinkwrap.json*", "./"]
RUN npm install -g --silent nodemon
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
CMD npm start