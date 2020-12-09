import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionsType } from '../redux/actionsSlice';

const list = [
  { id: '1', type: 'plus', sum: 200, category: 'salary' },
  { id: '2', type: 'minus', sum: 100, category: 'food' },
];

const getId = () => `${Date.now()}`;

export const actionsThunks = {
  getList: createAsyncThunk(
    'actions/getList',
    async () => {
      return list as ActionsType[];
    }
  ),
  addRow: createAsyncThunk(
    'actions/addRow',
    async ({ type = 'plus', sum = 200, category = 'salary' }: ActionsType) => {

      console.log('hello', getId(), type, sum, category)
    }
  )
}