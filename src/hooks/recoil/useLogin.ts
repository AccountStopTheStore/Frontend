import { atom, selector } from "recoil";

export const TokenAtom = atom({
  key: "isLoginSelector",
  default: "",
});

export const isLoginSelector = selector({
  key: "isLoginSelector",
  get: ({ get }) => !!get(TokenAtom),
});
