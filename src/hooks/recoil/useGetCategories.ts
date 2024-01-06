import { GetCategories } from "@/src/@types/models/getCategories";
import { atom } from "recoil";

export const getCategoriesAtom = atom({
  key: "getCategoriesAtom",
  default: [] as GetCategories,
});
