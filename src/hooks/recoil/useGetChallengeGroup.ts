import { GetChallengeGroup } from "@/src/@types/models/getChallengeGroups";
import { atom } from "recoil";

export const getChallengeGroupInitial = {
  id: 0,
  name: "",
  description: "",
  targetAmount: 0,
  maxMembers: 0,
  currentMembers: 0,
  startAt: "시작일 입력",
  endAt: "종료일 입력",
  inviteLink: "",
  adminId: 0,
  viewerId: 0,
  viewerName: "",
  viewerEmail: "",
  groupMembers: [],
};

export const getChallengeGroupAtom = atom<GetChallengeGroup>({
  key: "getChallengeGroupAtom",
  default: getChallengeGroupInitial,
});
