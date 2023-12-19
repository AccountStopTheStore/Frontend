import { GetAssets } from "@/src/@types/models/getAssets";
import { atom } from "recoil";

export const getAssetsManagementAtom = atom<GetAssets>({
  key: "getAssetsManagementAtom",
  default: [],
});
