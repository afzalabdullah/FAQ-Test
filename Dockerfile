# Use Node.js as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Install backend dependencies
COPY ./FAQ/package*.json ./FAQ/
WORKDIR /usr/src/app/FAQ
RUN npm install

# Install frontend dependencies and build the React app
WORKDIR /usr/src/app
COPY ./Frontend/package*.json ./Frontend/
COPY ./Frontend /usr/src/app/Frontend
WORKDIR /usr/src/app/Frontend
RUN npm install
RUN npm run build

# Copy the built frontend files into the backend's public folder
WORKDIR /usr/src/app
RUN mkdir -p /usr/src/app/FAQ/public
RUN cp -r /usr/src/app/Frontend/build/* /usr/src/app/FAQ/public

# Copy backend code
COPY ./FAQ /usr/src/app/FAQ

# Expose the backend port
WORKDIR /usr/src/app/FAQ
EXPOSE 3000

# Start the backend server
CMD ["node", "server.js"]
