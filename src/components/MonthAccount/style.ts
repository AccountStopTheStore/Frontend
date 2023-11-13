import { AccountHeight } from "@/src/assets/height";
import { theme } from "@/src/assets/theme";
import styled from "@emotion/styled";

const Section = styled.section`
  height: calc(${AccountHeight}px);

  overflow: auto;

  background-color: ${theme.font_color.gray1};

  > ul {
    background-color: ${theme.font_color.white};
  }
`;

export const MonthAccountUI = {
  Section,
};
