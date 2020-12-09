import React, { FC } from 'react';
import { Input } from '..';
import { InputType } from '../Input/Input';
import { StyledForm } from './styles';

interface FormType extends React.FormHTMLAttributes<HTMLFormElement> {
  formData?: {
    control: any,
    errors: any,
    content: InputType[]
  }
}

export const Form: FC<FormType> = ({ onSubmit, children, formData}) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      {formData && formData.content.map(({ name, ...rest }) => (
        <Input
          {...rest}
          key={name}
          control={formData.control}
          error={formData.errors[name]}
          name={name}
        />
      ))}
      {children}
    </StyledForm>
  );
};