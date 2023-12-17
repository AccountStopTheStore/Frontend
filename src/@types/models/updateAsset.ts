/**
 * 자산 수정 Response Interface
 */

export type UpdateAsset = {
  amount: number;
  assetGroup: string;
  assetName: string;
  assetType: string;
  createdAt: string;
  dueDay: number | null;
  memo: string;
  statementDay: number | null;
  updatedAt: string;
};
