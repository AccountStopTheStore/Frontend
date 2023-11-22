import { bottomNavigationType } from "../NavigationItems";
import { NavigationItemUI } from "./style";

interface NavigationItemProps {
  onClick: (item: bottomNavigationType) => void;
  item: bottomNavigationType;
}

function NavigationItem({ onClick, item }: NavigationItemProps) {
  return (
    <NavigationItemUI.ItemContainer>
      <NavigationItemUI.Button
        onClick={() => onClick(item)}
        style={item.active ? {} : { opacity: "40%" }}
      >
        <img src={item.image} alt="account PNG" />
        <br />
        <span>{item.categoryName}</span>
      </NavigationItemUI.Button>
    </NavigationItemUI.ItemContainer>
  );
}

export default NavigationItem;
