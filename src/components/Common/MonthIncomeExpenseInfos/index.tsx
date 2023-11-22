import { useState } from "react";
import { MonthIncomeExpenseInfosUI } from "./style";
import MonthIncomeExpenseInfo from "../MonthIncomeExpenseInfo";
import { MonthData } from "../../MonthAccount";

interface MonthIncomeExpenseInfosProps {
  transactionInfo: MonthData;
}

function MonthIncomeExpenseInfos({
  transactionInfo,
}: MonthIncomeExpenseInfosProps) {
  const exampleArray = [
    {
      startAt: "2023-10-01 10:00:00",
      endAt: "2023-10-07 10:00:00",
      income: 3000000,
      expense: 1000000,
      total: 2000000,
    },
    {
      startAt: "2023-10-01 10:00:00",
      endAt: "2023-10-07 10:00:00",
      income: 3000000,
      expense: 1000000,
      total: 2000000,
    },
    {
      startAt: "2023-10-01 10:00:00",
      endAt: "2023-10-07 10:00:00",
      income: 3000000,
      expense: 1000000,
      total: 2000000,
    },
  ];

  const [isOpenWeeks, setIsOpenWeeks] = useState(false);

  const handleMonthButton = () => {
    setIsOpenWeeks(!isOpenWeeks);
  };

  return (
    <MonthIncomeExpenseInfosUI.MonthIncomeExpenseInfosItem>
      <MonthIncomeExpenseInfosUI.MonthButton onClick={handleMonthButton}>
        <div>{transactionInfo.month}월</div>
        {/* <MonthIncomeExpenseInfosUI.TransactionContainer>
          <div>{ChangeNumberForAccounting(transactionInfo.income)}</div>
          <div>{ChangeNumberForAccounting(transactionInfo.expense)}</div>
          <div></div>
          <div>
            {CalculateTotal(transactionInfo.income, transactionInfo.expense)}
          </div>
        </MonthIncomeExpenseInfosUI.TransactionContainer> */}
      </MonthIncomeExpenseInfosUI.MonthButton>
      <ul>
        {isOpenWeeks &&
          exampleArray.map(transactionInfo => {
            return (
              <MonthIncomeExpenseInfo
                key={transactionInfo.startAt}
                transactionInfo={transactionInfo}
              />
            );
          })}
      </ul>
    </MonthIncomeExpenseInfosUI.MonthIncomeExpenseInfosItem>
  );
}

export default MonthIncomeExpenseInfos;
