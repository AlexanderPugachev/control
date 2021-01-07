import styled from 'styled-components';

type TableProps = {
  borderless?: boolean;
};

export const Container = styled.table<TableProps>`
  table-layout: auto;
  width: 100%;
  box-sizing: border-box;
  border: ${p => (p.borderless ? 0 : `1px solid ${p.theme.colors.option2}`)};
  
  & tr th {
    border-bottom: ${(p) => (p.borderless ? 0 : `1px solid ${p.theme.colors.option2}`)};
  }
  & tr:not(:last-child) td {
    border-bottom: ${(p) => (p.borderless ? 0 : `1px solid ${p.theme.colors.option2}`)};
  }

  & td,
  th {
    padding: ${(p) => p.theme.spacing([2])};
  }
  
`;

export const HeadItem = styled.th`
  text-align: left;
`;
