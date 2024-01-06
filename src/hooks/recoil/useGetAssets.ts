import { GetAssets } from "@/src/@types/models/getAssets";
import { atom } from "recoil";

export const getAssetsAtom = atom({
  key: "getAssetsAtom",
  default: [] as GetAssets,
});
