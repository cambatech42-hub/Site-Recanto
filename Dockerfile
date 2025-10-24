# Runtime-only image that uses prebuilt dist/
FROM node:20-alpine

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# Install only production dependencies
COPY package*.json ./
RUN npm ci --omit=dev --no-audit --no-fund

# Copy server and already-built assets
COPY server.js ./server.js
COPY dist ./dist

EXPOSE 3000
CMD ["node", "server.js"]