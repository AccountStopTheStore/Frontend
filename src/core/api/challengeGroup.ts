import { GetChallengeGroups } from "@/src/@types/models/getChallengeGroups";
import { APIInstance } from "./instance";
import { CreateChallengeGroup } from "@/src/@types/models/createChallengeGroup";
import { UpdateChallengeGroup } from "@/src/@types/models/updateChallengeGroup";
import { CreateInviteLink } from "@/src/@types/models/createInviteLink";
import { DeleteChallengeGroup } from "@/src/@types/models/deleteChallengeGroup";
import { SaveMoney } from "@/src/@types/models/saveMoney";
import { JoinChallengeGroup } from "@/src/@types/models/JoinChallengeGroup";
import { GetMessages } from "@/src/@types/models/challengeMember";

const GROUPS = "/groups";

export const challengeGroupAPI = {
  /** COMPLETED: getGroups GET 요청하기 */
  getGroups: () => {
    return APIInstance.get<GetChallengeGroups>(GROUPS);
  },
  /** COMPLETED: createGroups POST 요청하기 */
  createGroup: (
    description: string,
    endAt: string,
    maxMembers: number,
    name: string,
    startAt: string,
    targetAmount: number
  ) => {
    return APIInstance.post<CreateChallengeGroup>(GROUPS, {
      description: description,
      endAt: endAt,
      maxMembers: maxMembers,
      name: name,
      startAt: startAt,
      targetAmount: targetAmount,
    });
  },
  /** COMPLETED: updateGroup PUT 요청하기 */
  updateGroup: (
    groupId: number,
    description: string,
    endAt: string,
    maxMembers: number,
    name: string,
    startAt: string,
    targetAmount: number
  ) => {
    return APIInstance.put<UpdateChallengeGroup>(GROUPS + `/${groupId}`, {
      description: description,
      endAt: endAt,
      maxMembers: maxMembers,
      name: name,
      startAt: startAt,
      targetAmount: targetAmount,
    });
  },
  /** COMPLETED: deleteGroup DELETE 요청하기 */
  deleteGroup: (groupId: number) => {
    return APIInstance.delete<DeleteChallengeGroup>(GROUPS + `/${groupId}`);
  },
  /** COMPLETED: createInviteLink GET 요청하기 */
  createInviteLink: (groupId: number) => {
    return APIInstance.get<CreateInviteLink>(
      GROUPS + `/${groupId}/invite-link`
    );
  },
  /** COMPLETED: leaveGroup DELETE 요청하기 */
  leaveGroup: (groupId: number, memberId: number) => {
    return APIInstance.delete(GROUPS + `/${groupId}/member/${memberId}`);
  },
  /** COMPLETED: getMessages GET 요청하기 */
  getMessages: (groupId: number) => {
    return APIInstance.get<GetMessages>(GROUPS + `/${groupId}/messages`);
  },
  /** COMPLETED: saveMoney POST 요청하기 */
  saveMoney: (groupId: number, savingAmount: number) => {
    return APIInstance.post<SaveMoney>(GROUPS + `/${groupId}/saving`, {
      savingAmount: savingAmount,
    });
  },
  /** COMPLETED: joinGroup POST 요청하기 */
  joinGroup: (inviteLink: number) => {
    return APIInstance.post<JoinChallengeGroup>(GROUPS + `/join/${inviteLink}`);
  },
};
