import React, { FC } from 'react';
import { Container, HeadItem } from './styles';

interface ColumnItem {
  title: string,
  dataName: string,
  key: string,
  render?: (item: string, record: Record<string, unknown>) => FC | string
}

interface Props {
  columns: ColumnItem[];
  borderless: boolean;
  rowKey: string;
  data: Record<string, string>[];
  headless: boolean;
}

export const Table: FC<Props> = ({ columns = [], data, rowKey = 'key', borderless = false, headless = false }) => {
  return (
    <Container borderless={borderless}>
      {!headless && <thead>
      <tr>
        {columns.map(item =>
          <HeadItem
            key={item.key}
          >{item.title}</HeadItem>,
        )}
      </tr>
      </thead>}
      <tbody>
      {data?.map(item =>
        <tr key={item[rowKey]}>
          {columns.map(({ dataName, key, render }) => dataName in item
            ?
            <td key={key}>
              {render ? render(item[dataName], item) : item[dataName]}
            </td>
            : <td key={key} />,
          )}
        </tr>,
      ) ?? 'Empty data'}
      </tbody>
    </Container>
  );
};