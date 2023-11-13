import styled from "@emotion/styled";
import { theme } from "../../../assets/theme";
import { css } from "@emotion/react";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 20px;
`;

const buttonStyle = css`
  width: 165px;
  height: 50px;
  ${theme.border_radius}
  ${theme.font_style.regular_medium}
  color: ${theme.font_color.black}
`;

const CancelButton = styled.button`
  ${buttonStyle}
  background-color: ${theme.font_color.white};
  border: 1px solid ${theme.font_color.gray3};
`;
const GreenButton = styled.button`
  ${buttonStyle}
  background-color: ${theme.font_color.primary_green};
`;

export const ShortButtonUI = {
  Container,
  CancelButton,
  GreenButton,
} as const;
