import React, { useEffect, useState } from 'react';
import { useIndexedDB } from 'react-indexed-db';
import { Component } from './styles';
import { Button, Table } from '../../components';
import { TransactionModal } from '..';
import type { ColumnItemType } from '../../components/Table/Table';
import { ActionsType } from '../../redux/actionsSlice';

export const Actions: React.FC = () => {
  const [openAdd, setOpenAdd] = useState(false);
  const { getAll } = useIndexedDB('actions');
  const [data, setData] = useState<ActionsType[]>([]);

  useEffect(() => {
    getAll().then((res: ActionsType[]) => setData(res));
  }, [getAll]);

  const getType = (type: string) => type === 'plus' ? '+' : '-';

  const columns: ColumnItemType<ActionsType>[] = [
    {
      title: 'sum',
      dataName: 'sum',
      key: 'sum',
      render: (text, record) =>
        `${getType(record.type)}${text}`
    },
    {
      title: 'category',
      dataName: 'category',
      key: 'category',
    },
  ];

  return (
    <Component>
      <Table<ActionsType>
        borderless
        columns={columns}
        data={data}
      />

      <Button onClick={() => setOpenAdd(true)}>Add</Button>

      {openAdd && <TransactionModal />}
    </Component>
  );
};
