import { AssetGroupSymbol, AssetTypeSymbol } from "./assetSymbol";

/**
 *  자산 수정 Response Interface
 */
export type UpdateAsset = {
  assetGroup: AssetGroupSymbol;
  assetType: AssetTypeSymbol;
  assetName: string;
  amount: number;
  statementDay: number | null;
  dueDay: number | null;
  memo: string;
  createdAt: string;
  updatedAt: string;
};
