import { createSlice } from '@reduxjs/toolkit';

interface TransactionsInterface {
  id: string;
  account: string;
  type: string;
  sum: number;
  createDate: number;
  updateDate: number;
}

type State = {
  data: TransactionsInterface[];
};

const initialState: State = {
  data: [],
};

export const { actions, reducer } = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    addTransaction(s, action) {
      s.data.push(action.payload);
    },
    changeTransaction(s, action) {
      let transaction = s.data.find(item => item.id === action.payload.id);
      if (transaction) transaction = action.payload;
    },
    deleteTransaction(s, action) {
      const transactionIndex = s.data.findIndex(
        item => item.id === action.payload.id
      );
      if (transactionIndex) s.data.splice(transactionIndex, 1);
    },
  },
});
