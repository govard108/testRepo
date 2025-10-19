export function formatDateRu(date: Date, options: Intl.DateTimeFormatOptions = { dateStyle: 'long' }) {
  try {
    return new Intl.DateTimeFormat('ru-RU', options).format(date);
  } catch {
    return date.toISOString().slice(0, 10);
  }
}
