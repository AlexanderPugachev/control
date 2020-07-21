import React, { useState } from 'react';
import { Component } from './styles';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';
import TransactionModal from '../TransactionModal/TransactionModal';

const Transactions: React.FC = () => {
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

export default Transactions;