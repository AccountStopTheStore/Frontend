/**
 * 챌린지 그룹 수정 Response Interface
 */
export type UpdateChallengeGroup = {
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
