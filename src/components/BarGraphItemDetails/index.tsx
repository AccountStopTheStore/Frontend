import BudgetAccountBarGraph from "../Common/BudgetAccountBarGraph";
import { BarGraphItemDetailsUI } from "./style";
import BarGraphItemDetailsTopContainer from "../BarGraphItemDetailsTopContainer";
import { useRecoilState } from "recoil";
import { getChallengeGroupAtom } from "@/src/hooks/recoil/useGetChallengeGroup";

function BarGraphItemDetails() {
  const [challengeGroup] = useRecoilState(getChallengeGroupAtom);

  return (
    <div>
      <BarGraphItemDetailsTopContainer challengeGroup={challengeGroup} />
      <BarGraphItemDetailsUI.BottomList>
        {challengeGroup.groupMembers.map((member, id) => {
          return (
            <BudgetAccountBarGraph
              key={id}
              name={member.memberId}
              budget={challengeGroup.targetAmount}
              deposit={member.totalSavingAmount}
            />
          );
        })}
      </BarGraphItemDetailsUI.BottomList>
    </div>
  );
}

export default BarGraphItemDetails;
