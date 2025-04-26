# backend/Dockerfile
FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY backend/package*.json ./
RUN npm install --production

# Copy source
COPY backend/src ./src

# Expose your backend port
EXPOSE 4000

# Start command (adjust if different)
CMD ["node", "src/index.js"]