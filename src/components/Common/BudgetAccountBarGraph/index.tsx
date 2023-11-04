import { BudgetAccountBarGraphUI } from "./style";

export const BudgetAccountBarGraphData = {
  budget: 150000,
  입금: 170000,
  잔금: 40000,
};

function BudgetAccountBarGraph() {
  const budget대비입금 = Math.floor(
    (BudgetAccountBarGraphData.입금 / BudgetAccountBarGraphData.budget) * 100
  );
  return (
    <BudgetAccountBarGraphUI.BudgetAccountBarGraphContainer>
      <BudgetAccountBarGraphUI.TotalBudget>
        <div>전체 예산</div>
        <div>{BudgetAccountBarGraphData.budget}원</div>
      </BudgetAccountBarGraphUI.TotalBudget>
      <BudgetAccountBarGraphUI.BarGraphContainer>
        <BudgetAccountBarGraphUI.BarGraph>
          <BudgetAccountBarGraphUI.TodayPlace>
            오늘
          </BudgetAccountBarGraphUI.TodayPlace>
          <BudgetAccountBarGraphUI.LengthContainer>
            <BudgetAccountBarGraphUI.TotalLength></BudgetAccountBarGraphUI.TotalLength>
            <BudgetAccountBarGraphUI.CurrentLength></BudgetAccountBarGraphUI.CurrentLength>
            <BudgetAccountBarGraphUI.DepositPercent>
              {budget대비입금}%
            </BudgetAccountBarGraphUI.DepositPercent>
          </BudgetAccountBarGraphUI.LengthContainer>
        </BudgetAccountBarGraphUI.BarGraph>
        <BudgetAccountBarGraphUI.DepositBalanceContainer>
          <div>{BudgetAccountBarGraphData.입금}원</div>
          <div>{BudgetAccountBarGraphData.잔금}원</div>
        </BudgetAccountBarGraphUI.DepositBalanceContainer>
      </BudgetAccountBarGraphUI.BarGraphContainer>
    </BudgetAccountBarGraphUI.BudgetAccountBarGraphContainer>
  );
}

export default BudgetAccountBarGraph;
