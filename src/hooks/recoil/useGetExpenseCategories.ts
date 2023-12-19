import { GetCategories } from "@/src/@types/models/getCategories";
import { atom } from "recoil";

export const getExpenseCategoriesAtom = atom<GetCategories>({
  key: "getExpenseCategoriesAtom",
  default: [],
});
