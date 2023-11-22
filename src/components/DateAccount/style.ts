import { AccountHeight } from "@/src/assets/height";
import { theme } from "@/src/assets/theme";
import styled from "@emotion/styled";

const Section = styled.section`
  height: calc(${AccountHeight}px);

  background-color: ${theme.font_color.gray1};
  overflow: auto;

  > ul {
    background-color: ${theme.font_color.white};
  }
`;

export const DateAccountUI = {
  Section,
};
