import { useRecoilState } from "recoil";
import { ChosenYearMonthUI } from "./style";
// import { useState } from "react";
import { calendarDateAtom } from "@/src/hooks/recoil/useCalendarDate";

function ChosenYearMonth() {
  const [getYearMonthDate, setGetYearMonthDate] =
    useRecoilState(calendarDateAtom);

  const changeMonth = async (plusMinusOne: number) => {
    let newYear = getYearMonthDate.year;
    let newMonth = getYearMonthDate.month;
    const newDate = getYearMonthDate.date;

    newMonth += plusMinusOne;

    if (newMonth === 0) {
      newYear += plusMinusOne;
      newMonth = 12;
    } else if (newMonth === 13) {
      newYear += plusMinusOne;
      newMonth = 1;
    }

    setGetYearMonthDate({
      year: newYear,
      month: newMonth,
      date: newDate,
    });
  };

  return (
    <ChosenYearMonthUI.ChosenContainer>
      {/* <ChosenYearMonthUI.LeftButton onClick={handleDoubleLeftArrow}>
        &#171;
      </ChosenYearMonthUI.LeftButton> */}
      <ChosenYearMonthUI.LeftButton onClick={() => changeMonth(-1)}>
        &lt;
      </ChosenYearMonthUI.LeftButton>
      <div>{`${getYearMonthDate.year}년 ${getYearMonthDate.month}월`}</div>
      <ChosenYearMonthUI.RightButton onClick={() => changeMonth(+1)}>
        &gt;
      </ChosenYearMonthUI.RightButton>
      {/* <ChosenYearMonthUI.RightButton onClick={handleDoubleRightArrow}>
        &#187;
      </ChosenYearMonthUI.RightButton> */}
    </ChosenYearMonthUI.ChosenContainer>
  );
}

export default ChosenYearMonth;
