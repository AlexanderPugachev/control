import { createSlice } from '@reduxjs/toolkit';
import { actionsThunks as thunks } from '../thunks/actionsThunks';

export type ActionsType = {
  id: string
  type: string
  sum: number
  category: string
  account: string
  createDate: number
  updateDate: number
}

type State = {
  data: ActionsType[]
};

const initialState: State = {
  data: [],
};

const { actions, reducer } = createSlice({
  name: 'actions',
  initialState,
  reducers: {
    clearList: s => {
      s.data = initialState.data;
    },
  },
  extraReducers: builder => {
    builder.addCase(thunks.getList.fulfilled, (s, action) => {
      s.data = action.payload;
    });
  },
});

export const actionsActions = {
  clearList: actions.clearList,
};

export default reducer;
