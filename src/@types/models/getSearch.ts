import { AssetGroupSymbol, AssetTypeSymbol } from "./assetSymbol";
import { CategoryTypeSymbol } from "./categoryTypeSymbol";

/**
 * 검색 조회 Response Interface
 */

export type GetSearchItems = GetSearchItem[];

export type GetSearchItem = {
  accountId: number;
  categoryName: string;
  assetGroup: AssetGroupSymbol;
  assetType: AssetTypeSymbol;
  assetName: string;
  amount: number;
  transactionType: CategoryTypeSymbol;
  transactionDetail: string;
  transactedAt: string;
  address: string;
  memo: string;
  imageIds: number[];
  recurringType: string;
  isInstallment: boolean;
  installmentMonth: number;
  createdAt: string;
  updatedAt: string;
  latitude: string;
  longitude: string;
};
