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

export const createChallengeGroupAtom = atom({
  key: "createChallengeGroupAtom",
  default: <CreateChallengeGroupAtomProps>{
    name: "",
    description: "",
    targetAmount: 0,
    maxMembers: 0,
    startAt: "",
    endAt: "",
    inviteLink: "",
  },
});
