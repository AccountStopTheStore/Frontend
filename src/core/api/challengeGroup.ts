import { APIInstance } from "./instance";

const GROUPS = "/groups";

export const challengeGroupAPI = {
  /** COMPLETED: getGroups GET 요청하기 */
  getGroups: () => {
    return APIInstance.get(GROUPS);
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
    return APIInstance.post(GROUPS, {
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
    return APIInstance.put(GROUPS + `/${groupId}`, {
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
    return APIInstance.delete(GROUPS + `/${groupId}`);
  },
  /** COMPLETED: createInviteLink GET 요청하기 */
  createInviteLink: (groupId: number) => {
    return APIInstance.get(GROUPS + `/${groupId}/invite-link`);
  },
  /** COMPLETED: leaveGroup DELETE 요청하기 */
  leaveGroup: (groupId: number, memberId: number) => {
    return APIInstance.delete(GROUPS + `/${groupId}/member/${memberId}`);
  },
  /** COMPLETED: getMessage GET 요청하기 */
  getMessage: (groupId: number) => {
    return APIInstance.delete(GROUPS + `/${groupId}/messages`);
  },
  /** COMPLETED: saveMoney POST 요청하기 */
  saveMoney: (groupId: number, savingAmount: number) => {
    return APIInstance.post(GROUPS + `/${groupId}/saving`, {
      savingAmount: savingAmount,
    });
  },
  /** COMPLETED: joinGroup POST 요청하기 */
  joinGroup: (inviteLink: number) => {
    return APIInstance.post(GROUPS + `/join/${inviteLink}`);
  },
};
