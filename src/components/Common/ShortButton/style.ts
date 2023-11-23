import styled from "@emotion/styled";
import { theme } from "../../../assets/theme";
import { css } from "@emotion/react";

const Container = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  padding: 0 20px;
  margin-bottom: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  ButtonWrapper,
  CancelButton,
  GreenButton,
} as const;
