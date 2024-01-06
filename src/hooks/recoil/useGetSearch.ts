import { atom } from "recoil";

export interface GetSearchAtomProps {
  categoryName: string;
  endDate: string;
  keyword: string;
  limit: number;
  maxPrice: number;
  minPrice: number;
  page: number;
  startDate: string;
}

export interface AutoCompleteAtomProps {
  limit: number;
  query: string;
}

const initialGetSearchAtom = {
  categoryName: "",
  endDate: "",
  keyword: "",
  limit: 1,
  maxPrice: 0,
  minPrice: 0,
  page: 0,
  startDate: "",
};

const getSearchAtom = atom<GetSearchAtomProps>({
  key: "getSearchAtom",
  default: initialGetSearchAtom,
});

const autoCompleteAtom = atom<AutoCompleteAtomProps>({
  key: "autoCompleteAtom",
  default: {
    limit: 19,
    query: "",
  },
});

export { initialGetSearchAtom, getSearchAtom, autoCompleteAtom };
