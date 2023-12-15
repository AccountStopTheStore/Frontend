import { AssetGroupSymbol, AssetTypeSymbol } from "./assetSymbol";

/**
 * 자산 추가 Response Interface
 */
export type CreateAsset = {
  amount: number;
  assetGroup: AssetGroupSymbol;
  assetType: AssetTypeSymbol;
  assetName: string;
  statementDay: number | null; // 정산일. '카드'에만 사용합니다.
  dueDay: number | null; // 결제일. '카드'에만 사용합니다.
  memo: string;
};
