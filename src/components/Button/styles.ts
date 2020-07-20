import styled from 'styled-components';

interface ButtonProps {
  readonly view: string,
  readonly size: string,
  readonly disabled?: boolean,
  readonly selected?: boolean
}

export const StyledButton = styled.button<ButtonProps>`
  width: fit-content;
  
  color: ${p => p.theme.colors.secondary};
  
  border: ${p => [
  { type: 'default', value: `1px solid ${p.theme.colors.secondary}` },
  { type: 'primary', value: `1px solid ${p.theme.colors.halfMain}` },
  { type: 'link', value: 'none' }]
  .find(item => item.type === p.view)?.value || 'none'};
  
  background: ${p => [
  { type: 'default', value: p.theme.colors.halfMain },
  { type: 'primary', value: p.theme.colors.halfMain },
  { type: 'ghost', value: 'transparent' },
  { type: 'link', value: 'none' }]
  .find(item => item.type === p.view)?.value || 'none'};
  
  padding: ${p => [
  { type: 'small', value: p.theme.spacing([1]) },
  { type: 'default', value: p.theme.spacing([2]) },
  { type: 'large', value: p.theme.spacing([3]) }]
  .find(item => item.type === p.size)?.value || 0};
  
  margin: ${p => [
  { type: 'small', value: p.theme.spacing([1, 2]) },
  { type: 'default', value: p.theme.spacing([2, 3]) },
  { type: 'large', value: p.theme.spacing([3, 4]) }]
  .find(item => item.type === p.size)?.value || 0};
  
  opacity: ${p => p.disabled ? .5 : 1};
`;