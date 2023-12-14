import { ChangeChallengePeriod } from "@/src/assets/util";
import { BarGraphItemDetailsTopContainerUI } from "./style";
import { GetChallengeGroup } from "@/src/@types/models/getChallengeGroups";

interface BarGraphItemDetailsTopContainerProps {
  challengeGroup: GetChallengeGroup;
}

function BarGraphItemDetailsTopContainer({
  challengeGroup,
}: BarGraphItemDetailsTopContainerProps) {
  return (
    <BarGraphItemDetailsTopContainerUI.TopContainer>
      <div>
        <span>{challengeGroup.name}</span>
        <span>{challengeGroup.currentMembers}명</span>
        <BarGraphItemDetailsTopContainerUI.SavingButton>
          저금하기
        </BarGraphItemDetailsTopContainerUI.SavingButton>
      </div>
      <div>
        {ChangeChallengePeriod(challengeGroup.startAt, challengeGroup.endAt)}
      </div>
    </BarGraphItemDetailsTopContainerUI.TopContainer>
  );
}

export default BarGraphItemDetailsTopContainer;
