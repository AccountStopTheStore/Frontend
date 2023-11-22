import { theme } from "@/src/assets/theme";
import styled from "@emotion/styled";

const MonthIncomeExpenseInfoItem = styled.li`
  width: 100%;
  min-width: 0;
  padding: 15px 20px;

  background-color: ${theme.font_color.gray1};
  border-bottom: 1px solid ${theme.font_color.gray2};

  display: flex;
  justify-content: space-between;

  > div:first-of-type {
    ${theme.font_style.bold_small};
    color: ${theme.font_color.black};

    margin-left: 20px;
  }
`;

const TransactionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

  > div {
    ${theme.font_style.regular_small};
    text-align: center;
  }
  > div:first-of-type {
    color: ${theme.font_color.primary_red};
    padding-right: 15px;
  }
  > div:nth-of-type(2) {
    color: ${theme.font_color.primary_blue};
  }
  > div:last-of-type {
    color: ${theme.font_color.black};
  }
`;

export const MonthIncomeExpenseInfoUI = {
  MonthIncomeExpenseInfoItem,
  TransactionContainer,
};
