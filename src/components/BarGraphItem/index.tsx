import { GetChallengeGroup } from "@/src/@types/models/getChallengeGroups";
import BudgetAccountBarGraph from "../Common/BudgetAccountBarGraph";
import { BarGraphItemUI } from "./style";
import { ChangeChallengePeriod } from "@/src/assets/util";
import { useRecoilState } from "recoil";
import { getChallengeGroupAtom } from "@/src/hooks/recoil/useGetChallengeGroup";

interface BarGraphItemProps {
  item: GetChallengeGroup;
  path: string;
}

function BarGraphItem({ item, path }: BarGraphItemProps) {
  let deposit = 0;
  for (let i = 0; i < item.groupMembers.length; i++) {
    deposit = deposit + item.groupMembers[i].totalSavingAmount;
  }

  const [, setChallengeGroup] = useRecoilState(getChallengeGroupAtom);
  const handleItemLink = () => {
    setChallengeGroup(item);
  };

  return (
    <BarGraphItemUI.Item>
      <BarGraphItemUI.ItemLink to={path} onClick={handleItemLink}>
        <div>
          <span>{item.name}</span>
          <BarGraphItemUI.ChallengePeriod>
            {`${item.currentMembers}명 ${ChangeChallengePeriod(
              item.startAt,
              item.endAt
            )}`}
          </BarGraphItemUI.ChallengePeriod>
        </div>
        <BudgetAccountBarGraph
          name={"목표 금액"}
          budget={item.targetAmount}
          deposit={deposit}
        />
      </BarGraphItemUI.ItemLink>
    </BarGraphItemUI.Item>
  );
}

export default BarGraphItem;
