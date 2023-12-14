import { IncomeExpenseButtonUI } from "./style";
import { theme } from "../../assets/theme";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { saveAccountBookAtom } from "@/src/hooks/recoil/useSaveAccountBook";

function IncomeExpenseButton() {
  const [isIncomeClicked, setIsIncomeClicked] = useState<boolean>(true);
  const [isExpenseClicked, setIsExpenseClicked] = useState<boolean>(false);
  const [, setPostSaveAccountBook] = useRecoilState(saveAccountBookAtom);

  const handleIncomeClick = () => {
    setIsIncomeClicked(true);
    setIsExpenseClicked(false);
    setPostSaveAccountBook(prev => ({
      ...prev,
      transactionType: "수입",
    }));
  };

  const handleExpenseClick = () => {
    setIsExpenseClicked(true);
    setIsIncomeClicked(false);
    setPostSaveAccountBook(prev => ({
      ...prev,
      transactionType: "지출",
    }));
  };

  const incomeButtonStyle = {
    backgroundColor: `${theme.font_color.white}`,
    border: `1px solid ${theme.font_color.primary_blue}`,
    color: `${theme.font_color.primary_blue}`,
  };

  const expenseButtonStyle = {
    backgroundColor: `${theme.font_color.white}`,
    border: `1px solid ${theme.font_color.primary_red}`,
    color: `${theme.font_color.primary_red}`,
  };

  const unclickedStyle = {
    backgroundColor: `${theme.font_color.gray1}`,
    border: `1px solid ${theme.font_color.gray3}`,
    color: `${theme.font_color.gray3}`,
  };

  return (
    <IncomeExpenseButtonUI.Container>
      <IncomeExpenseButtonUI.StyledButton
        type="button"
        onClick={handleIncomeClick}
        style={isIncomeClicked ? incomeButtonStyle : unclickedStyle}>
        수입
      </IncomeExpenseButtonUI.StyledButton>
      <IncomeExpenseButtonUI.StyledButton
        type="button"
        onClick={handleExpenseClick}
        style={isExpenseClicked ? expenseButtonStyle : unclickedStyle}>
        지출
      </IncomeExpenseButtonUI.StyledButton>
    </IncomeExpenseButtonUI.Container>
  );
}

export default IncomeExpenseButton;
