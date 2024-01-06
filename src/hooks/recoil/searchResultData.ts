import { GetSearchItems } from "@/src/@types/models/getSearch";
import { atom } from "recoil";

export const searchResultDataAtom = atom<GetSearchItems>({
  key: "searchResultDataAtom",
  default: [],
});
