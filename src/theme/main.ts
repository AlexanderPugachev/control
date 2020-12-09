interface Theme {
  spacing: (arr: number[]) => string;

  colors: { [val: string]: string };
  sizes: { [val: string]: string };
  fonts: { [val: string]: { [val: string]: string | number } };
  zIndexes: { [val: string]: number };
}

const colors = {
  bg: '#071013',
  main: '#071013',
  halfMain: 'rgba(7, 16, 19, .5)',
  secondary: '#23B5D3',
  halfSecondary: 'rgba(35, 181, 211, .5)',
};

const sizes = {
  xs: '14px',
  s: '16px',
  m: '18px',
  l: '20px',
  xl: '22px',
};

export const mainTheme: Theme = {
  spacing: arr => arr
    .reduce((res, el) => `${res}${el * 4}px `, ''),
  colors,
  sizes,

  zIndexes: {
    bg: 0,
    modals: 500
  },

  fonts: {
    h1: {
      'font-size': sizes.xl,
      'font-weight': 500,
      color: colors.secondary,
    },
    h2: {
      'font-size': sizes.l,
      'font-weight': 500,
      color: colors.secondary,
    },
    h3: {
      'font-size': sizes.m,
      'font-weight': 500,
      color: colors.secondary,
    },
  },
};
