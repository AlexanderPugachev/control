import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Component } from './styles';
import { Button, Table } from '../../components';
import { TransactionModal } from '..';
import { actionsThunks } from '../../thunks/actionsThunks';
import type { ColumnItemType } from '../../components/Table/Table';
import type { RootState } from '../../redux/store';
import { actionsActions } from '../../redux';

export const Actions: React.FC = () => {
  const dispatch = useDispatch();
  const [openAdd, setOpenAdd] = useState(false);
  const { data } = useSelector((s: RootState) => s.actions);

  useEffect(() => {
    dispatch(actionsThunks.getList());
    return () => {
      dispatch(actionsActions.clearList())
    }
  }, [dispatch]);

  const getType = (type: string) => type === 'plus' ? '+' : '-';

  const columns: ColumnItemType[] = [
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
      <Table
        columns={columns}
        data={data}
        borderless
      />

      <Button onClick={() => setOpenAdd(true)}>Add</Button>

      {openAdd && <TransactionModal />}
    </Component>
  );
};
