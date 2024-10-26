import { atom } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 104,
});
export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0,
});
export const NotificationsAtom = atom({
  key: "NotificationAtoms",
  default: 12,
});
export const MessagingAtom = atom({
  key: "messagingAtom",
  default: 0,
});
