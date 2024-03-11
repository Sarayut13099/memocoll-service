# Use Node.js base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN yarn install --production

# Copy the rest of the application
COPY . .

# Expose port
EXPOSE 3300

# Command to run the application
CMD ["npm", "run", "start:prod"]
