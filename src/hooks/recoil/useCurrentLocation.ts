import { atom } from "recoil";

export interface currentLocationDataProps {
  lat: number;
  lng: number;
}

export const currentLocationAtom = atom<currentLocationDataProps>({
  key: "currentLocationAtom",
  default: {
    lat: 33.450701,
    lng: 126.570667,
  },
});
