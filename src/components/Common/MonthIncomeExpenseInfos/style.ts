import { theme } from "@/src/assets/theme";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const MonthIncomeExpenseInfosItem = styled.li``;

const MonthButton = styled(Button)`
  width: 100%;
  min-width: 0;
  padding: 15px 20px;

  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid ${theme.font_color.gray2};

  > div:first-of-type {
    ${theme.font_style.bold_large};
    color: ${theme.font_color.black};

    margin-left: 20px;
  }
`;

const TransactionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);

  line-height: inherit;
  > div {
    ${theme.font_style.regular_small};
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

export const MonthIncomeExpenseInfosUI = {
  MonthIncomeExpenseInfosItem,
  MonthButton,
  TransactionContainer,
};
