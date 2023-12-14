/**
 * 자산 수정 Response Interface
 */

export type UpdateAssets = {
  amount: number;
  assetGroup: string;
  assetName: string;
  assetType: string;
  createdAt: string;
  dueDay: number;
  memo: string;
  statementDay: number;
  updatedAt: string;
};
