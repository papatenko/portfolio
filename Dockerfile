# Base Sage

FROM node:18-alpine AS base

WORKDIR /app

COPY package*.json ./

RUN npm install

# Development stage w/ dev dependencies

FROM base AS development

# Install dev dependencies (none at the moment)
# RUN npm install --save-dev 

COPY . . 

EXPOSE 3000

CMD ["npm", "start"]

# Production stage (without NGINX because NGINX Proxy Manager will handle it)

FROM base AS production

COPY . .

RUN npm run build

EXPOSE 3001

CMD

