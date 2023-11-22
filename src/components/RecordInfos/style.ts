import styled from "@emotion/styled";
import { theme } from "@/src/assets/theme";
import { NavigationItemsHeight } from "@/src/assets/height";

const listContainerHeight = "64px * 3";

const Container = styled.div`
  width: 100%;
  position: absolute;
  bottom: ${NavigationItemsHeight}px;
  background-color: ${theme.font_color.white};
  border-top: 1px solid ${theme.font_color.gray2};
  z-index: 1;
`;

const Address = styled.div`
  widht: inherit;
  height: 84px;
  padding: 20px;
  border-bottom: 1px solid ${theme.font_color.gray2};
  ${theme.font_style.bold_large};
  color: ${theme.font_color.black};
`;

const ListContainerUl = styled.ul`
  height: calc(${listContainerHeight});
  overflow: auto;
`;

export const RecordInfosUI = {
  Container,
  Address,
  ListContainerUl,
} as const;
