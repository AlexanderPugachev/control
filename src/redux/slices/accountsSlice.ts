import { createSlice } from '@reduxjs/toolkit';

const state = {
  list: null,
  account: null,
};

export const { actions, reducer } = createSlice({
  name: 'accounts',
  initialState: state,
  reducers: {
    setAccountsList: (s, { payload }) => {
      s.list = payload;
    },
    clearAccountsList: s => {
      s.list = state.list;
    },
    setAccount: (s, { payload }) => {
      s.account = payload;
    },
    clearAccount: s => {
      s.account = state.account;
    },
  },
});
