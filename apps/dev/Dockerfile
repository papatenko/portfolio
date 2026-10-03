# Multi-stage build: Node builds the static site, Nginx serves it.
# Build context is the repo root (pnpm workspace + lockfile live there):
# docker build -f apps/dev/Dockerfile .
FROM node:22-alpine AS build
WORKDIR /app
RUN npm install -g pnpm@12.8.1
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/creative/package.json apps/creative/
COPY apps/dev/package.json apps/dev/
RUN pnpm install --frozen-lockfile --filter dev
COPY apps/dev apps/dev
RUN pnpm --filter dev build

FROM nginx:alpine
COPY apps/dev/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/apps/dev/dist /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK CMD wget -qO- http://localhost/ >/dev/null || exit 1
