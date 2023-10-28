import styled from "@emotion/styled";
import { theme } from "../../../assets/theme";

const LongButton = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  background-color: ${theme.font_color.primary_green};
  ${theme.font_style.bold_medium}
`;

export const LongButtonUI = { LongButton } as const;
