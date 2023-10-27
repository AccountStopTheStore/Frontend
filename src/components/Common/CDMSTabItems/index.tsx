import { useState } from "react";
import { CDMSTabItemsUI } from "./style";
import CDMSTabItem from "../CDMSTabItem";

export interface tabButtonsType {
  tabName: string;
  active: boolean;
}

function CDMSTabItems() {
  const [tabButtons, setTabButtons] = useState<tabButtonsType[]>([
    {
      tabName: "달력",
      active: true,
    },
    {
      tabName: "일일",
      active: false,
    },
    {
      tabName: "월별",
      active: false,
    },
    {
      tabName: "결산",
      active: false,
    },
  ]);

  const eventHandler = (item: tabButtonsType) => {
    console.log(item);
    /** tabButtons에 활성화 버튼 변경하기 */
    const updatedTabButtons = tabButtons.map((tabItem) => {
      // 클릭한 항목만 active를 true, 나머지는 false로 설정
      return {
        ...tabItem,
        active: tabItem.tabName === item.tabName,
      };
    });
    setTabButtons(updatedTabButtons);

    /** TODO: middle section에 영역이 바뀌도록 설정하기 */
    // 1. 달력
    // 2. 일일
    // 3. 월별
    // 4. 결산
  };
  return (
    <CDMSTabItemsUI.UnorderedListContainer>
      {tabButtons.map((item) => (
        <CDMSTabItem
          key={item.tabName}
          onClick={() => eventHandler(item)}
          item={item}
        />
        // <li key={item.tabName}>
        //   <button onClick={() => eventHandler(item)}>{item.tabName}</button>
        // </li>
      ))}
    </CDMSTabItemsUI.UnorderedListContainer>
  );
}

export default CDMSTabItems;
