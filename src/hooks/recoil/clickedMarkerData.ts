import { atom } from "recoil";

export interface clickedMarkerDataAtomProps {
  accountId: number;
  address: string;
  amount: number;
  assetName: string;
  categoryName: string;
  createdAt: string;
  imageIds: number[];
  installment: boolean;
  latitude: number;
  longitude: number;
  memo: string;
  recurringType: string;
  transactedAt: string;
  transactionDetail: string;
  transactionType: string;
  updatedAt: string;
}

export const clickedMarkerDataAtom = atom<clickedMarkerDataAtomProps[]>({
  key: "clickedMarkerDataAtom",
  default: [],
});
