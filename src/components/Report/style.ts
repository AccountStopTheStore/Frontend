import { AccountHeight } from "@/src/assets/height";
import { theme } from "@/src/assets/theme";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const Section = styled.section`
  height: calc(${AccountHeight}px);
`;

const BudgetItem = styled.li`
  > div {
    display: flex;
    justify-content: space-between;

    padding: 15px 20px;
    > span {
      ${theme.font_style.bold_large};
    }
  }
  > div:first-of-type {
    align-items: center;
  }
`;

const SettingBudgetButton = styled(Button)`
  background-color: ${theme.font_color.gray1};
  ${theme.border_radius};

  color: ${theme.font_color.gray3};
  ${theme.font_style.regular_medium};
`;
const AssetContainer = styled.div`
  > div:first-of-type {
    display: flex;
    justify-content: space-between;

    margin: 20px;

    > span {
      ${theme.font_style.bold_large};
    }
    > div {
      ${theme.font_style.regular_medium};
      color: ${theme.font_color.gray3};
    }
  }
`;

const AssetList = styled.ul`
  margin: 0 20px;
  border: 1px solid ${theme.font_color.gray2};
  padding: 20px;
  > li {
    display: flex;
    justify-content: space-between;
    ${theme.font_style.regular_medium}

    margin-bottom: 20px;
    > span:first-of-type {
      color: ${theme.font_color.gray3};
    }
  }
  > li:last-of-type {
    margin-bottom: 0;
  }
`;

export const ReportUI = {
  Section,
  BudgetItem,
  SettingBudgetButton,
  AssetContainer,
  AssetList,
};
