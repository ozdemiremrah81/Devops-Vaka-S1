# Use an official Node.js image as the base
FROM node:18-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

ARG APP_SERVER_PORT

ENV PORT $APP_SERVER_PORT

# Accept build-time argument
ARG BACKEND_SERVER

# Set it as an environment variable
ENV BACKEND_SERVER=$BACKEND_SERVER

# Define the command to run the app
CMD ["npm", "start"]
