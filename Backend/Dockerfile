# Backend Dockerfile

# Use official Node.js image as base image
FROM node:18

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY backend/package*.json ./

# Install dependencies
RUN npm install

# Copy all backend code to the container
COPY backend/ .

# Expose port
EXPOSE 3000

# Start the server
CMD ["npm", "start"]
