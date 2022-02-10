# Base image
FROM node:16.13.2-slim AS build
# Create app directory
WORKDIR /frontend
# Install app dependencies
COPY package.json ./
RUN yarn install
RUN yarn global add react-scripts@5.0.0
# Bundle app source
COPY . .
RUN yarn build

# production environment
# build the final image and copy the react build files
FROM nginx:stable-alpine
COPY --from=build /frontend/build /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]