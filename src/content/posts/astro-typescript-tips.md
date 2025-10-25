---
title: "TypeScript в Astro: Советы и трюки"
description: "Максимально эффективное использование TypeScript в Astro проектах"
date: 2024-10-12
tags: ["astro", "typescript", "типизация"]
category: "разработка"
views: 2789
coverImage: "/testRepo/cover/astro.svg"
---

Astro имеет первоклассную поддержку TypeScript. Давайте рассмотрим, как использовать это по максимуму.

## Типизация пропсов

Используйте интерфейсы для типобезопасности:

```astro
---
interface Props {
  title: string;
  date: Date;
  tags?: string[];
}

const { title, date, tags = [] } = Astro.props;
---
```

## Типизация Content Collections

TypeScript автоматически выводит типы из схемы:

```typescript
import type { CollectionEntry } from 'astro:content';

interface Props {
  post: CollectionEntry<'posts'>;
}

// TypeScript знает все поля post.data
const { post } = Astro.props;
const title = post.data.title; // string
const date = post.data.date; // Date
```

## Типизация API роутов

```typescript
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ params, request }) => {
  // params и request полностью типизированы
  const id = params.id;
  
  return new Response(JSON.stringify({ id }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
```

## Типизация getStaticPaths

```typescript
import type { GetStaticPaths } from 'astro';

export const getStaticPaths: GetStaticPaths = async () => {
  return [
    { params: { id: '1' }, props: { title: 'Пост 1' } },
    { params: { id: '2' }, props: { title: 'Пост 2' } }
  ];
};
```

## Глобальные типы

Расширьте глобальные типы в `src/env.d.ts`:

```typescript
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly DATABASE_URL: string;
  readonly API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

## Утилитарные типы

Создавайте переиспользуемые типы:

```typescript
// src/types/index.ts
export type Post = CollectionEntry<'posts'>;
export type PostData = Post['data'];

export type PageProps<T> = {
  data: T[];
  currentPage: number;
  lastPage: number;
};

export type APIResponse<T> = {
  data: T;
  error?: string;
};
```

## Строгая типизация

Включите строгий режим в `tsconfig.json`:

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "strictNullChecks": true,
    "noImplicitAny": true,
    "noUnusedLocals": true
  }
}
```

TypeScript делает разработку Astro приложений безопаснее и приятнее.
