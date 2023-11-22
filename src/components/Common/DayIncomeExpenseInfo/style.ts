import styled from "@emotion/styled";
import { theme } from "../../../assets/theme";
import { Button } from "@mui/material";

const DayIncomeExpenseInfoButton = styled(Button)`
  width: 100%;
  height: 64px;
  border-bottom: 1px solid ${theme.font_color.gray2};
  padding: 6px 20px;
  color: ${theme.font_color.black};
  font-weight: 300;
  fontsize: 13px;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  > div:nth-of-type(1) {
    margin-right: 46px;
    color: ${theme.font_color.gray3};
  }
  > div:nth-of-type(2) {
    flex: 1;

    > div {
      display: flex;
      justify-content: flex-start;
    }
    > div:nth-of-type(1) {
      white-space: nowrap; /* 줄 바꿈을 허용하지 않음 */
      overflow: hidden; /* 내용이 컨테이너를 벗어나면 숨김 */
      text-overflow: ellipsis; /* 내용이 컨테이너를 벗어나면 ...으로 표시 */
      width: 120px;

      ${theme.font_style.regular_medium};
    }
    > div:nth-of-type(2) {
      color: ${theme.font_color.gray3};

      > span:nth-of-type(1) {
        margin-right: 32px;
      }
    }
  }
`;

export const DayIncomeExpenseInfoUI = {
  DayIncomeExpenseInfoButton,
  ContentContainer,
};
