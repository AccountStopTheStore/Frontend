import styled from "@emotion/styled";
import { theme } from "../../../assets/theme";

//
const FinancialSummaryContaienr = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${theme.font_color.white};
  border-bottom: 1px solid ${theme.font_color.gray2};
  ${theme.font_style.regular_medium};
  color: ${theme.font_color.black};

  display: flex;
  align-items: center;
`;

const ItemsWrapper = styled.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Name = styled.span``;

const Amount = styled.span`
  ${theme.font_style.bold_medium};
`;

export const FinancialSummaryUI = {
  FinancialSummaryContaienr,
  ItemsWrapper,
  ItemWrapper,
  Name,
  Amount,
} as const;
