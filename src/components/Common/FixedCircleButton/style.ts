import { Button } from "@mui/material";
import { theme } from "../../../assets/theme";
import styled from "@emotion/styled";

const NavigationHeight = "70px";

const ButtonItem = styled.span`
  position: absolute;
  bottom: calc(${NavigationHeight} + 20px);
  right: 20px;
  z-index: 1;
`;

const PlusButton = styled(Button)`
  width: 64px;
  height: 64px;
  background-color: ${theme.font_color.primary_green};

  border-radius: 50%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  // 마우스 hover할 경우, 배경색 동일하게 적용
  &:hover {
    background-color: ${theme.font_color.primary_green};
  }

  // '+' icon 만들기
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${theme.font_color.white};

    width: 30px;
    height: 2px;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${theme.font_color.white};

    width: 2px;
    height: 30px;
  }
`;

const ChatButton = styled(Button)`
  width: 64px;
  height: 64px;
  background-color: ${theme.font_color.primary_green};

  border-radius: 50%;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  // 마우스 hover할 경우, 배경색 동일하게 적용
  &:hover {
    background-color: ${theme.font_color.primary_green};
  }
`;

export const FixedCircleButtonUI = {
  ButtonItem,
  PlusButton,
  ChatButton,
} as const;
