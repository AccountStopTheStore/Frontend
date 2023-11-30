import styled from "@emotion/styled";
import { theme } from "@/src/assets/theme";

const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  background-color: ${theme.font_color.gray1};
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const YearMonthContainer = styled.div`
  display: flex;
  align-items: center;
  height: 35px;

  img {
    width: 20px;
    height: 20xpx;
  }
`;

const LeftButton = styled.button`
  width: 25px;
  height: 25px;
`;

const YearMonth = styled.button`
  ${theme.font_style.regular_medium};
  color: ${theme.font_color.black};
  margin: 0 15px;
`;

const RightButton = styled.button`
  width: 25px;
  height: 25px;
`;

const YearMonthButton = styled.button`
  display: flex;
  align-items: center;
  width: 66px;
  height: 28px;
  padding: 0 10px;
  ${theme.border_radius};
  border: 1px solid ${theme.font_color.gray3};
  background-color: ${theme.font_color.white};
  color: ${theme.font_color.black};
  ${theme.font_style.regular_small};

  img {
    width: 18px;
    height: 18px;
  }
`;

export const StatisticsHeaderUI = {
  HeaderContainer,
  YearMonthContainer,
  LeftButton,
  YearMonth,
  RightButton,
  YearMonthButton,
} as const;
