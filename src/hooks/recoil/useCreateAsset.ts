import { CreateAsset } from "@/src/@types/models/createAsset";
import { atom } from "recoil";

export const createAssetAtom = atom<CreateAsset>({
  key: "createAssetAtom",
  default: {
    amount: 0,
    assetGroup: "현금",
    assetType: "현금",
    assetName: "",
    statementDay: 0,
    dueDay: 0,
    memo: "",
  },
});
