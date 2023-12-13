import {
  GetChallengeGroup,
  GetChallengeGroups,
} from "@/src/@types/models/getChallengeGroups";
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
  createGroup: (createGroupObject: {
    description: string;
    endAt: string;
    maxMembers: number;
    name: string;
    startAt: string;
    targetAmount: number;
  }) => {
    return APIInstance.post<CreateChallengeGroup>(GROUPS, {
      description: createGroupObject.description,
      endAt: createGroupObject.endAt,
      maxMembers: createGroupObject.maxMembers,
      name: createGroupObject.name,
      startAt: createGroupObject.startAt,
      targetAmount: createGroupObject.targetAmount,
    });
  },
  /** COMPLETED: updateGroup PUT 요청하기 */
  updateGroup: (challengeGroup: GetChallengeGroup) => {
    return APIInstance.put<UpdateChallengeGroup>(
      GROUPS + `/${challengeGroup.id}`,
      {
        description: challengeGroup.description,
        endAt: challengeGroup.endAt,
        maxMembers: challengeGroup.maxMembers,
        name: challengeGroup.name,
        startAt: challengeGroup.startAt,
        targetAmount: challengeGroup.targetAmount,
      }
    );
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
  saveMoney: (saveMoneyObject: { groupId: number; savingAmount: number }) => {
    return APIInstance.post<SaveMoney>(
      GROUPS + `/${saveMoneyObject.groupId}/saving`,
      {
        savingAmount: saveMoneyObject.savingAmount,
      }
    );
  },
  /** COMPLETED: joinGroup POST 요청하기 */
  joinGroup: (inviteLink: number) => {
    return APIInstance.post<JoinChallengeGroup>(GROUPS + `/join/${inviteLink}`);
  },
};
