import { GetAssets } from "@/src/@types/models/getAsset";
import { assetsAPI } from "@/src/core/api/assets";
import { atom } from "recoil";

const fetchResult = assetsAPI.getAssets();

export const getAssetsAtom = atom<GetAssets>({
  key: "getAssetsAtom",
  default: fetchResult.then(response => {
    return response.data;
  }),
});
