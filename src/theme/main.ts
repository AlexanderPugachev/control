interface Theme {
  spacing: (arr: number[]) => string;

  borderRadius: string;

  colors: {
    bg: string;
    main: string;
    halfMain: string;
    secondary: string;
    halfSecondary: string;
  };
}

export const mainTheme: Theme = {
  spacing: arr => arr.reduce((res, el) => `${res}${el * 4}px `, ''),

  borderRadius: '5px',

  colors: {
    bg: '#071013',
    main: '#071013',
    halfMain: 'rgba(7, 16, 19, .5)',
    secondary: '#23B5D3',
    halfSecondary: 'rgba(35, 181, 211, .5)',
  },
};
