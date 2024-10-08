FROM node:20.11.0-alpine AS base

WORKDIR /app

# First stage: Install dependencies
COPY package.json ./
RUN npm install

# Second stage: Build the Next.js application
FROM base AS builder
WORKDIR /app
COPY --from=base /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Final stage: Run the Next.js application
FROM base AS runner
WORKDIR /app

# Copy the build output from the builder stage
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

EXPOSE 8080
ENV PORT 8080

CMD ["npm", "start"]
