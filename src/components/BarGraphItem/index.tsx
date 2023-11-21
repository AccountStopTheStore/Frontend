import BudgetAccountBarGraph from "../Common/BudgetAccountBarGraph";
import { ChallengeData } from "../BarGraphList";
import { BarGraphItemUI } from "./style";
import { ChangeChallengePeriod } from "@/src/assets/format";

interface BarGraphItemProps {
  item: ChallengeData;
  path: string;
}

function BarGraphItem({ item, path }: BarGraphItemProps) {
  let deposit = 0;
  for (let i = 0; i < item.groupMembers.length; i++) {
    deposit = deposit + item.groupMembers[i].totalSavingAmount;
  }

  return (
    <BarGraphItemUI.ItemLink to={path}>
      <div>
        <span>{item.groupName}</span>
        <BarGraphItemUI.ChallengePeriod>
          {`${item.currentMembers}명 ${ChangeChallengePeriod(
            item.startedAt,
            item.finishedAt
          )}`}
        </BarGraphItemUI.ChallengePeriod>
      </div>
      <BudgetAccountBarGraph
        name={"목표 금액"}
        budget={item.targetAmount}
        deposit={deposit}
      />
    </BarGraphItemUI.ItemLink>
  );
}

export default BarGraphItem;
