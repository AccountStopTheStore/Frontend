import { useRecoilState } from "recoil";
import DayIncomeExpenseInfo from "../DayIncomeExpenseInfo";
import { searchResultDataAtom } from "@/src/hooks/recoil/searchResultData";
import { searchKeywordClickedState } from "@/src/hooks/recoil/searchKeywordClickedState";
import { GetSearchItem } from "@/src/@types/models/getSearch";
import { DayIncomeExpenseInfosUI } from "./style";

export interface AccountsData {
  accountId: number;
  address: string;
  amount: number;
  assetName: string;
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
      assetName: "현금",
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
      assetName: "현금",
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

  const [searchResultData] = useRecoilState(searchResultDataAtom);
  const [searchKeywordClicked] = useRecoilState(searchKeywordClickedState);

  const eventHandler = (item: AccountsData | GetSearchItem) => {
    console.log("item: ", item);
  };

  return (
    <DayIncomeExpenseInfosUI.ContainerUl>
      {searchKeywordClicked && searchResultData.length > 0 ? (
        searchResultData.map(item => (
          <DayIncomeExpenseInfo
            key={item.accountId}
            onClick={() => eventHandler(item)}
            item={item}
          />
        ))
      ) : searchKeywordClicked && searchResultData.length === 0 ? (
        <DayIncomeExpenseInfosUI.Nothing>
          가계부 기록이 없습니다.
        </DayIncomeExpenseInfosUI.Nothing>
      ) : exampleAccounts === undefined ? (
        <div>가계부 기록이 없습니다.!</div>
      ) : (
        exampleAccounts.map(item => (
          <DayIncomeExpenseInfo
            key={item.accountId}
            onClick={() => eventHandler(item)}
            item={item}
          />
        ))
      )}
    </DayIncomeExpenseInfosUI.ContainerUl>
  );
}

export default DayIncomeExpenseInfos;
