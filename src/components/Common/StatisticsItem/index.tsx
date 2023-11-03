import { StatListsProps } from "../StatisticsItems";
import { StatisticsItemUI } from "./style";

interface StatisticsItemProps {
  item: StatListsProps;
  selectedTab: string;
  incomeAmount: number;
  expenseAmount: number;
}

function StatisticsItem({
  item,
  selectedTab,
  incomeAmount,
  expenseAmount,
}: StatisticsItemProps) {
  const IncomePercentage = ((item.amount / incomeAmount) * 100).toFixed(0);
  const ExpensePercnetage = ((item.amount / expenseAmount) * 100).toFixed(0);

  return (
    <>
      <StatisticsItemUI.ItemContainer>
        <StatisticsItemUI.ItemWrapper>
          <StatisticsItemUI.PercentageBox>
            <StatisticsItemUI.Percentage>
              {selectedTab === "수입"
                ? IncomePercentage
                : selectedTab === "지출"
                ? ExpensePercnetage
                : null}
              %
            </StatisticsItemUI.Percentage>
          </StatisticsItemUI.PercentageBox>
          <StatisticsItemUI.CategoryName>
            {item.categoryName}
          </StatisticsItemUI.CategoryName>
          <StatisticsItemUI.Amount>{item.amount} 원</StatisticsItemUI.Amount>
        </StatisticsItemUI.ItemWrapper>
      </StatisticsItemUI.ItemContainer>
    </>
  );
}

export default StatisticsItem;
