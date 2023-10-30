import styled from "@emotion/styled";
import { theme } from "../../../assets/theme";

const ButtonContainer = styled.button`
  width: 165px;
  height: 50px;
  color: ${theme.font_color.black};
  ${theme.font_style.regular_medium};
  border-radius: 5px;
`;

export const ShortButtonUI = {
  ButtonContainer,
} as const;
