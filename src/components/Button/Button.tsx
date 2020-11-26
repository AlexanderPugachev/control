import React from 'react';
import { LinkButton, PrimaryButton, StyledButton } from './styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  view?: 'default' | 'primary' | 'link';
  size?: 'small' | 'default' | 'large';
  disabled?: boolean;
}

export const Button: React.FC<Props> = ({
  children,
  disabled,
  size = 'default',
  view = 'default',
  ...rest
}) => {
  const sizes: { [index: string]: { p: number[]; m: number[] } } = {
    small: { p: [1], m: [1, 2] },
    default: { p: [2], m: [2, 3] },
    large: { p: [2], m: [3, 4] },
  };

  const props = {
    padding: size in sizes ? sizes[size].p : sizes.default.p,
    margin: size in sizes ? sizes[size].m : sizes.default.m,
    disabled,
    ...rest,
  };

  const views: { [index: string]: JSX.Element } = {
    default: <StyledButton {...props}>{children}</StyledButton>,
    primary: <PrimaryButton {...props}>{children}</PrimaryButton>,
    link: <LinkButton {...props}>{children}</LinkButton>,
  };

  return view in views ? views[view] : views.default;
};
