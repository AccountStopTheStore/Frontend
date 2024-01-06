import { atom } from "recoil";

export const autoCompleteDatasAtom = atom<string[]>({
  key: "autoCompleteResultsAtom",
  default: [],
});
