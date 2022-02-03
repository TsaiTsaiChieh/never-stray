### Development
# Base image
FROM node:16.13.2-slim AS base
# Create app directory
WORKDIR /app
# Install app dependencies
COPY package.json ./
RUN yarn install && yarn cache clean
# Bundle app source
COPY . . 