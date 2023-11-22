import { theme } from "../../../assets/theme";
import { FinancialSummaryUI } from "./style";

function FinancialSummary() {
  /** TODO: 수입, 지출, 합계 데이터 가져와 연결하기 */

  const income = 2000;
  const expense = 3000;
  const total = income - expense;

  const FinancialSummaryItems = [
    { name: "수입", amount: income },
    { name: "지출", amount: expense },
    { name: "합계", amount: total },
  ];

  return (
    <FinancialSummaryUI.FinancialSummaryContainer>
      <FinancialSummaryUI.ItemsWrapper>
        {FinancialSummaryItems.map(item => (
          <FinancialSummaryUI.ItemWrapper key={item.name}>
            <FinancialSummaryUI.Name>{item.name}</FinancialSummaryUI.Name>
            <FinancialSummaryUI.Amount
              style={
                item.name === "수입"
                  ? incomeStyle
                  : item.name === "지출"
                  ? expenseStyle
                  : totalStyle
              }>
              {item.amount.toLocaleString()}원
            </FinancialSummaryUI.Amount>
          </FinancialSummaryUI.ItemWrapper>
        ))}
      </FinancialSummaryUI.ItemsWrapper>
    </FinancialSummaryUI.FinancialSummaryContainer>
  );
}

export default FinancialSummary;

const incomeStyle = {
  color: `${theme.font_color.primary_red}`,
};

const expenseStyle = {
  color: `${theme.font_color.primary_blue}`,
};

const totalStyle = {
  color: `${theme.font_color.black}`,
};
