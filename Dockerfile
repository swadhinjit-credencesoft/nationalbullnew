# ---------------------------------------------------------------------------
# Production Dockerfile
# ---------------------------------------------------------------------------
# This project builds a static export (`output: 'export'`) into the `out/`
# directory. We compile it in a Node stage, then copy the static files into a
# minimal nginx image and serve them directly. No Node runtime is needed in
# production.
# ---------------------------------------------------------------------------

# ---- Stage 1: dependencies -------------------------------------------------
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# ---- Stage 2: build the static site ---------------------------------------
FROM node:20-alpine AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# ---- Stage 3: serve with nginx --------------------------------------------
FROM nginx:1.27-alpine AS runner
ENV NGINX_ENVSUBST_TEMPLATE_DIR=/etc/nginx/templates
# Copy the static export into nginx's web root
COPY --from=builder /app/out /usr/share/nginx/html
# Custom nginx config (handles SPA fallback, caching, gzip)
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
