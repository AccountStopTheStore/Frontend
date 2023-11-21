import { PropsWithChildren, useState } from "react";
import DateTopContainer from "../Common/DateTopContainer";
import DayIncomeExpenseInfos from "../Common/DayIncomeExpenseInfos";
import { BottomDateModalUI } from "./style";

function BottomDateModal() {
  return (
    <BottomDateModalUI.Section>
      <BottomDateModalUI.Container>
        <DateTopContainer />
        <DayIncomeExpenseInfos />
      </BottomDateModalUI.Container>
    </BottomDateModalUI.Section>
  );
}

export default BottomDateModal;
