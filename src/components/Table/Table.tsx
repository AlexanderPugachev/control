import React, { FC } from 'react';
import { Container, HeadItem } from './styles';
import type { ActionsInterface } from '../../redux/actionsSlice';

interface ColumnItem {
  title: string;
  dataName: keyof ActionsInterface;
  key: string;
  render?: (item: string | number, record: ActionsInterface) => FC | string;
}

type PropsType = {
  columns: ColumnItem[];
  data: ActionsInterface[];
  rowKey?: keyof ActionsInterface;
  borderless?: boolean;
  headless?: boolean;
}

export const Table: FC<PropsType> = ({
  columns = [],
  data,
  rowKey = 'id',
  borderless = false,
  headless = false,
}) => {

  return (
    <Container borderless={borderless}>
      {!headless && (
        <thead>
          <tr>
            {columns.map(item => (
              <HeadItem key={item.key}>{item.title}</HeadItem>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {data?.map((item) => (
          <tr key={item[rowKey]}>
            {columns.map(({ dataName, key, render }) =>
              dataName in item ? (
                <td key={key}>
                  {render ? render(item[dataName], item) : item[dataName]}
                </td>
              ) : (
                <td key={key} />
              )
            )}
          </tr>
        )) ?? 'Empty data'}
      </tbody>
    </Container>
  );
};
