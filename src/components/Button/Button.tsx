import React from 'react';
import { StyledButton } from './styles';

interface Props {
  onClick?: () => void,
  view?: string,
  size?: string,
  disabled?: boolean
}

const Button: React.FC<Props> = ({
  children,
  disabled,
  onClick,
  size= 'default',
  view= 'default',
  ...rest
}) => {
  return (
    <StyledButton
      onClick={onClick}
      view={view}
      size={size}
      disabled={disabled}
      {...rest}
    > {children} </StyledButton>
  );
};

export default Button;