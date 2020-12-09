import React from 'react';
import styled from 'styled-components';
import { getRGBAFromHEX } from '../../utils/styling';

export const StyledInput = styled.input<React.InputHTMLAttributes<HTMLInputElement>>`
  background: none;
  border: none;
  outline: none;
  ${p => p.theme.fonts.h1};
  
  &&:-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    transition: all 5000s ease-in-out 0s;
  }
    
  &::placeholder {
    color: ${p => getRGBAFromHEX(p.theme.colors.secondary, .5)};
  }
  
  &:focus, :active {
    outline: 0;
  }
`;