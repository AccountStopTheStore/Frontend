import { useState } from "react";
import { CDMSTabItemsUI } from "./style";
import CDMSTabItem from "../CDMSTabItem";
import Calendar from "../Calendar";
import DateAccount from "../../DateAccount";
import MonthAccount from "../../MonthAccount";
import Report from "../../Report";

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

  const eventHandler = async (item: tabButtonsType) => {
    /** tabButtons에 활성화 버튼 변경하기 */
    const updatedTabButtons = tabButtons.map(tabItem => {
      // 클릭한 항목만 active를 true, 나머지는 false로 설정
      return {
        ...tabItem,
        active: tabItem.tabName === item.tabName,
      };
    });
    setTabButtons(updatedTabButtons);
  };
  return (
    <>
      <CDMSTabItemsUI.UnorderedListContainer>
        {tabButtons.map(item => (
          <CDMSTabItem
            key={item.tabName}
            onClick={() => eventHandler(item)}
            item={item}
          />
        ))}
      </CDMSTabItemsUI.UnorderedListContainer>
      {tabButtons[3].active ? (
        <Report />
      ) : tabButtons[2].active ? (
        <MonthAccount />
      ) : tabButtons[1].active ? (
        <DateAccount />
      ) : (
        <Calendar />
      )}
    </>
  );
}

export default CDMSTabItems;
