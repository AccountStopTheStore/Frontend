import { useRecoilState } from "recoil";
import { StatisticsHeaderUI } from "./style";
import { calendarDateAtom } from "@/src/hooks/recoil/useCalendarDate";
import LeftArrow from "@/public/icon/LeftChevron.svg";
import RightArrow from "@/public/icon/RightChevron.svg";
import CalendarModal from "../Common/CalendarModal";
import { modalOpenStateAtom } from "@/src/hooks/recoil/calendarModalState";
import DownArrow from "@/public/icon/DownArrow.svg";

function StatisticsHeader() {
  const [getYearMonthDate, setGetYearMonthDate] =
    useRecoilState(calendarDateAtom);
  const [isCalendarModalOpen, setIsCalendarModalOpen] =
    useRecoilState(modalOpenStateAtom);

  const changeMonth = async (plusMinusOne: number) => {
    let newYear = getYearMonthDate.year;
    let newMonth = getYearMonthDate.month;

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
    });
  };

  const handleYearMonthClick = () => {
    console.log("YearMonth Clicked");
    setIsCalendarModalOpen(true);
  };

  return (
    <StatisticsHeaderUI.HeaderContainer>
      <StatisticsHeaderUI.YearMonthContainer>
        <StatisticsHeaderUI.LeftButton type="button">
          <img
            src={LeftArrow}
            alt="왼쪽 방향"
            onClick={() => changeMonth(-1)}
          />
        </StatisticsHeaderUI.LeftButton>
        <StatisticsHeaderUI.YearMonth onClick={handleYearMonthClick}>
          {`${getYearMonthDate.year}년 ${getYearMonthDate.month}월`}
        </StatisticsHeaderUI.YearMonth>
        {isCalendarModalOpen && <CalendarModal />}
        <StatisticsHeaderUI.RightButton type="button">
          <img
            src={RightArrow}
            alt="오른쪽 방향"
            onClick={() => changeMonth(+1)}
          />
        </StatisticsHeaderUI.RightButton>
      </StatisticsHeaderUI.YearMonthContainer>
      <StatisticsHeaderUI.YearMonthButton type="button">
        <span>월별</span>
        <img src={DownArrow} alt=" " />
      </StatisticsHeaderUI.YearMonthButton>
    </StatisticsHeaderUI.HeaderContainer>
  );
}

export default StatisticsHeader;
