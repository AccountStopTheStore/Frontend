/**
 * 가계부 월별 조회 Response
 */
export type GetMonthlyAccountBooks = GetMonthlyAccountBook[];

export type GetMonthlyAccountBook = {
  accountId: number;
  address: string;
  amount: number;
  assetGroup: string;
  assetName: string;
  assetType: string;
  categoryName: string;
  createdAt: string;
  imageIds: number[];
  installmentMonth: number;
  isInstallment: true;
  latitude: number;
  longitude: number;
  memo: string;
  recurringType: string;
  transactedAt: string;
  transactionDetail: string;
  transactionType: string;
  updatedAt: string;
};
