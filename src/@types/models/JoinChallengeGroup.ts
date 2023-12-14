/**
 * 챌린지 그룹 조인 생성 Response Interface
 */
export type JoinChallengeGroup = {
  id: number;
  groupName: string;
  description: string;
  targetAmount: number;
  maxMembers: number;
  startAt: string;
  endAt: string;
};
