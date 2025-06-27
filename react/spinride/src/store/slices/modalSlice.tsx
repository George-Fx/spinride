import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type ModalStateType = {
  visible: boolean;
};
const initialState: ModalStateType = {
  visible: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setVisible: (
      state: ModalStateType = initialState,
      action: PayloadAction<boolean>,
    ) => {
      state.visible = action.payload;
    },
  },
});
export const modalReducer = modalSlice.reducer;
export const modalActions = modalSlice.actions;
