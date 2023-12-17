import { AssetGroupSymbol, AssetTypeSymbol } from "./assetSymbol";

/**
 * 자산 조회 Response Interface
 */
export type GetAssets = GetAsset[];

export type GetAsset = {
  amountId: number;
  assetGroup: AssetGroupSymbol;
  assetType: AssetTypeSymbol;
  assetName: string;
  amount: number;
  statementDay: number | null; // 정산일. '카드'에만 사용합니다.
  dueDay: number | null; // 결제일. '카드'에만 사용합니다.
  memo: string;
  createAt: string;
  updatedAt: string;
};
