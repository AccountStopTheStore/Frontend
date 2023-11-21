import { theme } from "@/src/assets/theme";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const Wrapper = styled.div`
  width: 123px;
  border: 1px solid ${theme.font_color.gray2};
  background-color: ${theme.font_color.white};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  position: absolute;
  top: 45px;
  right: 45px;
  z-index: 1;
`;

const EditButton = styled(Button)`
  width: inherit;
  height: 37px;
  background-color: ${theme.font_color.white};
  color: ${theme.font_color.gray3};
  ${theme.font_style.regular_medium}
  border-bottom: 1px solid ${theme.font_color.gray2};
`;

export const EditChallengeButtonUI = {
  Wrapper,
  EditButton,
};
