import styled from "@emotion/styled";
import { theme } from "../../../assets/theme";
// import { BudgetAccountBarGraphData } from "./index";

/** TODO: 모든 가계부 Atom 값에서 수입 - 지출 = deposit 계산하기 */
/** TODO: budget - deposit = balance 계산하기 */

const totalLength = 250;
/** TODO: 날짜로 수정 필요 */
const currentDate = totalLength * (16 / 30);
/** TODO: 예산과 입금액으로 수정 필요 */
const currentLength = totalLength * (150000 / 170000);
const isOver = currentDate >= totalLength;
const todayLocation = isOver ? totalLength - 25 : currentDate - 25;

const BudgetAccountBarGraphContainer = styled.div`
  display: flex;
  justify-content: space-around;

  border-bottom: 1px solid ${theme.font_color.gray2};
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
  left: calc(${todayLocation}px);
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
