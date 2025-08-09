# Build Stage
FROM node:alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci # like npm install but for CI server
COPY . .

# Development stage w/ dev dependencies

FROM build AS development
# RUN npm install --save-dev 
EXPOSE 3000
CMD ["npm", "start"]

# Production stage (no tag so it's the default)

FROM build 
RUN npm run build
EXPOSE 4000
CMD ["npx", "serve", "-s", "build", "-l", "4000"]
