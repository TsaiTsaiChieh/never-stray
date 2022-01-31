### Development
# Base image
FROM node:16.13.2-slim AS base
# Create app directory
WORKDIR /backend
# Install app dependencies
COPY package.json ./
RUN yarn install && yarn cache clean
RUN npm install -g npm@8.4.0
# Bundle app source

COPY . .
# Command to run our app
CMD [ "yarn", "start"]