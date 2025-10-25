---
title: "Продвинутый роутинг в Astro"
description: "Динамические маршруты, middleware и продвинутые паттерны роутинга в Astro"
date: 2024-10-16
tags: ["astro", "routing", "архитектура"]
category: "архитектура"
views: 1674
coverImage: "/testRepo/cover/astro.svg"
---

Система роутинга в Astro построена на файловой структуре, но предоставляет мощные возможности для сложных сценариев.

## Динамические параметры

Создавайте динамические маршруты с помощью `[param]`:

```astro
---
// src/pages/posts/[slug].astro
export async function getStaticPaths() {
  const posts = await getCollection('posts');
  return posts.map(post => ({
    params: { slug: post.slug },
    props: { post }
  }));
}

const { post } = Astro.props;
---

<h1>{post.data.title}</h1>
```

## Rest параметры

Для catch-all маршрутов используйте `[...path]`:

```astro
---
// src/pages/docs/[...path].astro
const { path } = Astro.params;
const parts = path.split('/');
---
```

## Middleware

Создайте глобальный middleware:

```typescript
// src/middleware.ts
import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  // Проверка авторизации
  const token = context.cookies.get('token');
  
  if (!token && context.url.pathname.startsWith('/admin')) {
    return context.redirect('/login');
  }
  
  return next();
});
```

## Редиректы

Настройте редиректы в конфиге:

```javascript
export default defineConfig({
  redirects: {
    '/old-page': '/new-page',
    '/blog/[slug]': '/posts/[slug]',
  }
});
```

## API роуты

Создавайте API эндпоинты:

```typescript
// src/pages/api/users/[id].ts
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ params }) => {
  const user = await fetchUser(params.id);
  return new Response(JSON.stringify(user), {
    headers: { 'Content-Type': 'application/json' }
  });
};

export const DELETE: APIRoute = async ({ params }) => {
  await deleteUser(params.id);
  return new Response(null, { status: 204 });
};
```

## Пререндеринг и SSR

Комбинируйте статическую генерацию и SSR:

```astro
---
export const prerender = false; // SSR для этой страницы
---
```

Роутинг в Astro гибкий и мощный, позволяя создавать как простые, так и сложные структуры навигации.
