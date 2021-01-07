import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Modal, Form } from '../../components';
import { ModalsId } from '../../redux/slices/commonSlice';

export const TransactionModal: React.FC = () => {
  const { handleSubmit, control, errors } = useForm({ mode: 'onBlur' });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  const content = [
    {
      name: 'type',
      rules: { required: 'Обязательное поле' },
      placeholder: 'income/expense'
    },
    {
      name: 'value',
      rules: { required: 'Обязательное поле' },
      type: 'number',
      placeholder: 'amount'
    },
    {
      name: 'category',
      rules: { required: 'Обязательное поле' },
      placeholder: 'category'
    },
    {
      name: 'account',
      rules: { required: 'Обязательное поле' },
      placeholder: 'account'
    },
  ];

  return (
    <Modal modalId={ModalsId.AddAction} title="New income/outcome">
      <Form formData={{ control, errors, content }} onSubmit={onSubmit}>
        <Button type="submit">Отправить</Button>
      </Form>
    </Modal>
  );
};
