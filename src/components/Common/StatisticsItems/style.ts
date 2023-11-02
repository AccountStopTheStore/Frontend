import styled from "@emotion/styled";
import { theme } from "../../../assets/theme";

const ItemsContainer = styled.ul`
  width: 100%;
  border-top: 1px solid ${theme.font_color.gray2};
  border-bottom: 1px solid ${theme.font_color.gray2};
`;

export const StatisticsItemsUI = {
  ItemsContainer,
} as const;
