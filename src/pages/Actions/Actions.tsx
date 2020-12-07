import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Component } from './styles';
import { Button } from '../../components';
import { TransactionModal } from '..';
import { Table } from '../../components/Table/Table';
import { RootState } from '../../redux/store';
import { ActionsInterface } from '../../redux/actionsSlice';

export const Actions: React.FC = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const { data } = useSelector((s: RootState) => s.actions);

  const columns = [
    {
      title: 'type',
      dataName: 'type' as keyof ActionsInterface,
      key: 'type',
    },
  ];

  return (
    <Component>
      <Table
        columns={columns}
        data={data}
        rowKey="id"
      />

      <Button onClick={() => setOpenAdd(true)}>Write transactions</Button>

      {openAdd && <TransactionModal />}
    </Component>
  );
};
