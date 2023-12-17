import {
  AssetGroupSymbol,
  AssetTypeSymbol,
} from "@/src/@types/models/assetSymbol";
import { CreateAsset } from "@/src/@types/models/createAsset";
import { atom } from "recoil";

export const createAssetInitial = {
  amount: 0,
  assetGroup: <AssetGroupSymbol>"현금",
  assetType: <AssetTypeSymbol>"현금",
  assetName: "",
  statementDay: 0,
  dueDay: 0,
  memo: "",
};

export const createAssetAtom = atom({
  key: "createAssetAtom",
  default: <CreateAsset>createAssetInitial,
});
