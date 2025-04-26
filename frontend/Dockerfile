# frontend/Dockerfile
FROM node:20-alpine AS build

WORKDIR /app

# Install & build
COPY frontend/package*.json ./
RUN npm install
COPY frontend/src ./src
COPY frontend/public ./public
RUN npm run build

# Serve with a simple static server
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]