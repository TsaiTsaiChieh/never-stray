# Base image
FROM node:16.13.2-slim AS base
# Create app directory
WORKDIR /backend
# Install app dependencies
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps
# Bundle app source
COPY . .
RUN chmod +x ./src/scripts/wait-for-it.sh
RUN npm run build