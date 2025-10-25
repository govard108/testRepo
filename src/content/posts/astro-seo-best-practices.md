---
title: "SEO оптимизация в Astro"
description: "Лучшие практики SEO для максимальной видимости вашего Astro сайта"
date: 2024-10-13
tags: ["astro", "seo", "marketing"]
category: "seo"
views: 3456
coverImage: "/testRepo/cover/astro.svg"
---

Astro отлично подходит для SEO благодаря серверному рендерингу и статической генерации. Рассмотрим, как извлечь из этого максимум.

## Структурированные данные

Добавьте JSON-LD разметку для лучшей индексации:

```astro
---
const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": post.data.title,
  "datePublished": post.data.date.toISOString(),
  "author": {
    "@type": "Person",
    "name": "Автор"
  }
};
---

<script type="application/ld+json" set:html={JSON.stringify(schema)} />
```

## Оптимизация метатегов

Создайте компонент SEO:

```astro
---
interface Props {
  title: string;
  description: string;
  image?: string;
  canonicalURL?: string;
}

const { title, description, image, canonicalURL } = Astro.props;
const ogImage = image || '/default-og.jpg';
---

<head>
  <title>{title}</title>
  <meta name="description" content={description} />
  
  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={ogImage} />
  
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={ogImage} />
  
  {canonicalURL && <link rel="canonical" href={canonicalURL} />}
</head>
```

## Sitemap

Автоматически генерируйте sitemap:

```javascript
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://example.com',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date()
    })
  ]
});
```

## Robots.txt

Создайте `public/robots.txt`:

```txt
User-agent: *
Allow: /

Sitemap: https://example.com/sitemap-index.xml
```

## Производительность

SEO тесно связана с производительностью:

- Оптимизируйте изображения
- Используйте lazy loading
- Минимизируйте JavaScript
- Настройте кэширование

## RSS фид

Создайте RSS для лучшей индексации:

```typescript
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('posts');
  return rss({
    title: 'Мой блог',
    description: 'Статьи о разработке',
    site: context.site,
    items: posts.map(post => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: `/posts/${post.slug}/`
    }))
  });
}
```

Следуя этим практикам, ваш Astro сайт будет отлично ранжироваться в поисковых системах.
