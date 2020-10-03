import React from 'react';
import { StyledText } from './styles';

interface Props {
  type?: string,
  strong?: boolean,
  size?: number
}

export const Text: React.FC<Props> = ({
  type = 'default',
  strong,
  size = 1,
  children
}) => {

  return (
    <StyledText
      size={size}
      strong={strong}
      type={type}
    >{children}</StyledText>
  );
};