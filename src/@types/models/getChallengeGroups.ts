/**
 * 챌린지 그룹 조회 Response Interface
 */
export type GetChallengeGroups = GetChallengeGroup[];

export type GetChallengeGroup = {
  id: number;
  name: string;
  description: string;
  targetAmount: number;
  maxMembers: number;
  currentMembers: number; // 추가
  startAt: string;
  endAt: string;
  inviteLink: string; // 추가
  adminId: number;
  viewerId: number;
  viewerName: string;
  viewerEmail: string;
  groupMembers: GroupMember[]; // 추가
};

export type GroupMember = {
  memberId: number;
  memberEmail: string;
  memberName: string;
  totalSavingAmount: number;
};
