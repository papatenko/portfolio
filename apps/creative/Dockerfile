# Build context is the repo root (pnpm workspace + lockfile live there):
# docker build -f apps/creative/Dockerfile .
FROM node:22-alpine AS build
WORKDIR /app
RUN npm install -g pnpm@12.8.1
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/creative/package.json apps/creative/
COPY apps/dev/package.json apps/dev/
RUN pnpm install --frozen-lockfile --filter creative
COPY apps/creative apps/creative
RUN pnpm --filter creative build

FROM nginx:alpine
COPY --from=build /app/apps/creative/dist /usr/share/nginx/html
EXPOSE 80
