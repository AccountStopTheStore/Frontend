import { APIInstance } from "./instance";

const ACCOUNTS = "/accounts";
export const AccountBookAPI = {
  /** COMPLETED: getAccountBooks GET 요청하기 */
  getAccountBooks: (
    endDate: string,
    limit: number,
    page: number,
    startDate: string,
    transactionType: string
  ) => {
    return APIInstance.get(
      ACCOUNTS +
        `?endDate=${endDate}&limit=${limit}&page=${page}&startDate=${startDate}&transactionType=${transactionType}`
    );
  },
  /** COMPLETED: saveAccountBook POST 요청하기 */
  saveAccountBook: (
    address: string,
    amount: number,
    assetName: string,
    categoryName: string,
    imageIds: number[],
    isInstallment: false,
    memo: string,
    recurringType: string,
    transactedAt: string,
    transactionDetail: string,
    transactionType: string
  ) => {
    return APIInstance.post(ACCOUNTS, {
      address: address,
      amount: amount,
      assetName: assetName,
      categoryName: categoryName,
      imageIds: imageIds,
      isInstallment: isInstallment,
      memo: memo,
      recurringType: recurringType,
      transactedAt: transactedAt,
      transactionDetail: transactionDetail,
      transactionType: transactionType,
    });
  },
  /** COMPLETED: getAccountBook GET 요청하기 */
  getAccountBook: (accountId: number) => {
    return APIInstance.get(ACCOUNTS + `/${accountId}`);
  },
  /** COMPLETED: updateAccountBook PUT 요청하기 */
  updateAccountBook: (
    accountId: number,
    address: string,
    amount: number,
    assetName: string,
    categoryName: string,
    imageIds: number[],
    isInstallment: false,
    memo: string,
    recurringType: string,
    transactedAt: string,
    transactionDetail: string,
    transactionType: string
  ) => {
    return APIInstance.put(ACCOUNTS + `/${accountId}`, {
      address: address,
      amount: amount,
      assetName: assetName,
      categoryName: categoryName,
      imageIds: imageIds,
      isInstallment: isInstallment,
      memo: memo,
      recurringType: recurringType,
      transactedAt: transactedAt,
      transactionDetail: transactionDetail,
      transactionType: transactionType,
    });
  },
  /** COMPLETED: deleteAccountBook DELETE 요청하기 */
  deleteAccountBook: (accountId: number) => {
    return APIInstance.delete(ACCOUNTS + `/${accountId}`);
  },
  /** COMPLETED: getAccountBookImages GET 요청하기 */
  getAccountBookImages: (accountId: number) => {
    return APIInstance.get(ACCOUNTS + `/${accountId}/images`);
  },
  /** COMPLETED: getAutocomplete GET 요청하기 */
  getAutocomplete: (limit: number, query: string) => {
    return APIInstance.get(
      ACCOUNTS + `/autocomplete?limit=${limit}&query=${query}`
    );
  },
  /** COMPLETED: getSearch GET 요청하기 */
  getSearch: (
    categoryName: string,
    endDate: string,
    keyword: string,
    limit: number,
    maxPrice: number,
    minPrice: number,
    page: number,
    startDate: string
  ) => {
    return APIInstance.get(
      ACCOUNTS +
        `/search?categoryName=${categoryName}&endDate=${endDate}&keyword=${keyword}&limit=${limit}&maxPrice=${maxPrice}&minPrice=${minPrice}&page=${page}&startDate=${startDate}`
    );
  },
  /** COMPLETED: getTransactionStatistics GET 요청하기 */
  getTransactionStatistics: (
    endDate: string,
    startDate: string,
    transactionType: string
  ) => {
    return APIInstance.get(
      ACCOUNTS +
        `/statistics?endDate=${endDate}&startDate=${startDate}&transactionType=${transactionType}`
    );
  },
};
