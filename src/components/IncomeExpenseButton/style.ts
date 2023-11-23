import styled from "@emotion/styled";
import { theme } from "../../assets/theme";

const Container = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled.button`
  width: 156px;
  height: 40px;
  ${theme.border_radius};
  ${theme.font_style.bold_medium};
`;

export const IncomeExpenseButtonUI = {
  Container,
  StyledButton,
} as const;
