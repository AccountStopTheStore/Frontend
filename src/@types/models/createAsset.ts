/**
 * 자산 추가 Response Interface
 */

export type CreateAsset = {
  amount: number;
  assetGroup: string;
  assetName: string;
  assetType: string;
  dueDay: number | null;
  memo: string;
  statementDay: number | null;
};
