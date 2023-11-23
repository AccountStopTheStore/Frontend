import { RecordInfosUI } from "./style";
import DayIncomeExpenseInfo from "../Common/DayIncomeExpenseInfo";
import { GetNearbyAccountBooks } from "@/src/@types/models/getNearbyAccountBooks";
import { useRecoilValue } from "recoil";
import { clickedMarkerDataAtom } from "@/src/hooks/recoil/clickedMarkerData";

interface RecordInfosProps {
  isVisible: boolean;
}

function RecordInfos({ isVisible }: RecordInfosProps) {
  const clickedMarkerData = useRecoilValue(clickedMarkerDataAtom);

  const eventHandler = (item: GetNearbyAccountBooks) => {
    console.log("item: ", item);
  };

  return (
    <>
      {isVisible && (
        <RecordInfosUI.Container>
          <RecordInfosUI.Address>
            {clickedMarkerData.length > 0
              ? clickedMarkerData[0].address
              : "주소 없음"}
          </RecordInfosUI.Address>
          <RecordInfosUI.ListContainerUl>
            {clickedMarkerData.map(item => (
              <DayIncomeExpenseInfo
                key={item.accountId}
                onClick={() => eventHandler(item)}
                item={item}
              />
            ))}
          </RecordInfosUI.ListContainerUl>
        </RecordInfosUI.Container>
      )}
    </>
  );
}

export default RecordInfos;
