# Base image
FROM node:16.13.2-slim AS build
# Create app directory
WORKDIR /app
# Install app dependencies
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps
# Bundle app source
COPY . .
RUN npm run build

# production environment
# build the final image and copy the react build files
FROM nginx:stable-alpine
EXPOSE 3600
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html