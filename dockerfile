# ============================
# Etapa 1: Build
# ============================
FROM node:20-alpine AS builder

# Define diretório de trabalho
WORKDIR /app

# Copia arquivos de dependência primeiro (melhora cache do Docker)
COPY package*.json ./

# Instala dependências de produção e dev
RUN npm install

# Copia todo o projeto
COPY . .

# Gera o build do Next.js
RUN npm run build

# ============================
# Etapa 2: Runtime
# ============================
FROM node:20-alpine AS runner

# Define diretório de trabalho
WORKDIR /app

# Copia apenas o necessário do build
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./next.config.ts

# Define a porta
EXPOSE 3000

# Usa variável de ambiente para o Next.js rodar em produção
ENV NODE_ENV=production
ENV PORT=3000

# Comando de start
CMD ["npm", "start"]
