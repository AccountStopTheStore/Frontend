import styled from "@emotion/styled";
import { theme } from "../../../assets/theme";

const deleteMarginLength = "100% - 64px";

const LongButton = styled.button`
  width: calc(${deleteMarginLength});
  height: 50px;
  border-radius: 5px;
  background-color: ${theme.font_color.primary_green};
  ${theme.font_style.bold_medium}

  margin: 0 32px;
`;

export const LongButtonUI = { LongButton } as const;
