import { theme } from "@/src/assets/theme";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Item = styled.li`
  background-color: ${theme.font_color.white};
`;

const ItemLink = styled(Link)`
  ${theme.font_style.light_medium};
  color: ${theme.font_color.black};
  border-radius: 0;

  padding: 0;
  flex-direction: column;
  width: 100%;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    padding: 15px 20px;
    > span {
      ${theme.font_style.bold_large};
    }
  }
`;

const ChallengePeriod = styled.div``;

export const BarGraphItemUI = {
  Item,
  ItemLink,
  ChallengePeriod,
};
