import { GetCategories } from "@/src/@types/models/getCategories";
import { categoryAPI } from "@/src/core/api/category";
import { atom } from "recoil";

const fetchResult = categoryAPI.getCategory();

export const getCategoriesAtom = atom<GetCategories>({
  key: "getCategoriesAtom",
  default: fetchResult.then(response => {
    return response.data;
  }),
});
