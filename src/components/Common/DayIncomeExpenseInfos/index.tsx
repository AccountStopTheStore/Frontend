import DayIncomeExpenseInfo from "../DayIncomeExpenseInfo";

export interface AccountsData {
  accountId: number;
  categoryName: string;
  assetType: string;
  amount: number;
  transactionType: string;
  transactionDetail: string;
  transactedAt: string;
  memo: string;
  imagesId: string[];
  recurringType: string;
  recurringPeriod: string;
  createdAt: string;
  updatedAt: string;
}

interface AccountsMemberData {
  memberId: number;
  accounts?: AccountsData[];
}

function DayIncomeExpenseInfos({ memberId }: AccountsMemberData) {
  console.log(memberId);

  const exampleAccounts = [
    {
      accountId: 1,
      categoryName: "간식",
      assetType: "현금",
      amount: 200000000000000000,
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
    <ul>
      {exampleAccounts === undefined ? (
        <div>Nothing!</div>
      ) : (
        exampleAccounts.map((item) => (
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
