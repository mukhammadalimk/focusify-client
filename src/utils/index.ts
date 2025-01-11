export const isValidColor = (color: string): boolean =>
  /^#([0-9A-F]{3}){1,2}$/i.test(color);

export const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
};
