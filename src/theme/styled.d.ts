import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    spacing: (arr: number[]) => string

    borderRadius: string

    colors: {
      bg: string
      main: string
      halfMain: string
      secondary: string
      halfSecondary: string
    }

  }
}