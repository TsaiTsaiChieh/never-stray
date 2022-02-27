# Base image
FROM node:16.13.2-slim AS build
# Create app directory
WORKDIR /frontend
# Install app dependencies
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps
# Bundle app source
COPY . .
RUN npm run build

# production environment
# build the final image and copy the react build files
FROM nginx:stable-alpine
COPY --from=build /frontend/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]