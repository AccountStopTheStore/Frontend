import { atom } from "recoil";

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;
const currentDate = new Date().getDate();

export interface CalendarDateAtomProps {
  year: number;
  month: number;
  date: number;
}

export const calendarDateAtom = atom<CalendarDateAtomProps>({
  key: "calendarDateAtom",
  default: {
    year: currentYear,
    month: currentMonth,
    date: currentDate,
  },
});
