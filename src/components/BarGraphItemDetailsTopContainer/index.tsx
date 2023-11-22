import { ChangeChallengePeriod } from "@/src/assets/util";
import { array1Data } from "../BarGraphItemDetails";
import { BarGraphItemDetailsTopContainerUI } from "./style";

interface BarGraphItemDetailsTopContainerProps {
  array1: array1Data;
}

function BarGraphItemDetailsTopContainer({
  array1,
}: BarGraphItemDetailsTopContainerProps) {
  return (
    <BarGraphItemDetailsTopContainerUI.TopContainer>
      <div>
        <span>{array1.groupName}</span>
        <span>{array1.currentMembers}명</span>
        <BarGraphItemDetailsTopContainerUI.SavingButton>
          저금하기
        </BarGraphItemDetailsTopContainerUI.SavingButton>
      </div>
      <div>{ChangeChallengePeriod(array1.startedAt, array1.finishedAt)}</div>
    </BarGraphItemDetailsTopContainerUI.TopContainer>
  );
}

export default BarGraphItemDetailsTopContainer;
