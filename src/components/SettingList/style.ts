import { Button } from "@mui/material";
import styled from "@emotion/styled";
import { BasicHeight } from "@/src/assets/height";
import { theme } from "@/src/assets/theme";

const SettingContainer = styled.div`
  height: calc(${BasicHeight}px);

  background-color: ${theme.font_color.gray1};

  overflow: scroll;
`;

const SettingTitle = styled.h6`
  ${theme.font_style.bold_medium}

  height: 40px;
  display: flex;
  align-items: center;

  padding: 0 20px;

  display: flex;
  justify-content: space-between;
`;

const SettingItem = styled.li`
  background-color: ${theme.font_color.white};

  border-bottom: 1px solid ${theme.font_color.gray2};
`;
const SettingButton = styled(Button)`
  width: 100%;

  justify-content: flex-start;

  ${theme.font_style.light_medium}
  color: ${theme.font_color.black};
  padding: 6px 20px;

  display: flex;
  justify-content: space-between;
`;

export const SettingListUI = {
  SettingContainer,
  SettingTitle,
  SettingItem,
  SettingButton,
};
