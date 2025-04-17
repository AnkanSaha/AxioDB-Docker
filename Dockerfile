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

# Install TypeScript and PM2 and ts-node globally
RUN npm install -g typescript pm2 ts-node


# Compile TypeScript to JavaScript
RUN npm run build && npm run copy-protos

# Expose the port the app runs on
EXPOSE 27018
EXPOSE 27019
EXPOSE 27020
EXPOSE 27021
EXPOSE 27022
EXPOSE 27023

# Command to run the application
CMD ["npm", "run", "start"]
