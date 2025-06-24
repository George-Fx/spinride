import {atom} from 'jotai';

export const appAtom = atom({
  isEmailVerified: false,
  isPhoneNumberVerified: false,
  isModalVisible: false,
});

export const isEmailVerifiedAtom = atom(
  (get) => get(appAtom).isEmailVerified,
  (get, set, newValue: boolean) => {
    const currentState = get(appAtom);
    set(appAtom, {...currentState, isEmailVerified: newValue});
  },
);

export const isPhoneNumberVerifiedAtom = atom(
  (get) => get(appAtom).isPhoneNumberVerified,
  (get, set, newValue: boolean) => {
    const currentState = get(appAtom);
    set(appAtom, {...currentState, isPhoneNumberVerified: newValue});
  },
);

export const setModalVisibleAtom = atom(
  (get) => get(appAtom).isModalVisible,
  (get, set, newValue: boolean) => {
    const currentState = get(appAtom);
    set(appAtom, {...currentState, isModalVisible: newValue});
  },
);

export const modalVisibleAtom = atom(
  (get) => get(appAtom).isModalVisible,
  (get, set, newValue: boolean) => {
    const currentState = get(appAtom);
    set(appAtom, {...currentState, isModalVisible: newValue});
  },
);
