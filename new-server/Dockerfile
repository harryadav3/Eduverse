# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the src directory and tsconfig.json file
COPY src ./src
COPY tsconfig.json .

# Install TypeScript globally
RUN npm install -g typescript

# Compile TypeScript code to JavaScript
# RUN tsc

# Expose the port the app will run on
EXPOSE 3000

# Start the application
CMD ["node", "dist/server.js"]