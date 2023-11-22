import { theme } from "@/src/assets/theme";
import { CalendarUI } from "./style";
import { useRecoilState } from "recoil";
import { calendarDateAtom } from "@/src/hooks/recoil/useCalendarDate";
import { CalculateTotal } from "@/src/assets/util";
import { AccountBookAPI } from "@/src/core/api/accountBook";
import { useEffect, useState } from "react";
import { GetAccounts } from "@/src/@types/models/getAccounts";

interface DailyRecord {
  date: string | "";
  transactions: GetAccounts[];
}

function Calendar() {
  const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

  /** COMPLETED: state로 거래 내역 관리하기 */
  const [transactions, setTransactions] = useState<GetAccounts[]>([]);
  /** COMPLETED: 서버로부터 거래 내역 가져오기 */
  useEffect(() => {
    const getAccounts = async () => {
      try {
        const accounts = await AccountBookAPI.getAccountBooksMonthly(
          getYearAndMonth.year,
          getYearAndMonth.month
        );
        setTransactions(accounts.data);
      } catch (error) {
        console.error("GetAccount Error: ", error);
      }
    };

    getAccounts();
  }, []);

  /** COMPLETED: 2-1. 윤년 확인하기 */
  const checkLeapYear = (year: number) => {
    if (year % 400 === 0) {
      return true;
    } else if (year % 100 === 0) {
      return false;
    } else if (year % 4 === 0) {
      return true;
    } else {
      return false;
    }
  };
  /** COMPLETED: 2-2. 해당 년월에 따라 1일이 무슨 요일인지 반환하기 */
  const getFirstDayOfWeek = (year: number, month: number) => {
    const firstDayOfWeek = new Date(year + "-" + month + "-01").getDay();

    /** 일요일이면, 0 ~ 토요일이면, 6 */
    return firstDayOfWeek;
  };
  /** COMPLETED: 1. 년월에 따라 해당 월의 일일을 배열로 반환하기 */
  const changeYearMonth = (year: number, month: number) => {
    const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    /** 현재 달이 2월일 경우, 윤달인지 확인하기
     * 윤달일 경우, 28일에서 29일로 변경하기
     */
    if (month === 2) {
      if (checkLeapYear(year)) monthDays[1] = 29;
    }

    /** getFirstDayOfWeek 함수로 해당 년월의 1일이 무슨 요일인지 반환하기 */
    const firstDayofWeek = getFirstDayOfWeek(year, month);

    const calendarArray = [];

    /** 해당 월의 거래 내역 필터링 */
    const filteredTransactions = transactions.filter(transaction => {
      const transactionDate = new Date(transaction.transactedAt);
      return (
        transactionDate.getFullYear() === year &&
        transactionDate.getMonth() + 1 === month
      );
    });

    /** 1일인 요일 전까지 모든 요일에는 빈 값으로 배열에 넣기 */
    for (let i = 0; i < firstDayofWeek; i++) {
      const dateObject: DailyRecord = {
        date: "",
        transactions: [],
      };
      calendarArray.push(dateObject);
    }

    /** 1일부터 해당 달의 마지막 일까지 일일을 배열에 넣기 */
    for (let i = 1; i <= monthDays[month - 1]; i++) {
      const dateObject: DailyRecord = {
        date: String(i),
        transactions: [],
      };

      /** FIXME: 해당 날짜에 속하는 거래 내역을 추출하여 배열에 추가하기 */
      const transactionsForDate = filteredTransactions.filter(transaction => {
        return new Date(transaction.transactedAt).getDate() === i;
      });

      dateObject.transactions = transactionsForDate;
      console.log("dateObject.transactions: ", dateObject.transactions);

      calendarArray.push(dateObject);
    }

    /** 마지막 일 이후, 다음 달 1일 전까지 모든 요일에는 빈 값으로 배열에 넣기 */
    const remainDay = 7 - (calendarArray.length % 7);
    if (remainDay < 7) {
      for (let i = 0; i < remainDay; i++) {
        const dateObject: DailyRecord = {
          date: "",
          transactions: [],
        };
        calendarArray.push(dateObject);
      }
    }

    return calendarArray;
  };

  const [getYearAndMonth] = useRecoilState(calendarDateAtom);
  const currentYear = getYearAndMonth.year;
  const currentMonth = getYearAndMonth.month;
  const calendarArray = changeYearMonth(currentYear, currentMonth);

  const [openModal, setOpenModal] = useState(false);
  const onDateClick = (day: DailyRecord) => {
    console.log("day: ", day);
    setOpenModal(!openModal);
  };
  return (
    <section>
      <CalendarUI.DayOfWeekContainer>
        {dayOfWeek.map((item, index) => {
          return (
            <CalendarUI.DayOfWeek key={index}>{item}</CalendarUI.DayOfWeek>
          );
        })}
      </CalendarUI.DayOfWeekContainer>
      <CalendarUI.MonthContainer>
        {calendarArray.map((day, index) => {
          const income = day.transactions.reduce((acc, cur) => {
            if (cur.recurringType === "수입") {
              return acc + cur.amount;
            } else {
              return acc;
            }
          }, 0);
          const expense = day.transactions.reduce((acc, cur) => {
            if (cur.recurringType === "지출") {
              return acc + cur.amount;
            } else {
              return acc;
            }
          }, 0);

          return (
            <CalendarUI.DateButton
              key={index}
              onClick={() => onDateClick(day)}
              disabled={day.date === "" && true}
              style={day.date === "" ? disabledStyle : ableStyle}>
              {day.date !== "" && (
                <>
                  <div>{day.date}</div>
                  <div>{income}</div>
                  <div>{expense}</div>
                  <div>{CalculateTotal(income, expense)}</div>
                </>
              )}
            </CalendarUI.DateButton>
          );
        })}
      </CalendarUI.MonthContainer>
    </section>
  );
}

const disabledStyle = {
  backgroundColor: `${theme.font_color.gray1}`,
};
const ableStyle = {
  backgroundColor: `${theme.font_color.white}`,
};

export default Calendar;
