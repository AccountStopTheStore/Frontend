/**
 * 가계부 등록 Response Interface
 */
export type PostAccount = {
  accountId: number;
  categoryName: string;
  assetName: string;
  amount: number;
  transactionType: string;
  transactionDetail: string;
  transactedAt: string;
  address: string;
  memo: string;
  imageIds: number[];
  recurringType: string;
  isInstallment: boolean;
  createdAt: string;
};
