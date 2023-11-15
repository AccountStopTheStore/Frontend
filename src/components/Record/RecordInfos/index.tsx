import DayIncomeExpenseInfo from "../../Common/DayIncomeExpenseInfo";
import { AccountsData } from "../../Common/DayIncomeExpenseInfos";
import { RecordInfosUI } from "./style";

function RecordInfos() {
  const exampleAccounts = [
    {
      accountId: 1,
      categoryName: "간식",
      assetType: "현금",
      amount: 2000000,
      transactionType: "지출",
      transactionDetail: "감자칩",
      transactedAt: "2023-10-23 10:00:00",
      memo: "맛있어요!",
      imagesId: ["1", "2", "3"],
      recurringType: "",
      recurringPeriod: "",
      createdAt: "2023-11-17 11:00:00",
      updatedAt: "",
    },
    {
      accountId: 2,
      categoryName: "간식",
      assetType: "현금",
      amount: 1500,
      transactionType: "수입",
      transactionDetail: "감자칩",
      transactedAt: "2023-10-23 10:00:00",
      memo: "맛있어요!",
      imagesId: ["1", "2", "3"],
      recurringType: "",
      recurringPeriod: "",
      createdAt: "2023-11-17 13:00:00",
      updatedAt: "",
    },
  ];

  const eventHandler = (item: AccountsData) => {
    console.log("item: ", item);
  };

  return (
    <RecordInfosUI.Container>
      <RecordInfosUI.PlaceInfos>
        <RecordInfosUI.PlaceName>업체 상호명</RecordInfosUI.PlaceName>
        <RecordInfosUI.Address>주소</RecordInfosUI.Address>
      </RecordInfosUI.PlaceInfos>
      <ul>
        {exampleAccounts.map(item => (
          <DayIncomeExpenseInfo
            key={item.accountId}
            onClick={() => eventHandler(item)}
            item={item}
          />
        ))}
      </ul>
    </RecordInfosUI.Container>
  );
}

export default RecordInfos;
