import MonthIncomeExpenseInfos from "../Common/MonthIncomeExpenseInfos";
import { MonthAccountUI } from "./style";

function MonthAccount() {
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

  return (
    <MonthAccountUI.Section>
      <ul>
        {exampleArray.map((transactionInfo) => {
          return (
            <MonthIncomeExpenseInfos
              key={transactionInfo.startAt}
              transactionInfo={transactionInfo}
            />
          );
        })}
      </ul>
    </MonthAccountUI.Section>
  );
}

export default MonthAccount;
