/**
 * 가계부 수정 Response Interface
 */
export type PutAccount = {
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
  updatedAt: string;
};
