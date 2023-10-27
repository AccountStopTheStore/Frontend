import styled from "@emotion/styled";
import { theme } from "../../../assets/theme";

const UnorderedListContainer = styled.ul`
  width: 100%;
  height: 70px;

  position: absolute;
  bottom: 0;

  display: flex;
  justify-content: space-around;
  align-items: center;

  background: ${theme.font_color.gray2};
`;

export const NavigationItemsUI = {
  UnorderedListContainer,
} as const;
