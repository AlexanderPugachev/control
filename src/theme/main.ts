import { DefaultTheme } from 'styled-components';

export const mainTheme: DefaultTheme = {
  spacing: arr => arr
    .reduce((res, el) => res + (el * 4) + 'px ', ''),

  borderRadius: '5px',

  colors: {
    bg: '#12130F',
    main: '#12130F',
    secondary: '#5B9279'
  }
};