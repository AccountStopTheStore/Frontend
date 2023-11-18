import styled from "@emotion/styled";
import { ChallengeBottomListHeight } from "@/src/assets/height";

const BottomList = styled.ul`
  height: calc(${ChallengeBottomListHeight}px);
  overflow: scroll;
  > div {
    padding: 20px 0;
  }
`;

export const BarGraphItemDetailsUI = {
  BottomList,
};
