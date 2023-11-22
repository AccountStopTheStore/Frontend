import BudgetAccountBarGraph from "../Common/BudgetAccountBarGraph";
import { BarGraphItemDetailsUI } from "./style";
import BarGraphItemDetailsTopContainer from "../BarGraphItemDetailsTopContainer";

interface groupMembersData {
  memberId: number;
  totalSavingAmount: number;
}

export interface array1Data {
  groupId: number;
  groupName: string;
  targetAmount: number;
  maxMembers: number;
  currentMembers: number;
  startedAt: string;
  finishedAt: string;
  createdAt: string;
  inviteToken: string;
  groupMembers: groupMembersData[];
}

function BarGraphItemDetails() {
  const array1 = {
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
      {
        memberId: 3,
        totalSavingAmount: 300000,
      },
      {
        memberId: 3,
        totalSavingAmount: 300000,
      },
      {
        memberId: 3,
        totalSavingAmount: 300000,
      },
    ],
  };

  return (
    <div>
      <BarGraphItemDetailsTopContainer array1={array1} />
      <BarGraphItemDetailsUI.BottomList>
        {array1.groupMembers.map((member) => {
          return (
            <BudgetAccountBarGraph
              name={member.memberId}
              budget={array1.targetAmount}
              deposit={member.totalSavingAmount}
            />
          );
        })}
      </BarGraphItemDetailsUI.BottomList>
    </div>
  );
}

export default BarGraphItemDetails;
