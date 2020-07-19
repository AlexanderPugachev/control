import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    spacing: (...params: number[]) => string

    borderRadius: string

    colors: {
      bg: string
      main: string
      secondary: string
    }

  }
}