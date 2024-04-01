FROM node:20.11.0-alpine AS base

FROM base AS deps
WORKDIR /app

COPY package.json .

FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

FROM base AS runner

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=builder /app .

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]