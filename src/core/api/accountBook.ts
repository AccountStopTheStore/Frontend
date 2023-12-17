import { GetAccounts } from "@/src/@types/models/getAccounts";
import { APIInstance } from "./instance";
import { PostAccount } from "@/src/@types/models/postAccount";
import { PutAccount } from "@/src/@types/models/putAccount";
import { DeleteAccount } from "@/src/@types/models/deleteAccount";
import { CategoryTypeSymbol } from "@/src/@types/models/categoryTypeSymbol";

const ACCOUNTS = "/accounts";
export const AccountBookAPI = {
  /** COMPLETED: getAccountBooks GET 요청하기(조회) */
  getAccountBooks: (
    endDate: string,
    limit: number,
    page: number,
    startDate: string,
    transactionType: CategoryTypeSymbol
  ) => {
    return APIInstance.get<GetAccounts[]>(
      ACCOUNTS +
        `?endDate=${endDate}&limit=${limit}&page=${page}&startDate=${startDate}&transactionType=${transactionType}`
    );
  },
  /** COMPLETED: getAccountBooksMonthly GET 요청하기(조회) */
  getAccountBooksMonthly: (year: number, month: number) => {
    return APIInstance.get<GetAccounts[]>(
      ACCOUNTS + `?yearMonth=${year}-${month}`
    );
  },
  /** COMPLETED: saveAccountBook POST 요청하기(등록) */
  saveAccountBook: (postAccountBook: {
    address: string;
    amount: number;
    assetName: string;
    categoryName: string;
    imageIds: number[];
    isInstallment: boolean;
    memo: string;
    recurringType: string | null;
    transactedAt: string;
    transactionDetail: string;
    transactionType: CategoryTypeSymbol;
  }) => {
    return APIInstance.post<PostAccount>(ACCOUNTS, {
      address: postAccountBook.address,
      amount: postAccountBook.amount,
      assetName: postAccountBook.assetName,
      categoryName: postAccountBook.categoryName,
      imageIds: postAccountBook.imageIds,
      isInstallment: postAccountBook.isInstallment,
      memo: postAccountBook.memo,
      recurringType: postAccountBook.recurringType,
      transactedAt: postAccountBook.transactedAt,
      transactionDetail: postAccountBook.transactionDetail,
      transactionType: postAccountBook.transactionType,
    });
  },
  /** COMPLETED: updateAccountBook PUT 요청하기 */
  updateAccountBook: (PutAccountBook: {
    accountId: number;
    address: string;
    amount: number;
    assetGroup: string;
    assetType: string;
    assetName: string;
    categoryName: string;
    imageIds: number[];
    isInstallment: boolean;
    memo: string;
    recurringType: string;
    transactedAt: string;
    transactionDetail: string;
    transactionType: CategoryTypeSymbol;
  }) => {
    return APIInstance.put<PutAccount>(
      ACCOUNTS + `/${PutAccountBook.accountId}`,
      {
        address: PutAccountBook.address,
        amount: PutAccountBook.amount,
        assetGroup: PutAccountBook.assetGroup,
        assetType: PutAccountBook.assetType,
        assetName: PutAccountBook.assetName,
        categoryName: PutAccountBook.categoryName,
        imageIds: PutAccountBook.imageIds,
        isInstallment: PutAccountBook.isInstallment,
        memo: PutAccountBook.memo,
        recurringType: PutAccountBook.recurringType,
        transactedAt: PutAccountBook.transactedAt,
        transactionDetail: PutAccountBook.transactionDetail,
        transactionType: PutAccountBook.transactionType,
      }
    );
  },
  /** COMPLETED: deleteAccountBook DELETE 요청하기 */
  deleteAccountBook: (accountId: number) => {
    return APIInstance.delete<DeleteAccount>(ACCOUNTS + `/${accountId}`);
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
  /** COMPLETED: getNearbyAccountBooks GET 요청하기  */
  getNearbyAccountBooks: (lat: number, lng: number) => {
    return APIInstance.get(ACCOUNTS + `/nearby?lat=${lat}&lng=${lng}`);
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
    transactionType: CategoryTypeSymbol
  ) => {
    return APIInstance.get(
      ACCOUNTS +
        `/statistics?endDate=${endDate}&startDate=${startDate}&transactionType=${transactionType}`
    );
  },
};
