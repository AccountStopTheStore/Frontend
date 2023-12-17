/**
 * 자산 추가 Response Interface
 */

export type CreateAssets = {
  amount: number;
  assetGroup: string;
  assetName: string;
  assetType: string;
  dueDay: number;
  memo: string;
  statementDay: number;
};
