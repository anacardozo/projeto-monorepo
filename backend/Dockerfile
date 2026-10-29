# ==============================================================================
# Estágio 1: Build da Aplicação
# ==============================================================================
FROM node:24-alpine AS builder

# Versão fixa do pnpm (a mesma usada no CI e localmente)
RUN corepack enable && corepack prepare pnpm@11.20.0 --activate

WORKDIR /app

# Manifestos de dependências + configuração de builds aprovados do pnpm
COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml* ./

RUN pnpm install --frozen-lockfile

COPY tsconfig.json ./
COPY src ./src

RUN pnpm run build

RUN pnpm prune --prod

# ==============================================================================
# Estágio 2: Imagem Final de Execução (Produção)
# ==============================================================================
FROM node:24-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nodejs

COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

USER nodejs

EXPOSE 3000

CMD ["node", "dist/server.js"]