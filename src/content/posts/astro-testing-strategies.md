---
title: "Стратегии тестирования Astro приложений"
description: "Как правильно тестировать компоненты, страницы и интеграции в Astro проектах"
date: 2024-10-15
tags: ["astro", "testing", "quality"]
category: "тестирование"
views: 1892
coverImage: "/testRepo/cover/astro.svg"
---

Качественное тестирование критично для надежности приложений. Рассмотрим лучшие практики тестирования Astro проектов.

## Unit тестирование компонентов

Используйте Vitest для тестирования утилит и функций:

```typescript
// src/utils/formatDate.test.ts
import { describe, it, expect } from 'vitest';
import { formatDate } from './formatDate';

describe('formatDate', () => {
  it('should format date correctly', () => {
    const date = new Date('2024-10-15');
    expect(formatDate(date)).toBe('15 октября 2024');
  });
});
```

## E2E тестирование

Используйте Playwright для end-to-end тестов:

```typescript
import { test, expect } from '@playwright/test';

test('homepage loads correctly', async ({ page }) => {
  await page.goto('http://localhost:4321');
  
  await expect(page.locator('h1')).toContainText('Блог');
  
  const posts = page.locator('.post-card');
  await expect(posts).toHaveCount(10);
});

test('navigation works', async ({ page }) => {
  await page.goto('http://localhost:4321');
  await page.click('text=Теги');
  
  await expect(page).toHaveURL(/.*tags/);
  await expect(page.locator('h1')).toContainText('Теги');
});
```

## Тестирование API роутов

```typescript
import { describe, it, expect } from 'vitest';
import { GET } from '../pages/api/posts';

describe('API: GET /api/posts', () => {
  it('should return posts', async () => {
    const response = await GET({
      params: {},
      request: new Request('http://localhost/api/posts')
    });
    
    const data = await response.json();
    expect(data).toHaveLength(10);
  });
});
```

## Visual regression тестирование

Используйте Percy или Chromatic для визуального тестирования:

```typescript
import percySnapshot from '@percy/playwright';

test('visual test: homepage', async ({ page }) => {
  await page.goto('http://localhost:4321');
  await percySnapshot(page, 'Homepage');
});
```

## CI/CD интеграция

Настройте тесты в GitHub Actions:

```yaml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run test
      - run: npm run build
      - run: npx playwright install
      - run: npm run test:e2e
```

Комплексное тестирование обеспечит стабильность и качество вашего Astro проекта.
