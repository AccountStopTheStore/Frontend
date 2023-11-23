import { atom } from "recoil";

export interface OpenSeparatedCategoryAtomProps {
  isOpen: boolean;
}

export const openSeparatedCategoryAtom = atom<OpenSeparatedCategoryAtomProps>({
  key: "openSeparatedCategoryAtom",
  default: {
    isOpen: false,
  },
});
