import { theme } from "@/src/assets/theme";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const inputWidth = "100% - 73px";

const InputButton = styled(Button)`
  padding: 0 0 6px 10px;
  border: none;
  border-bottom: 1px solid ${theme.font_color.gray2};
  ${theme.font_style.regular_medium}
  width: calc(${inputWidth});

  justify-content: flex-start;
  color: ${theme.font_color.black};
`;

export const FakeInputButtonUI = {
  InputButton,
};
