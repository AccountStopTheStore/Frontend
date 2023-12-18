import { GetCategories } from "@/src/@types/models/getCategories";
import { atom } from "recoil";

export const getIncomeCategoriesAtom = atom<GetCategories>({
  key: "getIncomeCategoriesAtom",
  default: [],
});
