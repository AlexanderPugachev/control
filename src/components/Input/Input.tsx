import React, { FC } from 'react';
import { Controller } from 'react-hook-form';
import { StyledInput } from './styles';

export interface InputType extends React.InputHTMLAttributes<HTMLInputElement> {
  readonly control?: any
  readonly name: string
  readonly rules?: any
  readonly error?: any
  readonly placeholder?: string
}

export const Input: FC<InputType> = ({
                                       control = null,
                                       name,
                                       defaultValue = '',
                                       rules,
                                       // error,
                                       placeholder,
                                     }) => {

  return (
    <Controller
      as={StyledInput}
      control={control}
      defaultValue={defaultValue}
      name={name}
      placeholder={placeholder}
      rules={rules}
    />
  );
};

