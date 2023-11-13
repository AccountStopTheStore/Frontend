import {
  CalculateTotal,
  ChangeNumberForAccounting,
  ChangeWeeks,
} from "@/src/assets/format";
import { MonthIncomeExpenseInfoUI } from "./style";

interface transactionInfoData {
  startAt: string;
  endAt: string;
  income: number;
  expense: number;
  total: number;
}

interface MonthIncomeExpenseInfoProps {
  transactionInfo: transactionInfoData;
}

function MonthIncomeExpenseInfo({
  transactionInfo,
}: MonthIncomeExpenseInfoProps) {
  return (
    <MonthIncomeExpenseInfoUI.MonthIncomeExpenseInfoItem>
      <div>{ChangeWeeks(transactionInfo.startAt, transactionInfo.endAt)}</div>
      <MonthIncomeExpenseInfoUI.TransactionContainer>
        <div>{ChangeNumberForAccounting(transactionInfo.income)}</div>
        <div>{ChangeNumberForAccounting(transactionInfo.expense)}</div>
        <div></div>
        <div>
          {CalculateTotal(transactionInfo.income, transactionInfo.expense)}
        </div>
      </MonthIncomeExpenseInfoUI.TransactionContainer>
    </MonthIncomeExpenseInfoUI.MonthIncomeExpenseInfoItem>
  );
}

export default MonthIncomeExpenseInfo;
