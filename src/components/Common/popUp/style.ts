import styled from "@emotion/styled";
import { theme } from "../../../assets/theme";

const PopUpContainer = styled.div`
  width: 350px;
  border: 1px solid ${theme.font_color.gray2};
  background-color: ${theme.font_color.white};
  margin: 0 auto;
`;

const Title = styled.div`
  height: 70px;
  ${theme.font_style.bold_large}
  border-bottom: 1px solid ${theme.font_color.gray2};
  padding-left: 20px;
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  width: inherit;
  height: 50px;
  padding-left: 20px;
  line-height: 50px;
  ${theme.font_style.regular_medium}
  &:not(:last-of-type) {
    border-bottom: 1px solid ${theme.font_color.gray2};
  }
`;

export const PopUpUI = { PopUpContainer, Title, Item } as const;
