import { CategoryTypeSymbol } from "@/src/@types/models/categoryTypeSymbol";
import { atom } from "recoil";

export interface SaveAccountBookAtomProps {
  address: string;
  amount: number;
  assetGroup: string;
  assetType: string;
  assetName: string;
  categoryName: string;
  imageIds: number[];
  isInstallment: boolean;
  installmentMonth: number;
  memo: string;
  recurringType: string | null;
  transactedAt: string;
  transactionDetail: string;
  transactionType: CategoryTypeSymbol;
}

export const saveAccountBookInitial = {
  address: "",
  amount: 0,
  assetGroup: "",
  assetType: "",
  assetName: "",
  categoryName: "",
  imageIds: [],
  isInstallment: false,
  installmentMonth: 0,
  memo: "",
  recurringType: null,
  transactedAt: "",
  transactionDetail: "",
  transactionType: "수입" as CategoryTypeSymbol,
};

export const saveAccountBookAtom = atom<SaveAccountBookAtomProps>({
  key: "saveAccountBookAtom",
  default: saveAccountBookInitial,
});
