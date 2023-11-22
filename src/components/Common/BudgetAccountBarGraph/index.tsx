import {
  CalculatePercentage,
  ChangeNumberForAccounting,
} from "@/src/assets/util";
import { BudgetAccountBarGraphUI } from "./style";

export const BudgetAccountBarGraphData = {
  deposit: 150000,
  balance: 20000,
};

export const BudgetsData = {
  month: 11,
  budget: 170000,
};

interface BudgetAccountBarGraphProps {
  name: number | string;
  budget: number;
  deposit: number;
}

function BudgetAccountBarGraph({
  name,
  budget,
  deposit,
}: BudgetAccountBarGraphProps) {
  /** TODO: 해당 달의 처음부터 오늘까지 모든 가계부 값 가져오기 */
  /** TODO: 가져온 모든 가계부 값 recoil Atom에 담기 */
  /** TODO: 모든 가계부 Atom 값에서 수입 - 지출 = deposit 계산하기 */
  /** TODO: budget - deposit = balance 계산하기 */
  return (
    <BudgetAccountBarGraphUI.BudgetAccountBarGraphContainer>
      <BudgetAccountBarGraphUI.TotalBudget>
        <div>{name}</div>
        <div>{ChangeNumberForAccounting(budget)}</div>
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
              {CalculatePercentage(deposit, budget)}
            </BudgetAccountBarGraphUI.DepositPercent>
          </BudgetAccountBarGraphUI.LengthContainer>
        </BudgetAccountBarGraphUI.BarGraph>
        <BudgetAccountBarGraphUI.DepositBalanceContainer>
          <div>{ChangeNumberForAccounting(deposit)}</div>
          <div>{ChangeNumberForAccounting(budget - deposit)}</div>
        </BudgetAccountBarGraphUI.DepositBalanceContainer>
      </BudgetAccountBarGraphUI.BarGraphContainer>
    </BudgetAccountBarGraphUI.BudgetAccountBarGraphContainer>
  );
}

export default BudgetAccountBarGraph;
