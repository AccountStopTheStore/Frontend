import { atom } from "recoil";

export interface SaveAccountBookAtomProps {
  address: string;
  amount: number;
  assetName: string;
  categoryName: string;
  imageIds: number[];
  isInstallment: number;
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
    imageIds: [37],
    isInstallment: 0,
    memo: "",
    recurringType: "",
    transactedAt: "",
    transactionDetail: "",
    transactionType: "",
  },
});
