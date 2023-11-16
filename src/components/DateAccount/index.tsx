import DayIncomeExpenseInfos from "../Common/DayIncomeExpenseInfos";
import { DateAccountUI } from "./style";

function DateAccount() {
  const today = new Date();
  const DayOfWeek = ["월", "화", "수", "목", "금", "토", "일"];

  return (
    <DateAccountUI.Section>
      <DateAccountUI.DateContainer>
        <div>{today.getDate()}</div>
        <div>{DayOfWeek[today.getDay()]}</div>
        <div>{`${today.getFullYear()}.${today.getMonth()}`}</div>
      </DateAccountUI.DateContainer>
      <DayIncomeExpenseInfos />
    </DateAccountUI.Section>
  );
}

export default DateAccount;
