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

const DateContainer = styled.div`
  height: 60px;
  padding: 0 20px;

  background-color: ${theme.font_color.white};
  border-bottom: 1px solid ${theme.font_color.gray2};

  display: flex;
  align-items: center;

  > div {
    margin-right: 3px;
  }
  >div: first-of-type {
    ${theme.font_style.bold_large}
  }
  >div: nth-of-type(2) {
    width: 21px;
    height: 21px;

    background-color: ${theme.font_color.gray3};
    ${theme.border_radius};
    color: ${theme.font_color.white};
    text-align: center;
    line-height: 21px;
  }
  >div: last-of-type {
    margin-right: 0;
  }
`;

export const DateAccountUI = {
  Section,
  DateContainer,
};
