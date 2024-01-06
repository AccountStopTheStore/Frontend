import styled from "@emotion/styled";

const ContainerUl = styled.ul`
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const Nothing = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, 50%);
  display: flex;
  justify-content: center;
  align-itmes: center;
  font-size: 13px;
`;

export const DayIncomeExpenseInfosUI = { ContainerUl, Nothing } as const;
