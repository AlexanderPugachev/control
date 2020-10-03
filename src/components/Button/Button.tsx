import React from 'react';
import { StyledButton } from './styles';

interface Props {
  onClick?: () => void,
  view?: string,
  size?: string,
  disabled?: boolean
}

export const Button: React.FC<Props> = ({
  children,
  disabled,
  onClick,
  size= 'default',
  view= 'default',
  ...rest
}) => {
  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      size={size}
      view={view}
      {...rest}
    > {children} </StyledButton>
  );
};