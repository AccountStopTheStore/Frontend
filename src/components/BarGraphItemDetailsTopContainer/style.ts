import { theme } from "@/src/assets/theme";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const TopContainer = styled.div`
  padding: 20px;
  border-bottom: 1px solid ${theme.font_color.gray2};
  > div:first-of-type {
    display: flex;
    align-items: center;
    > span:first-of-type {
      ${theme.font_style.bold_medium}
      margin-right: 20px;
    }
    > span:nth-of-type(2) {
      flex: 1;
    }
  }

  >div: last-of-type {
    ${theme.font_style.regular_small}
  }
`;

const SavingButton = styled(Button)`
  background-color: ${theme.font_color.gray1};
  color: ${theme.font_color.gray4};
  ${theme.font_style.regular_small}
`;

export const BarGraphItemDetailsTopContainerUI = {
  TopContainer,
  SavingButton,
};
