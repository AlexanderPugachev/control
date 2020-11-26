import { createSlice } from '@reduxjs/toolkit';

type State = {
  user: null | string;
  additional: null | string;
  credential: null | string;
};

const initialState: State = {
  user: null,
  additional: null,
  credential: null,
};

export const { actions, reducer } = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthInfo: (s, { payload }) => {
      s.user = payload.user;
      s.additional = payload.additional;
      s.credential = payload.credential;
    },
    clearAuthInfo: s => {
      s.user = initialState.user;
      s.additional = initialState.additional;
      s.credential = initialState.credential;
    },
    setCurrentUser: (s, { payload }) => {
      s.user = payload;
    },
  },
});
