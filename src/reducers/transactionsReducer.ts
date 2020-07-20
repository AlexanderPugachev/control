import { createSlice } from '@reduxjs/toolkit';

interface TransactionsInterface {
  id: string
  account: string
  type: string
  sum: number
  createDate: number
  updateDate: number
}

const state: TransactionsInterface[] = [];

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: state,
  reducers: {
    addTransaction (state, action) {
      state.push(action.payload);
    },
    changeTransaction (state, action) {
      let transaction = state.find(item => item.id === action.payload.id);
      if (transaction) transaction = action.payload;
    },
    deleteTransaction (state, action) {
      const transactionIndex = state.findIndex(item => item.id === action.payload.id);
      if (transactionIndex) state.splice(transactionIndex, 1);
    }
  }
});

export const {
  addTransaction,
  changeTransaction,
  deleteTransaction
} = transactionsSlice.actions;

export default transactionsSlice.reducer;