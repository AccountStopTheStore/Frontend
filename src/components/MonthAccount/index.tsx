import { useRecoilState } from "recoil";
import MonthIncomeExpenseInfos from "../Common/MonthIncomeExpenseInfos";
import { MonthAccountUI } from "./style";
import { calendarDateAtom } from "@/src/hooks/recoil/useCalendarDate";

export interface MonthData {
  year: number;
  month: number;
}

function MonthAccount() {
  const [getYearMonthDate] = useRecoilState(calendarDateAtom);

  const currentYear = getYearMonthDate.year;

  const monthsArray: MonthData[] = [];
  for (let month = 1; month <= 12; month++) {
    monthsArray.push({ year: currentYear, month });
  }

  return (
    <MonthAccountUI.Section>
      <ul>
        {monthsArray.reverse().map((transactionInfo) => {
          return (
            <MonthIncomeExpenseInfos
              key={transactionInfo.month}
              transactionInfo={transactionInfo}
            />
          );
        })}
      </ul>
    </MonthAccountUI.Section>
  );
}

export default MonthAccount;
