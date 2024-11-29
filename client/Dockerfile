# Use Node.js for building the app
FROM node:18-alpine as build

# Set environment variables
ENV REACT_APP_BACKEND_SERVER=http://vaka1-server:5050/healthcheck/

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Build the app
RUN npm run build

# Use a lightweight web server to serve the app
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*
# Copy the built app to the Nginx default directory
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
