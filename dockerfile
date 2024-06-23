# Stage 1: Build the React app
FROM node:14 AS build

# Set the working directory
WORKDIR /bcgfront

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve the React app with a simple Node server
FROM node:14

# Set the working directory
WORKDIR /bcgfront

# Copy the build output from the previous stage to the new container
COPY --from=build /bcgfront ./build

# Install serve globally
RUN npm install -g serve

# Expose port 3000
EXPOSE 5173


# Start the app using 'serve'
CMD ["npm", "run", "dev", "5173"]
