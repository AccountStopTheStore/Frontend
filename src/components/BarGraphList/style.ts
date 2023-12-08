import { ChallengeHeight } from "@/src/assets/height";
import { theme } from "@/src/assets/theme";
import styled from "@emotion/styled";

const List = styled.ul`
  height: calc(${ChallengeHeight}px);

  background-color: ${theme.font_color.gray1};
`;

export const BarGraphListUI = {
  List,
};
