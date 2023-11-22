import { ApplicationHeight, BottomDateModalHeight } from "@/src/assets/height";
import { theme } from "@/src/assets/theme";
import styled from "@emotion/styled";

const Section = styled.section`
  width: 100%;
  height: ${ApplicationHeight}px;

  position: absolute;
  top: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Container = styled.div`
  width: inherit;
  position: absolute;
  bottom: 0;
  height: ${BottomDateModalHeight}px;

  background-color: ${theme.font_color.white};
`;

export const BottomDateModalUI = {
  Section,
  Container,
};
