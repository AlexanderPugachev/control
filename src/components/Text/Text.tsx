import React from 'react';
import { StyledText } from './styles';

interface Props {
  type?: string,
  strong?: boolean
}

const Text: React.FC<Props> = ({
  type = 'default',
  strong,
  children
}) => {

  return (
    <StyledText
      strong={strong}
      type={type}>
      {children}
    </StyledText>
  );
};

export default Text;