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
    align-items: center;

    padding: 15px 20px;
    > span {
      ${theme.font_style.bold_large};
    }
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
      color: ${theme.font_color.gray2};
    }
  }
`;

const AssetList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  margin: 0 20px;
  border: 1px solid ${theme.font_color.gray2};
  padding: 20px;
  > li {
    margin-bottom: 20px;
  }
  > li:nth-of-type(7) {
    margin-bottom: 0;
  }
  > li:last-of-type {
    margin-bottom: 0;
  }
  > li:nth-of-type(even) {
    text-align: right;
    color: ${theme.font_color.black};
    ${theme.font_style.regular_medium};
  }
  > li:nth-of-type(odd) {
    color: ${theme.font_color.gray4};
    ${theme.font_style.regular_small};
  }
`;

export const ReportUI = {
  Section,
  BudgetItem,
  SettingBudgetButton,
  AssetContainer,
  AssetList,
};
