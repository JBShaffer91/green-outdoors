# frontend/Dockerfile
FROM node:20-alpine AS build

WORKDIR /app

# 1. Copy package files and install deps
COPY frontend/package*.json ./
RUN npm install

# 2. Copy the rest of your frontend code (includes src/, index.html, vite.config.js, etc.)
COPY frontend/ ./

# 3. Build the production bundle
RUN npm run build

# ------------------------------------------------

# 4. Serve with nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]