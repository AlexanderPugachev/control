type spacingType = (arr: number[], multiplier?: number) => string;

const spacing: spacingType = (arr, multiplier = 4) =>
  arr.reduce((res, el) => `${res}${el * multiplier}px `, '');

const colors = {
  bg: '#071013',
  main: '#071013',
  main2: 'rgba(7, 16, 19, .5)',
  option: '#23B5D3',
  option2: 'rgba(35, 181, 211, .5)',
};

const sizes = {
  xs: '14px',
  s: '16px',
  m: '18px',
  l: '20px',
  xl: '22px',
};

const zIndex = {
  bg: 0,
  modalsWrap: 490,
  modals: 500
};

export const mainTheme = {
  spacing,
  colors,
  sizes,
  zIndex,

  fonts: {
    h1: {
      'font-size': sizes.xl,
      'font-weight': 500,
      color: colors.option,
    },
    h2: {
      'font-size': sizes.l,
      'font-weight': 500,
      color: colors.option,
    },
    h3: {
      'font-size': sizes.m,
      'font-weight': 500,
      color: colors.option,
    },
  },
};
