/**
 * 챌린지 그룹 생성 Response Interface
 */
export type CreateChallengeGroup = {
  id: number;
  name: string;
  description: string;
  targetAmount: number;
  maxMembers: number;
  startAt: string;
  endAt: string;
  adminId: number;
  viewerId: null;
  viewerName: null;
  viewerEmail: null;
};