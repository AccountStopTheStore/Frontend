import { theme } from "@/src/assets/theme";
import styled from "@emotion/styled";

const PositionContainer = styled.div`
  width: inherit;
  height: inherit;

  background-color: ${theme.font_color.primary_green};

  position: relative;
  > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 100px;
  }
`;

export const LoadingPageUI = {
  PositionContainer,
};
