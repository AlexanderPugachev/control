import styled from 'styled-components';

interface StyledTextProps {
  readonly strong?: boolean;
  readonly type: string;
  readonly size: number;
}

export const StyledText = styled.p<StyledTextProps>`
  margin: 0;
  font-weight: ${p => (p.strong ? 600 : 400)};
  color: ${p => p.theme.colors.option};
`;
