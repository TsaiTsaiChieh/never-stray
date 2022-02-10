# Base image
FROM node:16.13.2-slim AS base
# Create app directory
WORKDIR /backend
# Install app dependencies
COPY package.json ./
RUN yarn install
# Bundle app source
COPY . .
RUN yarn global add tsc && yarn global add typescript@4.5.5
RUN yarn build