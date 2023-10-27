import styled from "@emotion/styled";
import { theme } from "../../../assets/theme";

const BackgroundContainer = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${theme.font_color.gray4};
`;

const ApplicationContainer = styled.div`
  background: ${theme.font_color.white};
  width: 390px;
  height: 844px;

  position: relative;
`;

export const LayoutUI = {
  BackgroundContainer,
  ApplicationContainer,
} as const;
