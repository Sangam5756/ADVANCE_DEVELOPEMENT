import { atom, selector, useRecoilValue } from "recoil";

export const notificationAtom = atom({
  key: "networkAtom",
  default: selector({
    key: "networkAtomSelector",
    get: async () => {
      const res = await fetch(
        "https://mocki.io/v1/71e49c68-8dfa-4334-bfa9-2b24cd77b1fc"
      );
      const res1 = await res.json();

      return res1;
    },
  }),
});




export const totalNotification = selector({
  key: "totalNotify",
  get: ({ get }) => {
    const notification1 = get(notificationAtom);

    const total =
      notification1.network +
      notification1.jobsAtomCount +
      notification1.notification +
      notification1.messages;

    return total;
  },
});
