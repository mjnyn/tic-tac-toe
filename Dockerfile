FROM node:20-bullseye AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npx playwright install --with-deps

COPY . .

RUN npm test
RUN npm run test:e2e
RUN npm run build

FROM scratch AS artifact

COPY --from=builder /app/dist /dist

CMD ["echo", "Docker image built successfully"]