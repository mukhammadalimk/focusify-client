export const isValidColor = (color: string) =>
  /^#([0-9A-F]{3}){1,2}$/i.test(color);
