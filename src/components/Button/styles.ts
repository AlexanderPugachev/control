import styled from 'styled-components';

interface ButtonProps {
  readonly disabled?: boolean;
  readonly selected?: boolean;

  readonly padding?: number[];
  readonly margin?: number[];
}

export const StyledButton = styled.button<ButtonProps>`
  width: fit-content;
  color: ${p => p.theme.colors.secondary};
  opacity: ${p => (p.disabled ? 0.5 : 1)};

  border: 1px solid ${p => p.theme.colors.secondary};
  background: ${p => p.theme.colors.halfMain};
  padding: ${p => p.theme.spacing(p.padding ?? [2])};
  margin: ${p => p.theme.spacing(p.margin ?? [2, 3])};
  
  &:focus {
    outline: 0;
  }
`;

export const PrimaryButton = styled(StyledButton)`
  border: 1px solid ${p => p.theme.colors.halfMain};
  background: ${p => p.theme.colors.halfMain};
`;

export const LinkButton = styled(StyledButton)`
  border: none;
  background: none;
`;
