import styled from "@emotion/styled";
import { theme } from "../../../assets/theme";
import { NavigationItemsHeight } from "@/src/assets/height";

const Container = styled.div`
  width: 100%;
  position: absolute;
  bottom: ${NavigationItemsHeight}px;
  background-color: ${theme.font_color.white};
  z-index: 5;
`;

const PlaceInfos = styled.div`
  widht: inherit;
  height: 84px;
  padding: 20px;
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

export const RecordInfosUI = {
  Container,
  PlaceInfos,
  PlaceName,
  Address,
} as const;
