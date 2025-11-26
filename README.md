# homework-07

## Описание

Учебный пример кастомного хука `useFetch`, который:

- делает HTTP-запрос по заданному URL;
- возвращает `data`, `isLoading`, `error`, `refetch`;
- поддерживает query-параметры через `refetch({ params: { ... } })`.

## Технологии

- React
- Vite

## Установка и запуск

```bash
npm install
npm run dev
```

## Основные файлы

- src/hooks/useFetch.js — реализация хука.

- src/Demo.jsx — пример использования хука в компоненте.
