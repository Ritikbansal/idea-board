FROM node:18-alpine AS base
WORKDIR /code
COPY package*.json ./
RUN npm i -g pnpm
RUN pnpm install
COPY . .
RUN npx prisma generate
RUN npm run build
EXPOSE 3000
CMD ["sh", "-c", "npx prisma migrate deploy && pnpm run start"]