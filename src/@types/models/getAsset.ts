/**
 *  자산 목록 조회 Response Interface
 */

export type GetAssets = GetAsset[];

export type GetAsset = {
  amount: number;
  assetGroup: string;
  assetId: number;
  assetName: string;
  assetType: string;
  createdAt: string;
  dueDay: string | null;
  memo: string;
  statementDay: number | null;
  updatedAt: string;
};
