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