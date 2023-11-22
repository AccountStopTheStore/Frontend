import { useRecoilState } from "recoil";
import { DateTopContainerUI } from "./style";
import { calendarDateAtom } from "@/src/hooks/recoil/useCalendarDate";

function DateTopContainer() {
  const DayOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const [getYearAndMonth] = useRecoilState(calendarDateAtom);

  return (
    <DateTopContainerUI.DateTopContainer>
      <div>{getYearAndMonth.date}</div>
      <div>
        {
          DayOfWeek[
            new Date(
              getYearAndMonth.year,
              getYearAndMonth.month - 1,
              getYearAndMonth.date
            ).getDay()
          ]
        }
      </div>
      <div>{`${getYearAndMonth.year}.${getYearAndMonth.month}`}</div>
    </DateTopContainerUI.DateTopContainer>
  );
}

export default DateTopContainer;
