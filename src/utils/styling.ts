/* eslint-disable no-bitwise, no-param-reassign */

export const createHEX: (str: string) => string = str => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  const c = (hash & 0x00ffffff).toString(16).toUpperCase();

  return `#${'00000'.substring(0, 6 - c.length)}${c}`;
};

export const getRGBAFromHEX: (hex: string, a: number) => string = (hex, a) => {
  hex = hex.replace('#', '');
  const r = `0x${hex.slice(0, 2)}`;
  const g = `0x${hex.slice(2, 4)}`;
  const b = `0x${hex.slice(4)}`;
  a = a ?? 1;
  return `rgba(${+r}, ${+g}, ${+b}, ${a})`;
};
