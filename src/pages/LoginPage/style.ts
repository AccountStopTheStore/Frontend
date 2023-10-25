import styled from "@emotion/styled";
import { theme } from "../../assets/theme";

const Container1 = styled.div`
  color: ${theme.font_color.primary_blue};
  ${theme.font_style.bold_large};
`;
const Container2 = styled.div`
  color: ${theme.font_color.primary_blue};
  ${theme.font_style.regular_large};
`;
const Container3 = styled.div`
  color: ${theme.font_color.primary_blue};
  ${theme.font_style.light_large};
`;
const Button1 = styled.button`
  color: ${theme.font_color.primary_blue};
  ${theme.font_style.bold_large};
`;
const Button2 = styled.button`
  color: ${theme.font_color.primary_blue};
  ${theme.font_style.regular_large};
`;
const Button3 = styled.button`
  color: ${theme.font_color.primary_blue};
  ${theme.font_style.light_large};
`;

export const UI = {
  Container1,
  Container2,
  Container3,
  Button1,
  Button2,
  Button3,
} as const;
