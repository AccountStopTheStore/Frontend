import styled from "@emotion/styled";
import { theme } from "../../../assets/theme";

//
const HeaderContainer = styled.header`
  width: 100%;
  height: 77px;
  background-color: ${theme.font_color.primary_green};
  color: ${theme.font_color.black};
  padding: 0 20px;

  position: relative;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
`;

const LeftBtnWrapper = styled.div`
  margin-right: auto;
`;

const PageName = styled.h2`
  ${theme.font_style.bold_large};

  margin: 0 auto;
`;

const RightBtnWrapper = styled.div`
  margin-left: auto;
`;

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
