import styled from "@emotion/styled";
import { ChallengeBottomListHeight } from "@/src/assets/height";
import { theme } from "@/src/assets/theme";

const BottomList = styled.ul`
  height: calc(${ChallengeBottomListHeight}px);
  background-color: ${theme.font_color.gray1};
  overflow: scroll;
  > div {
    padding: 20px 0;
  }
`;

export const BarGraphItemDetailsUI = {
  BottomList,
};
