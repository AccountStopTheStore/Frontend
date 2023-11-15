import {
  ApplicationHeight,
  HeaderHeight,
  NavigationItemsHeight,
} from "@/src/assets/height";
import styled from "@emotion/styled";

const mapHeight = ApplicationHeight - (HeaderHeight + NavigationItemsHeight);

const MapContainer = styled.div`
  width: inherit;
  height: calc(${mapHeight}px);
`;

export const MapUI = { MapContainer } as const;
