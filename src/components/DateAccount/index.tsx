import DateTopContainer from "../Common/DateTopContainer";
import DayIncomeExpenseInfos from "../Common/DayIncomeExpenseInfos";
import { DateAccountUI } from "./style";

function DateAccount() {
  return (
    <DateAccountUI.Section>
      <DateTopContainer />
      <DayIncomeExpenseInfos />
    </DateAccountUI.Section>
  );
}

export default DateAccount;
