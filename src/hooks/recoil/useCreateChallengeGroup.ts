import { atom } from "recoil";

export type CreateChallengeGroupAtomProps = {
  name: string;
  description: string;
  targetAmount: number;
  maxMembers: number;
  startAt: string;
  endAt: string;
  inviteLink: string;
};

export const createChallengeGroupInitial = {
  name: "",
  description: "",
  targetAmount: 0,
  maxMembers: 0,
  startAt: "시작일 입력",
  endAt: "종료일 입력",
  inviteLink: "",
};

export const createChallengeGroupAtom = atom({
  key: "createChallengeGroupAtom",
  default: <CreateChallengeGroupAtomProps>createChallengeGroupInitial,
});
