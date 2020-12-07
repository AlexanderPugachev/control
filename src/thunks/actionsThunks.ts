import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionsInterface } from '../redux/actionsSlice';

const list = [
  { id: '1', type: 'plus', sum: 200, category: 'salary' },
  { id: '2', type: 'minus', sum: 100, category: 'food' },
];

export const getList = createAsyncThunk(
  'actions/getList',
  async () => {
    return list as ActionsInterface[];
  }
);