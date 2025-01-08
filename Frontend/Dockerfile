# Frontend Dockerfile

# Use official Node.js image as base image
FROM node:18 as build

# Set working directory for frontend
WORKDIR /usr/src/app

# Copy package.json and install frontend dependencies
COPY frontend/package*.json ./
RUN npm install

# Copy the frontend code
COPY frontend/ .

# Build the React application for production
RUN npm run build

# Use Nginx to serve the built React application
FROM nginx:alpine

# Copy the build from the previous stage to Nginx server
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose Nginx's default port
EXPOSE 80

# Run Nginx server
CMD ["nginx", "-g", "daemon off;"]
