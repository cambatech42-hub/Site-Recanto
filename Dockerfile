# Multi-stage Dockerfile: build + runtime

# --- Build stage ---
FROM node:20-alpine AS builder
WORKDIR /app

# Install all deps (including dev) to run Vite build
COPY package*.json ./
RUN npm ci --no-audit --no-fund

# Copy source and build
COPY . .
RUN npm run build

# --- Runtime stage ---
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# Install only production deps
COPY package*.json ./
RUN npm ci --omit=dev --no-audit --no-fund

# Copy server and built assets from builder
COPY server.js ./server.js
COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD ["node", "server.js"]