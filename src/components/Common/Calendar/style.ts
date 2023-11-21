import { theme } from "@/src/assets/theme";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
import { AccountHeight } from "@/src/assets/height";

const DayOfWeekContainer = styled.div`
  display: flex;

  border-bottom: 1px solid ${theme.font_color.gray2};
  > div:first-of-type {
    color: ${theme.font_color.primary_red};
  }
`;
const DayOfWeek = styled.div`
  width: 100%;
  display: inline-block;
  background-color: ${theme.font_color.gray1};
  text-align: center;
`;
const MonthContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  height: calc(${AccountHeight - 18}px);
  overflow: scroll;

  > button {
    height: 102px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    ${theme.font_style.regular_small};
  }
`;
const DateButton = styled(Button)`
  height: 98px;
  border-bottom: 1px solid ${theme.font_color.gray2};
  border-right: 1px solid ${theme.font_color.gray2};
  border-radius: 0;
  min-width: 0;

  color: ${theme.font_color.black};

  display: block;

  >div: nth-of-type(2) {
    width: 100%;
    text-align: right;
    color: ${theme.font_color.primary_red};
  }
  >div: nth-of-type(3) {
    width: 100%;
    text-align: right;
    color: ${theme.font_color.primary_blue};
  }
  >div: nth-of-type(4) {
    width: 100%;
    text-align: right;
  }
`;

export const CalendarUI = {
  DayOfWeekContainer,
  DayOfWeek,
  MonthContainer,
  DateButton,
};
