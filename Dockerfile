# Build Stage

FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci # like npm install but for CI server

# Development stage w/ dev dependencies

FROM build AS development

# Install dev dependencies (none at the moment)
# RUN npm install --save-dev 

COPY . . 

EXPOSE 3000

CMD ["npm", "start"]

# Production stage (without NGINX because NGINX Proxy Manager will handle it)

FROM build AS production

COPY . .

RUN npm run build

EXPOSE 3001

CMD ["npm", "start"]

