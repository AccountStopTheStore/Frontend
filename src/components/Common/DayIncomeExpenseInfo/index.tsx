import { Button } from "@mui/material";
import { theme } from "../../../assets/theme";
import { AccountsData } from "../DayIncomeExpenseInfos";
import { DayIncomeExpenseInfoUI } from "./style";

interface DayIncomeExpenseInfoProps {
  onClick: (item: AccountsData) => void;
  item: AccountsData;
}

function DayIncomeExpenseInfo({ onClick, item }: DayIncomeExpenseInfoProps) {
  /** 날짜 및 시간 데이터 '오전/오후 00:00' 형태로 변경 */
  // 1. Date 객체로 변환
  const date = new Date(item.createdAt);
  // 2. 시간 형태 변경
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "오후" : "오전";
  const formattedHours = hours % 12 || 12; // 12시간 형식으로 변경
  // 3. 최종 formattedTime 생성
  const formattedTime = `${ampm} ${String(formattedHours).padStart(
    2,
    "0"
  )}:${String(minutes).padStart(2, "0")}`;

  return (
    <li>
      <Button
        variant="text"
        style={{
          width: "100%",
          borderBottom: `1px solid ${theme.font_color.gray2}`,
          padding: "6px 20px",
          color: `${theme.font_color.black}`,
          fontWeight: "300",
          fontSize: "13px",
        }}
        onClick={() => onClick(item)}
      >
        <DayIncomeExpenseInfoUI.ContentContainer>
          <div>{item.categoryName}</div>
          <div>
            <div>{item.transactionDetail}</div>
            <div>
              <span>{formattedTime}</span>
              <span>{item.assetType}</span>
            </div>
          </div>
          <div
            style={item.transactionType === "수입" ? incomeStyle : expenseStyle}
          >
            {item.amount}원
          </div>
        </DayIncomeExpenseInfoUI.ContentContainer>
      </Button>
    </li>
  );
}

// 수입 지출 조건에 따른 스타일 적용
const incomeStyle = {
  color: `${theme.font_color.primary_blue}`,
};
const expenseStyle = {
  color: `${theme.font_color.primary_red}`,
};

export default DayIncomeExpenseInfo;
