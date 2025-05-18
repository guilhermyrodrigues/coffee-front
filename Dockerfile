# Etapa de build
FROM node:18-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa de produção com nginx
FROM nginx:alpine
COPY --from=build /app/dist/spa-coffee-world/browser /usr/share/nginx/html

