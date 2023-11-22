import StatisticsItem from "../StatisticsItem";
import { StatisticsItemsUI } from "./style";

export interface StatListsProps {
  categoryName: string;
  amount: number;
}

interface StatisticsItemsProps {
  selectedTab: string;
}

function StatisticsItems({ selectedTab }: StatisticsItemsProps) {
  console.log("selectedTab: ", selectedTab);
  /** TODO */
  // 선택된 탭, 수입 및 지출 금액 연결 하기
  // 금액 천 단위로 표시

  const incomeAmount = 20000000;
  const expenseAmount = 3000000;

  const StatLists = [
    { categoryName: "월급", amount: 18000000 },
    { categoryName: "기타", amount: 100000 },
    { categoryName: "용돈", amount: 50000 },
  ];

  return (
    <StatisticsItemsUI.ItemsContainer>
      {StatLists.map(item => (
        <StatisticsItem
          key={item.categoryName}
          item={item}
          selectedTab="수입"
          incomeAmount={incomeAmount}
          expenseAmount={expenseAmount}
        />
      ))}
    </StatisticsItemsUI.ItemsContainer>
  );
}

export default StatisticsItems;
