import { GetChallengeGroups } from "@/src/@types/models/getChallengeGroups";
import { atom } from "recoil";

export const getChallengeGroupsAtom = atom<GetChallengeGroups>({
  key: "getChallengeGroupsAtom",
  default: [],
});
