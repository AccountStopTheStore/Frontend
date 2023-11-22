/**
 * 가계부 조회 Response Interface
 */
export type GetAccounts = {
  accountId: number;
  categoryName: string;
  assetName: string;
  amount: number;
  transactionType: string;
  transactionDetail: string;
  transactedAt: string;
  address: string;
  memo: string;
  recurringType: string;
  createdAt: string;
  updatedAt: string;
};
