import React, { useState } from 'react';
import { Component } from './styles';
import { Button, Text } from '../../components';
import { TransactionModal } from '..';

export const Transactions: React.FC = () => {
  const [openAdd, setOpenAdd] = useState(false);

  return (
    <>
      <Component>
        <Text>Это транзакции</Text>

        <Button
          onClick={() => setOpenAdd(true)}
        >Write transactions</Button>

        {openAdd &&
        <TransactionModal/>
        }
      </Component>
    </>
  );
};