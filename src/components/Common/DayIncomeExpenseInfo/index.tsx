import { theme } from "../../../assets/theme";
import { AccountsData } from "../DayIncomeExpenseInfos";
import { DayIncomeExpenseInfoUI } from "./style";
import { ChangeNumberForAccounting, ChangeTime } from "@/src/assets/util";

interface DayIncomeExpenseInfoProps {
  onClick: (item: AccountsData) => void;
  item: AccountsData;
}

function DayIncomeExpenseInfo({ onClick, item }: DayIncomeExpenseInfoProps) {
  return (
    <li>
      <DayIncomeExpenseInfoUI.DayIncomeExpenseInfoButton
        variant="text"
        onClick={() => onClick(item)}>
        <DayIncomeExpenseInfoUI.ContentContainer>
          <div>{item.categoryName}</div>
          <div>
            <div>{item.transactionDetail}</div>
            <div>
              <span>{ChangeTime(item.createdAt)}</span>
              <span>{item.assetType}</span>
            </div>
          </div>
          <div
            style={
              item.transactionType === "수입" ? incomeStyle : expenseStyle
            }>
            {ChangeNumberForAccounting(item.amount)}
          </div>
        </DayIncomeExpenseInfoUI.ContentContainer>
      </DayIncomeExpenseInfoUI.DayIncomeExpenseInfoButton>
    </li>
  );
}

// 수입 지출 조건에 따른 스타일 적용
const incomeStyle = {
  color: `${theme.font_color.primary_blue}`,
  fontWeight: 700,
  fontSize: "13px",
};
const expenseStyle = {
  color: `${theme.font_color.primary_red}`,
  fontWeight: 700,
  fontSize: "13px",
};

export default DayIncomeExpenseInfo;
