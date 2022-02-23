# Base image
FROM node:16.13.2-slim AS base
# Create app directory
WORKDIR /backend
# Install app dependencies
COPY package.json ./
RUN npm install -g npm@8.5.1
RUN npm install
# Bundle app source
COPY . .
RUN chmod +x ./src/scripts/wait-for-it.sh
RUN npm install typescript@4.5.5 -g
RUN npm install typeorm@0.2.41 -g
RUN npm run build