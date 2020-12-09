import styled from 'styled-components';

type TableProps = {
  borderless?: boolean;
};

export const Container = styled.table<TableProps>`
  table-layout: auto;
  width: 100%;
  box-sizing: border-box;
  border: ${p => (p.borderless ? 0 : `1px solid ${p.theme.colors.halfSecondary}`)};

  & tr:not(:last-child) td,th {
    border-bottom: ${p =>
      p.borderless ? 0 : `1px solid ${p.theme.colors.halfSecondary}`};
  }
  
`;

export const HeadItem = styled.th`
  text-align: left;
`;
