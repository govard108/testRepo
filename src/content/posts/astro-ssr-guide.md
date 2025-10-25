---
title: "Server-Side Rendering в Astro"
description: "Полное руководство по настройке и использованию SSR в Astro проектах"
date: 2024-10-18
tags: ["astro", "ssr", "backend"]
category: "backend"
views: 2341
coverImage: "/testRepo/cover/astro.svg"
---

Astro поддерживает серверный рендеринг (SSR), позволяя создавать динамические приложения с рендерингом на сервере. Это открывает новые возможности для работы с базами данных, API и аутентификацией.

## Включение SSR

Для включения SSR нужно добавить адаптер в конфигурацию:

```js
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  })
});
```

## Динамические маршруты

С SSR можно создавать полностью динамические маршруты:

```astro
---
const { id } = Astro.params;
const post = await fetchPostById(id);
---

<article>
  <h1>{post.title}</h1>
  <div>{post.content}</div>
</article>
```

## API эндпоинты

Astro позволяет создавать API эндпоинты прямо в проекте:

```js
export async function get({ params, request }) {
  const data = await fetchData();
  return {
    body: JSON.stringify(data)
  };
}
```

SSR в Astro дает вам лучшее из обоих миров: производительность статических сайтов и гибкость динамических приложений.
