import styled from "@emotion/styled";
import { HeaderHeight, NavigationItemsHeight } from "@/src/assets/height";

const searchResutlsHeight = `100% - ${HeaderHeight}px - 80px - ${NavigationItemsHeight}px`;

const Container = styled.div`
  width: 100%;
  height: calc(${searchResutlsHeight});
`;

export const SearchResultsUI = { Container } as const;
