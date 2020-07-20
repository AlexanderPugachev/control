import { DefaultTheme } from 'styled-components';

export const mainTheme: DefaultTheme = {
  spacing: arr => arr
    .reduce((res, el) => res + (el * 4) + 'px ', ''),

  borderRadius: '5px',

  colors: {
    bg: '#071013',
    main: '#071013',
    halfMain: 'rgba(7, 16, 19, .5)',
    secondary: '#23B5D3',
    halfSecondary: 'rgba(35, 181, 211, .5)'
  }
};