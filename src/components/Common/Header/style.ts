import styled from "@emotion/styled";
import { theme } from "../../../assets/theme";

//
const HeaderContainer = styled.header`
  width: 390px;
  height: 77px;
  background-color: ${theme.font_color.primary_green};
  color: ${theme.font_color.black};
  padding: 0 20px;

  position: relative;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const LeftBtnWrapper = styled.div``;

const PageName = styled.h2`
  ${theme.font_style.bold_large};

  margin: 0 auto;
`;

const RightBtnWrapper = styled.div``;

const Button = styled.button`
  img {
    width: 24px;
    height: 24px;
  }
`;

export const HeaderUI = {
  HeaderContainer,
  HeaderWrapper,
  LeftBtnWrapper,
  PageName,
  RightBtnWrapper,
  Button,
} as const;
