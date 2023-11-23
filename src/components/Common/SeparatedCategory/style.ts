import styled from "@emotion/styled";
import { theme } from "@/src/assets/theme";
import { recordAccountBookHeight } from "@/src/assets/height";

const Container = styled.div`
  width: 100%;
  height: ${recordAccountBookHeight}px;
  background-color: rgba(0, 0, 0, 0.5);

  position: absolute;
  top: 77px;
  left: 0;
  z-index: 2;

  > div {
    width: 100%;
    height: 450px;
    background-color: ${theme.font_color.gray1};
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 3;
  }
`;

const CategoryHeader = styled.div`
  height: 50px;
  background-color: ${theme.font_color.black};
  color: ${theme.font_color.white};
  padding-left: 20px;
  padding-right: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: ${theme.font_color.white};
`;

export const SeparatedCategoryUI = {
  Container,
  CategoryHeader,
  GridContainer,
} as const;
