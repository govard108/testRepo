---
title: "Content Collections в Astro: Полное руководство"
description: "Все что нужно знать о работе с Content Collections для организации контента"
date: 2024-10-19
tags: ["astro", "content-collections", "typescript"]
category: "архитектура"
views: 1823
coverImage: "/testRepo/cover/astro.svg"
---

Content Collections - это мощная система для работы с контентом в Astro, которая обеспечивает типобезопасность и валидацию данных.

## Определение схемы

Создайте схему для вашего контента с помощью Zod:

```typescript
import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = { blog };
```

## Получение контента

Используйте `getCollection` для получения всех записей:

```astro
---
import { getCollection } from 'astro:content';

const posts = await getCollection('blog');
const published = posts.filter(post => !post.data.draft);
---
```

## Рендеринг контента

Для рендеринга используйте `render()`:

```astro
---
import { getEntry } from 'astro:content';

const post = await getEntry('blog', 'my-post');
const { Content } = await post.render();
---

<article>
  <h1>{post.data.title}</h1>
  <Content />
</article>
```

## Преимущества

- **Типобезопасность**: TypeScript знает структуру данных
- **Валидация**: Ошибки находятся на этапе сборки
- **Производительность**: Оптимизированные запросы
- **DX**: Автодополнение в IDE

Content Collections делают работу с контентом приятной и безопасной.
