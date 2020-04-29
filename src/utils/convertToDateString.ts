export const convertToDateString = (date: string): string =>
  new Date(date).toLocaleDateString();
