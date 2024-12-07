import { atom } from 'recoil';

export const balanceAtom = atom({
  key: 'balanceState', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial state)
});
