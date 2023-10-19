# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy your application source code to the working directory
COPY . .

# Expose a port for the Node.js application to listen on
EXPOSE 8000

# Define the command to run your Node.js application
CMD ["node", "server.js"]
