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

const Header = styled.div`
  widht: inherit;
  height: 84px;
  padding: 20px;
  border-bottom: 1px solid ${theme.font_color.gray2};
`;

const PlaceName = styled.div`
  ${theme.font_style.bold_large};
  color: ${theme.font_color.black};
  margin-bottom: 3px;
`;

const Address = styled.span`
  ${theme.font_style.light_small};
  color: ${theme.font_color.gray3};
`;

const ListContainerUl = styled.ul`
  height: calc(${listContainerHeight});
  overflow: auto;
`;

export const RecordInfosUI = {
  Container,
  Header,
  PlaceName,
  Address,
  ListContainerUl,
} as const;
