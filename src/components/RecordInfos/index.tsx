import DayIncomeExpenseInfo from "../Common/DayIncomeExpenseInfo";
import { AccountsData } from "../Common/DayIncomeExpenseInfos";
import { RecordInfosUI } from "./style";

export interface DataType {
  data: AccountsData[];
}

function RecordInfos({ data }: DataType) {
  const exampleAccounts = [
    {
      accountId: 1,
      address: "서울특별시 은평구 은평터널로 150",
      categoryName: "간식",
      assetType: "현금",
      amount: 2000000,
      transactionType: "지출",
      transactionDetail: "감자칩, 서신초등학교",
      memo: "맛있어요!",
      imageIds: [1, 2, 3],
      recurringType: "",
      createdAt: "2023-11-17 11:00:00",
      updatedAt: "",
      latitude: 37.5922940508,
      longitude: 126.90738231,
      installment: false,
    },
    {
      accountId: 2,
      address: "서울특별시 은평구 증산로 403-1",
      categoryName: "간식",
      assetType: "현금",
      amount: 1500,
      transactionType: "수입",
      transactionDetail: "몽소",
      memo: "맛있어요!",
      imageIds: [1, 2],
      recurringType: "",
      createdAt: "2023-11-17 13:00:00",
      updatedAt: "",
      latitude: 37.592355469552,
      longitude: 126.913642682037,
      installment: false,
    },
  ];

  const eventHandler = (item: AccountsData) => {
    console.log("item: ", item);
  };

  return (
    <RecordInfosUI.Container style={{ display: "none" }}>
      <RecordInfosUI.Header>
        <RecordInfosUI.PlaceName>업체 상호명</RecordInfosUI.PlaceName>
        <RecordInfosUI.Address>주소</RecordInfosUI.Address>
      </RecordInfosUI.Header>
      <RecordInfosUI.ListContainerUl>
        {data.map(item => (
          <DayIncomeExpenseInfo
            key={item.accountId}
            onClick={() => eventHandler(item)}
            item={item}
          />
        ))}
      </RecordInfosUI.ListContainerUl>
    </RecordInfosUI.Container>
  );
}

export default RecordInfos;
