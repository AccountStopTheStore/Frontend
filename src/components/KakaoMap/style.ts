import {
  ApplicationHeight,
  HeaderHeight,
  NavigationItemsHeight,
} from "@/src/assets/height";
import { theme } from "@/src/assets/theme";
import styled from "@emotion/styled";

const mapHeight = ApplicationHeight - (HeaderHeight + NavigationItemsHeight);

const MapContainer = styled.div`
  width: inherit;
  height: calc(${mapHeight}px);
`;

const BackToCenterButton = styled.button`
  position: absolute;
  right: 3px;
  top: 200px;
  z-index: 2;
  width: 32px;
  height: 32px;
  background-color: ${theme.font_color.white};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px;
  border-radius: 3px;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const MapUI = { MapContainer, BackToCenterButton } as const;
