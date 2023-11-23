import { atom } from "recoil";

export interface SaveAccountBookAtomProps {
  address: string;
  amount: number;
  assetName: string;
  categoryName: string;
  imageIds: number[];
  isInstallment: boolean;
  installmentMonth: number;
  memo: string;
  recurringType: string;
  transactedAt: string;
  transactionDetail: string;
  transactionType: string;
}

export const saveAccountBookAtom = atom<SaveAccountBookAtomProps>({
  key: "saveAccountBookAtom",
  default: {
    address: "",
    amount: 0,
    assetName: "",
    categoryName: "",
    imageIds: [],
    isInstallment: false,
    installmentMonth: 0,
    memo: "",
    recurringType: "",
    transactedAt: "",
    transactionDetail: "",
    transactionType: "",
  },
});
