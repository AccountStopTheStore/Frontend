import { theme } from "../../../assets/theme";
import { tabButtonsType } from "../CDMSTabItems";
import { CDMSTabItemUI } from "./style";

interface CDMSTabItemProps {
  onClick: (item: tabButtonsType) => void;
  item: tabButtonsType;
}

function CDMSTabItem({ onClick, item }: CDMSTabItemProps) {
  return (
    <>
      <CDMSTabItemUI.ItemContainer>
        <CDMSTabItemUI.Button
          onClick={() => onClick(item)}
          style={item.active ? {} : inactiveButtonStyle}
        >
          {item.tabName}
        </CDMSTabItemUI.Button>
        <div style={item.active ? activeStyle : inactiveStyle}></div>
      </CDMSTabItemUI.ItemContainer>
    </>
  );
}

// 조건에 따라 style 변경
const inactiveButtonStyle = {
  opacity: "40%",
};
const activeStyle = {
  width: "100%",
  height: "5px",
  borderBottom: `5px solid ${theme.font_color.primary_green}`,
};
const inactiveStyle = {
  opacity: "0",
};

export default CDMSTabItem;
