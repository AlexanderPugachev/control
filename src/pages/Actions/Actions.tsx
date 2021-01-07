import React, { useEffect, useState } from 'react';
import { useIndexedDB } from 'react-indexed-db';
import { useDispatch, useSelector } from 'react-redux';
import { Component } from './styles';
import { Button, Table } from '../../components';
import { TransactionModal } from '..';
import type { ColumnItemType } from '../../components/Table/Table';
import { ActionsType } from '../../redux/slices/actionsSlice';
import { RootState } from '../../redux/store';
import { commonActions, ModalsId } from '../../redux/slices/commonSlice';

export const Actions: React.FC = () => {
  const dispatch = useDispatch();
  const { [ModalsId.AddAction]: modal } = useSelector((s: RootState) => s.common.modals);
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
        `${getType(record.type)}${text}`,
    },
    {
      title: 'category',
      dataName: 'category',
      key: 'category',
    },
  ];

  const toggleDrawer = (bool: boolean) => {
    dispatch(commonActions.setModal({ visible: bool, modalId: ModalsId.AddAction }));
  };

  return (
    <Component>
      <Table<ActionsType>
        borderless
        columns={columns}
        data={data}
      />

      <Button onClick={() => toggleDrawer(true)}>Add</Button>

      {modal?.visible && <TransactionModal />}
    </Component>
  );
};
