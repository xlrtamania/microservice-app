# Base image
FROM node:14

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the application code
COPY . .

# Expose the service's port
EXPOSE 3001

# Command to start the application
CMD ["npm", "start"]
