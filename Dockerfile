# Use an official Node.js runtime as a parent image
FROM node:23-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Install TypeScript and PM2 globally
RUN npm install -g typescript pm2

# Compile TypeScript to JavaScript
RUN npm run build

# Expose the port the app runs on
EXPOSE 27018

# Command to run the application
CMD ["npm", "run", "start"]
