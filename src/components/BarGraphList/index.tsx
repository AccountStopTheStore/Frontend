import BarGraphItem from "../BarGraphItem";
import { BarGraphListUI } from "./style";

export interface ChallengeData {
  groupId: number;
  groupName: string;
  targetAmount: number;
  maxMembers: number;
  currentMembers: number;
  startedAt: string;
  finishedAt: string;
  createdAt: string;
  inviteToken: string;
  groupMembers: [
    {
      memberId: number;
      totalSavingAmount: number;
    },
    {
      memberId: number;
      totalSavingAmount: number;
    },
    {
      memberId: number;
      totalSavingAmount: number;
    }
  ];
}

function BarGraphList() {
  const array: ChallengeData[] = [
    {
      groupId: 1,
      groupName: "testGroup",
      targetAmount: 100000,
      maxMembers: 5,
      currentMembers: 3,
      startedAt: "2023-10-10",
      finishedAt: "2023-12-25",
      createdAt: "2023-01-01T12:00:00",
      inviteToken: "TokenToInvite",
      groupMembers: [
        {
          memberId: 1,
          totalSavingAmount: 1000000,
        },
        {
          memberId: 2,
          totalSavingAmount: 50000,
        },
        {
          memberId: 3,
          totalSavingAmount: 300000,
        },
      ],
    },
    {
      groupId: 2,
      groupName: "testGroup2",
      targetAmount: 200000,
      maxMembers: 5,
      currentMembers: 3,
      startedAt: "2023-10-16",
      finishedAt: "2023-12-25",
      createdAt: "2023-01-01T12:00:00",
      inviteToken: "TokenToInvite",
      groupMembers: [
        {
          memberId: 1,
          totalSavingAmount: 1000000,
        },
        {
          memberId: 2,
          totalSavingAmount: 50000,
        },
        {
          memberId: 3,
          totalSavingAmount: 300000,
        },
      ],
    },
  ];

  return (
    <BarGraphListUI.List>
      {array.map((item) => {
        return <BarGraphItem item={item} path={`/challenge/${item.groupId}`} />;
      })}
    </BarGraphListUI.List>
  );
}

export default BarGraphList;
