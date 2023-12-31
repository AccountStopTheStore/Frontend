import styled from "@emotion/styled";
import { theme } from "@/src/assets/theme";

const Container = styled.div`
  width: 100%;
  background-color: ${theme.font_color.gray2};
  position: absolute;
  left: 0;
  z-index: 1;
`;

const CategoryHeader = styled.div`
  height: 50px;
  background-color: ${theme.font_color.black};
  color: ${theme.font_color.white};
  padding-left: 20px;
  padding-right: 20px;

  display: fles;
  justify-content: space-between;
  align-items: center;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background-color: ${theme.font_color.white};
`;

export const SeperatedCategoryUI = {
  Container,
  CategoryHeader,
  GridContainer,
} as const;
