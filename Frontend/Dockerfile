# Step 1: Build the React app
FROM node:18 AS build

WORKDIR /app

# Install dependencies
COPY frontend/package*.json ./
RUN npm install

# Copy the source code
COPY frontend/ .

# Build the React app
RUN npm run build

# Step 2: Serve the build using Nginx
FROM nginx:alpine

# Copy the React build to the Nginx directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
