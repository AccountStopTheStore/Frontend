import { theme } from "@/src/assets/theme";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const ChosenContainer = styled.div`
  height: 53px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  ${theme.font_style.regular_medium};
  background-color: ${theme.font_color.primary_green};
`;

const LeftButton = styled(Button)`
  min-width: 0;

  color: ${theme.font_color.black};
  ${theme.font_style.bold_medium}
`;
const RightButton = styled(Button)`
  min-width: 0;

  color: ${theme.font_color.black};
  ${theme.font_style.bold_medium}
`;

export const ChosenYearMonthUI = {
  ChosenContainer,
  LeftButton,
  RightButton,
};
