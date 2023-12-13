import { ChangeChallengePeriod } from "@/src/assets/util";
import { BarGraphItemDetailsTopContainerUI } from "./style";
import { GetChallengeGroup } from "@/src/@types/models/getChallengeGroups";
import { useNavigate, useParams } from "react-router-dom";

interface BarGraphItemDetailsTopContainerProps {
  challengeGroup: GetChallengeGroup;
}

function BarGraphItemDetailsTopContainer({
  challengeGroup,
}: BarGraphItemDetailsTopContainerProps) {
  const navigate = useNavigate();
  const param = useParams();

  const handleSavingButton = () => {
    navigate(`/saving/${param.slug}`);
  };

  return (
    <BarGraphItemDetailsTopContainerUI.TopContainer>
      <div>
        <span>{challengeGroup.name}</span>
        <span>{challengeGroup.currentMembers}명</span>
        <BarGraphItemDetailsTopContainerUI.SavingButton
          onClick={handleSavingButton}>
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
