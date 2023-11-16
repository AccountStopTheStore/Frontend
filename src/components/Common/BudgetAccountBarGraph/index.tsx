import {
  CalculatePercentage,
  ChangeNumberForAccounting,
} from "@/src/assets/format";
import { BudgetAccountBarGraphUI } from "./style";

export const BudgetAccountBarGraphData = {
  budget: 150000,
  deposit: 170000,
  balance: 40000,
};

function BudgetAccountBarGraph() {
  return (
    <BudgetAccountBarGraphUI.BudgetAccountBarGraphContainer>
      <BudgetAccountBarGraphUI.TotalBudget>
        <div>전체 예산</div>
        <div>{ChangeNumberForAccounting(BudgetAccountBarGraphData.budget)}</div>
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
              {CalculatePercentage(
                BudgetAccountBarGraphData.deposit,
                BudgetAccountBarGraphData.budget
              )}
            </BudgetAccountBarGraphUI.DepositPercent>
          </BudgetAccountBarGraphUI.LengthContainer>
        </BudgetAccountBarGraphUI.BarGraph>
        <BudgetAccountBarGraphUI.DepositBalanceContainer>
          <div>
            {ChangeNumberForAccounting(BudgetAccountBarGraphData.deposit)}
          </div>
          <div>
            {ChangeNumberForAccounting(BudgetAccountBarGraphData.balance)}
          </div>
        </BudgetAccountBarGraphUI.DepositBalanceContainer>
      </BudgetAccountBarGraphUI.BarGraphContainer>
    </BudgetAccountBarGraphUI.BudgetAccountBarGraphContainer>
  );
}

export default BudgetAccountBarGraph;
