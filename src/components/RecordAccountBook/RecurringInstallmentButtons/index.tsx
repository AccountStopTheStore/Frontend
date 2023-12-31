import { RecurringInstallmentButtonsUI } from "./style";

interface RecurringInstallmentButtonsPRops {
  onRecurringClick: React.MouseEventHandler;
  onInstallmentClick: React.MouseEventHandler;
}

function RecurringInstallmentButtons({
  onRecurringClick,
  onInstallmentClick,
}: RecurringInstallmentButtonsPRops) {
  return (
    <RecurringInstallmentButtonsUI.Wrapper>
      <RecurringInstallmentButtonsUI.RecurringButton
        type="button"
        onClick={onRecurringClick}
      >
        반복
      </RecurringInstallmentButtonsUI.RecurringButton>
      <RecurringInstallmentButtonsUI.InstallmentButton
        type="button"
        onClick={onInstallmentClick}
      >
        할부
      </RecurringInstallmentButtonsUI.InstallmentButton>
    </RecurringInstallmentButtonsUI.Wrapper>
  );
}

export default RecurringInstallmentButtons;
