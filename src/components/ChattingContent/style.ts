import { theme } from "@/src/assets/theme";
import styled from "@emotion/styled";

const OthersItem = styled.li`
  padding: 5px 20px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  > div:last-of-type {
    width: 175px;
    background-color: ${theme.font_color.white};
    ${theme.border_radius};
    margin-left: 10px;
  }
`;

const MyItem = styled.li`
  padding: 5px 20px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  > div:first-of-type {
    width: 175px;
    background-color: ${theme.font_color.white};
    ${theme.border_radius};
    margin-right: 10px;
  }
`;

const EnterExitItem = styled.li`
  display: flex;
  justify-content: center;

  padding: 5px 0;
  > span {
    display: inline-block;
    background-color: ${theme.font_color.gray4};
    color: ${theme.font_color.white};
    padding: 0 20px;
    border-radius: 10px;
  }
`;

export const ChattingContentUI = {
  OthersItem,
  MyItem,
  EnterExitItem,
};
