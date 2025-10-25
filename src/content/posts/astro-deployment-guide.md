---
title: "Деплой Astro приложений: Полное руководство"
description: "Все способы развертывания Astro проектов на различных платформах"
date: 2024-10-17
tags: ["astro", "deployment", "devops"]
category: "devops"
views: 2156
coverImage: "/testRepo/cover/astro.svg"
---

Astro можно развернуть на множестве платформ. Давайте рассмотрим самые популярные варианты.

## Vercel

Самый простой способ - деплой на Vercel:

```bash
npm install @astrojs/vercel
```

```js
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  adapter: vercel()
});
```

Просто подключите репозиторий и Vercel автоматически развернет ваш сайт.

## Netlify

Для Netlify создайте `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[plugins]]
  package = "@astrojs/netlify"
```

## Cloudflare Pages

Cloudflare Pages отлично подходит для статических сайтов:

```bash
npm install @astrojs/cloudflare
```

Cloudflare обеспечивает глобальный CDN и отличную производительность.

## GitHub Pages

Для деплоя на GitHub Pages добавьте workflow:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Docker

Для деплоя в контейнере создайте Dockerfile:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
CMD ["npm", "run", "preview"]
```

Выбирайте платформу в зависимости от ваших потребностей и бюджета.
