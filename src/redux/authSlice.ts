import { createSlice } from '@reduxjs/toolkit';

const state = {
  user: null,
  additional: null,
  credential: null
};

export const { actions, reducer } = createSlice({
  name: 'auth',
  initialState: state,
  reducers: {
    setAuthInfo: (s, { payload }) => {
      s.user = payload.user;
      s.additional = payload.additional;
      s.credential = payload.credential;
    },
    clearAuthInfo: s => {
      s.user = state.user;
      s.additional = state.additional;
      s.credential = state.credential;
    }
  }
});