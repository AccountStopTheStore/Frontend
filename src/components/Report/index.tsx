import { ChangeMonthPeriod } from "@/src/assets/util";
import BudgetAccountBarGraph from "../Common/BudgetAccountBarGraph";
import { ReportUI } from "./style";

function Report() {
  const exampleObject = {
    startAt: "2023-10-23T12:00:00",
    endAt: "2023-11-17T12:00:00",
  };

  /** 가계부 조회 */
  const data = [
    {
      accountId: 1,
      categoryName: "간식",
      assetName: "지갑현금",
      amount: 1500,
      transactionType: "지출",
      transactionDetail: "편의점",
      transactedAt: "2023-10-23T12:00:00",
      address: "서울 동작구 노량진로14가길 11",
      memo: "맛있어요.",
      recurringType: "",
      createdAt: "2023-11-17T12:00:00",
      updatedAt: "",
    },
    {
      accountId: 2,
      categoryName: "비정기수입",
      assetName: "지갑현금",
      amount: 1000,
      transactionType: "수입",
      transactionDetail: "용돈",
      transactedAt: "2023-10-23T12:00:00",
      memo: "용돈입니다.",
      recurringType: "",
      createdAt: "2023-01-01T12:00:00",
      updatedAt: "2023-01-02T12:00:00",
    },
  ];

  let deposit = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].transactionType === "지출") {
      deposit = deposit - data[i].amount;
    } else if (data[i].transactionType === "수입") {
      deposit = deposit + data[i].amount;
    }
  }

  /** 예산 조회 */
  const budget = {
    month: 5,
    budget: 10000,
  };

  return (
    <ReportUI.Section>
      <ReportUI.BudgetItem>
        <div>
          <span>예산</span>
          <ReportUI.SettingBudgetButton>예산 설정</ReportUI.SettingBudgetButton>
        </div>
        <BudgetAccountBarGraph
          name={"전체 예산"}
          budget={budget.budget}
          deposit={deposit}
        />
      </ReportUI.BudgetItem>
      <ReportUI.AssetContainer>
        <div>
          <span>자산</span>
          <div>{ChangeMonthPeriod(exampleObject.startAt)}</div>
        </div>
        <ReportUI.AssetList>
          <li>
            <span>전월 대비 지출 (당월/전월)</span>
            <span>100%</span>
          </li>
          <li>
            <span>지출 (현금)</span>
            <span>110,000원</span>
          </li>
          <li>
            <span>지출 (은행)</span>
            <span>0원</span>
          </li>
          <li>
            <span>저금</span>
            <span>1000원</span>
          </li>
        </ReportUI.AssetList>
      </ReportUI.AssetContainer>
    </ReportUI.Section>
  );
}

export default Report;
