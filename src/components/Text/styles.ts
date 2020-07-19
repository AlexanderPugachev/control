import styled from 'styled-components';

interface StyledTextProps {
  strong?: boolean
  type?: string
}

export const StyledText = styled.p<StyledTextProps>`
  margin: 0;
  font-weight: ${p => p.strong ? 600 : 400};
`;