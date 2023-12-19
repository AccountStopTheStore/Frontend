import { Button } from "@mui/material";
import styled from "@emotion/styled";
import { ApplicationHeight, BasicHeight } from "@/src/assets/height";
import { theme } from "@/src/assets/theme";

const SettingContainer = styled.div`
  height: calc(${BasicHeight}px);

  background-color: ${theme.font_color.gray1};

  overflow: scroll;

  display: flex;
  flex-direction: column;
`;

const SettingTitle = styled.h6`
  ${theme.font_style.bold_medium};
  display: flex;
  align-items: center;

  padding: 6px 20px;

  display: flex;
  justify-content: space-between;
`;

const SettingItem = styled.li`
  background-color: ${theme.font_color.white};

  border-bottom: 1px solid ${theme.font_color.gray2};
`;
const SettingButton = styled(Button)`
  width: 100%;

  ${theme.font_style.light_medium}
  color: ${theme.font_color.black};
  padding: 6px 20px;

  display: flex;
  justify-content: space-between;

  > input {
    border: none;
  }
  > input:active {
    border-bottom: 1px solid ${theme.font_color.primary_green};
  }
`;

const SettingLogoutContainer = styled.div`
  height: 50px;

  display: flex;
  justify-content: center;

  > button {
    color: ${theme.font_color.gray3};
    text-decoration: underline;
  }
  > button:first-of-type {
    margin-right: 10px;
  }

  position: relative;
  > button:first-of-type::after {
    content: "";
    height: 20px;
    border: 1px solid ${theme.font_color.gray3};

    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const ModalBackgroundContainer = styled.div`
  width: 100%;
  height: calc(${ApplicationHeight}px);
  background-color: rgba(134, 142, 150, 0.7);

  position: absolute;
  top: 0;
`;

const ModalContainer = styled.div`
  width: 350px;
  height: 350px;
  border-radius: 10px;
  background-color: ${theme.font_color.white};

  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  > div:first-of-type {
    margin-top: 50px;
  }
  > h6 {
    height: 69px;
    ${theme.font_style.bold_large};
    display: flex;
    align-items: center;
    padding-left: 20px;
  }
  > ul li {
    border-bottom: 1px solid ${theme.font_color.gray2};
  }
`;

export const SettingListUI = {
  SettingContainer,
  SettingTitle,
  SettingItem,
  SettingButton,
  SettingLogoutContainer,
  ModalBackgroundContainer,
  ModalContainer,
};
