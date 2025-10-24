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

# Add curl for healthcheck
RUN apk add --no-cache curl

# Copy server and built assets from builder
COPY server.js ./server.js
COPY --from=builder /app/dist ./dist

EXPOSE 3000

# Healthcheck to help Easypanel know container is healthy
HEALTHCHECK --interval=30s --timeout=5s --start-period=15s CMD curl -fsS http://localhost:3000/ || exit 1

CMD ["node", "server.js"]