import { GetChallengeGroup } from "@/src/@types/models/getChallengeGroups";
import { atom } from "recoil";

export const getChallengeGroupAtom = atom<GetChallengeGroup>({
  key: "getChallengeGroupAtom",
  default: {
    id: -1,
    name: "",
    description: "",
    targetAmount: -1,
    maxMembers: -1,
    currentMembers: -1,
    startAt: "",
    endAt: "",
    inviteLink: "",
    adminId: -1,
    viewerId: -1,
    viewerName: "",
    viewerEmail: "",
    groupMembers: [],
  },
});
