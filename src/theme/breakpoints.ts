
interface Props {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
}

const adaptive: Props = {
  xs: 0,
  sm: 600,
  md: 768,
  lg: 960,
  xl: 1200
};

const { sm, md, lg, xl } = adaptive;

export const Mobile = `(max-width: ${sm - 1}px)`;
export const Tablet = `(min-width: ${sm}px)`;
export const TabletPortrait = `(min-width: ${md}px)`;
export const TabletPortraitOnly = `(min-width: ${md}px) and (max-width ${lg - 1})`;
export const TabletLandscape = `(min-width: ${lg}px)`;
export const Laptop = `(min-width: ${xl}px)`;