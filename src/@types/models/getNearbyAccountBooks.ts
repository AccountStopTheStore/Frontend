/**
 * 기록지 조회 Response Interface
 */
export type GetNearbyAccountBooks = {
  accountId: number;
  address: string;
  amount: number;
  assetType: string;
  categoryName: string;
  createdAt: string;
  imageIds: number[];
  installment: boolean;
  latitude: number;
  longitude: number;
  memo: string;
  recurringType: string;
  transactedAt: string;
  transactionDetail: string;
  transactionType: string;
  updatedAt: string;
};
