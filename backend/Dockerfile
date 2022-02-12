# Base image
FROM node:16.13.2-slim AS base
# Create app directory
WORKDIR /backend
# Install app dependencies
COPY package.json ./
RUN yarn install
# Bundle app source
COPY . .
RUN chmod +x ./wait-for-it.sh
RUN yarn global add tsc 
RUN yarn global add typescript@4.5.5
RUN yarn global add typeorm@0.2.41
RUN yarn build