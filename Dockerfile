# Use official Node.js LTS image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files first (for caching)
COPY package*.json ./

# Install dependencies (including dev ones for build)
RUN npm install --include=dev

# Copy the rest of the app
COPY . .

# Copy the .env file into the container
COPY .env .env

# Build the Next.js app
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
RUN npm run build

# Expose the Next.js port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
