import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  width: 100%;
  padding: ${p => p.theme.spacing([1])};
  
  & > :not(:last-child) {
    width: auto;
    margin-bottom: ${p => p.theme.spacing([2])};
  }
`;