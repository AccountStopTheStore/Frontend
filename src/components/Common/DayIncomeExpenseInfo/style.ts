import styled from "@emotion/styled";
import { theme } from "../../../assets/theme";

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
  ContentContainer,
};
