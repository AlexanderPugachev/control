import { createSlice } from '@reduxjs/toolkit';

export enum ModalsId {
  'AddAction',
  'AddAccount',
}

type ModalType = {
  visible: boolean;
  // data?: InventoryType;
};

type StateType = {
  modals: { [key: string]: ModalType };
};

type SetModalType = ModalType & {
  modalId: number;
};

const initialState: StateType = {
  modals: {},
};

const { actions, reducer } = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setModal: (s, a: { payload: SetModalType }) => {
      if (!(a.payload.modalId in s.modals))
        s.modals[a.payload.modalId] = { visible: false };

      s.modals[a.payload.modalId].visible = a.payload.visible;
      // s.drawers[a.payload.id].data = a.payload.data;
    },
  },
});

export const commonActions = {
  setModal: actions.setModal,
};

export default reducer;
