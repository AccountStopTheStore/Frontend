import styled from "@emotion/styled";
import { theme } from "../../../assets/theme";
// import { BudgetAccountBarGraphData } from "./index";

const totalLength = 252;
const currentLength = totalLength * (120000 / 150000);
const isOver = currentLength >= totalLength;

const BudgetAccountBarGraphContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
const TotalBudget = styled.div`
  ${theme.font_style.regular_medium};

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
const BarGraphContainer = styled.div`
  ${theme.font_style.regular_medium};
`;
const BarGraph = styled.div``;
const LengthContainer = styled.div`
  display: flex;

  position: relative;
`;

const TodayPlace = styled.div`
  width: 53px;
  height: 30px;
  ${theme.font_style.regular_small};
  background-color: ${theme.font_color.gray3};
  color: ${theme.font_color.white};
  ${theme.border_radius};
  text-align: center;
  line-height: 30px;

  margin-bottom: 10px;

  position: relative;
  :before {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);

    border-width: 10px 10px 0;
    border-style: solid;
    border-color: ${theme.font_color.gray3} transparent transparent transparent;
  }
  :after {
    content: "";
    height: 30px;
    border: 1px solid ${theme.font_color.white};

    position: absolute;
    bottom: -40px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  }
`;
const TotalLength = styled.div`
  width: ${totalLength}px;
  height: 30px;
  background-color: ${theme.font_color.gray1};

  ${theme.border_radius};
`;
const CurrentLength = styled.div`
  width: calc(${isOver ? totalLength : currentLength}px);
  height: 30px;
  background-color: ${isOver
    ? theme.font_color.primary_red
    : theme.font_color.primary_blue};

  ${theme.border_radius};

  position: absolute;
`;
const DepositPercent = styled.div`
  line-height: 30px;

  position: absolute;
  right: 10px;
`;

const DepositBalanceContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BudgetAccountBarGraphUI = {
  BudgetAccountBarGraphContainer,
  TotalBudget,
  BarGraphContainer,
  BarGraph,
  LengthContainer,
  TotalLength,
  TodayPlace,
  CurrentLength,
  DepositPercent,
  DepositBalanceContainer,
};
