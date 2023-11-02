import styled from "@emotion/styled";
import { theme } from "../../../assets/theme";

const ItemContainer = styled.li`
  width: inherit;
  height: 60px;
  background-color: ${theme.font_color.white};
  color: ${theme.font_color.black};
  ${theme.font_style.regular_small}

  :not(:last-of-type) {
    border-bottom: 1px solid ${theme.font_color.gray2};
  }

  display: flex;
  align-items: center;
`;

const ItemWrapper = styled.div`
  width: 100%;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
`;

/** TODO : 수입, 지출 각 파이에 표시되는 색으로 PercentageBox 색 지정 하기 */
const PercentageBox = styled.div`
  width: 40px;
  height: 24px;
  ${theme.border_radius}
  background-color: blue;
  color: ${theme.font_color.white};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Percentage = styled.div``;

const CategoryName = styled.span`
  display: flex;
  justify-content: center;
`;

const Amount = styled.span`
  margin-left: auto;
`;

export const StatisticsItemUI = {
  ItemContainer,
  ItemWrapper,
  PercentageBox,
  Percentage,
  CategoryName,
  Amount,
} as const;
