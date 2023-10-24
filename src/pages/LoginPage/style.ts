import styled from "@emotion/styled";
import { theme } from "../../assets/theme";

const Container = styled.div`
  color: ${theme.font_color.primary_blue};
  ${theme.font_style.bold_large};
`;

export const UI = {
  Container,
} as const;
