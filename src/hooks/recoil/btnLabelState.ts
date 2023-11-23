import { atom } from "recoil";

export const btnLabelStateAtom = atom<string>({
  key: "btnLabelStateAtom",
  default: "반복/할부",
});
