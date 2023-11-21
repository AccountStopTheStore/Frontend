import DayIncomeExpenseInfo from "../DayIncomeExpenseInfo";

export interface AccountsData {
  accountId: number;
  address: string;
  amount: number;
  assetType: string;
  categoryName: string;
  createdAt: string;
  imageIds: number[];
  installment: boolean;
  latitude: number;
  longitude: number;
  memo: string;
  recurringType: string;
  transactionDetail: string;
  transactionType: string;
  updatedAt: string;
}

function DayIncomeExpenseInfos() {
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
    <ul>
      {exampleAccounts === undefined ? (
        <div>Nothing!</div>
      ) : (
        exampleAccounts.map(item => (
          <DayIncomeExpenseInfo
            key={item.accountId}
            onClick={() => eventHandler(item)}
            item={item}
          />
        ))
      )}
    </ul>
  );
}

export default DayIncomeExpenseInfos;
