import { RecordInfosUI } from "./style";
import DayIncomeExpenseInfo from "../Common/DayIncomeExpenseInfo";
import { GetNearbyAccountBooks } from "@/src/@types/models/getNearbyAccountBooks";

export interface DataType {
  data: GetNearbyAccountBooks[];
}

function RecordInfos({ data }: DataType) {
  const eventHandler = (item: GetNearbyAccountBooks) => {
    console.log("item: ", item);
  };

  return (
    <RecordInfosUI.Container>
      <RecordInfosUI.Address>주소</RecordInfosUI.Address>
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
