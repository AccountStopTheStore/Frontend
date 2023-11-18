import LongButton from "../Common/LongButton";
import { EnterSavingOrBudgetUI } from "./style";

interface EnterSavingOrBudgetProps {
  enterType: "저축" | "예산";
}
function EnterSavingOrBudget({ enterType }: EnterSavingOrBudgetProps) {
  console.log("enterType: ", enterType);
  return (
    <EnterSavingOrBudgetUI.Container>
      <EnterSavingOrBudgetUI.EnterContainer>
        <EnterSavingOrBudgetUI.Input type="text" placeholder="입력하기" />
        <LongButton buttonName={"저장"} />
      </EnterSavingOrBudgetUI.EnterContainer>
    </EnterSavingOrBudgetUI.Container>
  );
}

export default EnterSavingOrBudget;
