import { atom } from "recoil";

export interface currentLocationDataProps {
  lat: number;
  lng: number;
}

const initialLocation = { lat: 33.450701, lng: 126.570667 };
// const testCenterlocation = { lat: 37.591936689, lng: 126.91352099232 };

const currentLocationAtom = atom<currentLocationDataProps>({
  key: "currentLocationAtom",
  default: initialLocation,
});

export { initialLocation, currentLocationAtom };
