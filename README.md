# Блог на Astro (RU)

Проект — статический блог на [Astro](https://astro.build/) с русской локалью, поддержкой Vue-компонентов в постах (через MDX) и таксономией по тегам с пагинацией.

Основные возможности:
- Контент‑коллекция `posts` со схемой (title, description, date, tags, draft, coverImage?, ogImage?, slug)
- Главная страница с пагинацией (10 на страницу), черновики исключаются из списков
- Раздел `/tags` со списком тегов и страницами по каждому тегу с пагинацией
- Поддержка `.md` и `.mdx`; в MDX можно подключать Vue‑компоненты
- Локаль ru-RU: форматирование дат и русские подписи
- Готовая конфигурация для GitHub Pages (project site): `site` и `base` заданы

## Скрипты
- `npm run dev` — локальная разработка
- `npm run build` — сборка проекта
- `npm run preview` — предпросмотр сборки

## Интеграции
- `@astrojs/vue`
- `@astrojs/mdx`
- `@astrojs/sitemap`

## Структура
- `src/pages/` — страницы (главная, теги, посты)
- `src/content/` — контент (посты в `posts`)
- `src/components/` — компоненты (в т.ч. Vue‑демо)
- `src/layouts/` — базовый макет

## Развёртывание на GitHub Pages
В `astro.config.ts` заданы:
- `site = "https://govard108.github.io"`
- `base = "/testRepo/"`

Для публикации используйте стандартный workflow GitHub Pages (project pages).
# Test Repo — Astro GitHub Pages

This repository is configured to build and deploy a minimal Astro site to GitHub Pages as a project site.

Existing placeholder text below was kept for history:

- New text
- Some more text
- fix2 changes
- Some very great text

## Deployment

GitHub Actions workflow at `.github/workflows/deploy.yml` builds the Astro site and deploys it to GitHub Pages on push to `main`.

- Node: actions/setup-node@v4 using Node LTS
- Build: `npm ci` then `npm run build`
- Pages: artifact is uploaded and deployed using `actions/deploy-pages`
- Permissions: `pages: write`, `id-token: write`
- Environment: `github-pages`

In your repository settings under Pages, set Source to "GitHub Actions".

Resulting site URL:

https://govard108.github.io/testRepo/

## Base path handling (local dev vs production)

This is a GitHub Pages project site, so the site is served under a sub-path. To ensure all links and assets work both locally and in production, we configure Astro like this:

```ts
// astro.config.ts
import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://govard108.github.io',
  base: '/testRepo/',
});
```

Guidelines:

- Use `import.meta.env.BASE_URL` when creating links in templates. It resolves to `/` in local dev and to `/testRepo/` in production.
- Prefer relative asset URLs or prefix with `import.meta.env.BASE_URL`.
- The 404 page is provided at `src/pages/404.astro`. Astro outputs a `404.html` which GitHub Pages will serve for missing routes.

Example:

```astro
---
const base = import.meta.env.BASE_URL;
---
<a href={`${base}about/`}>About</a>
```

## Local development

- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Build for production: `npm run build` (output in `dist/`)

