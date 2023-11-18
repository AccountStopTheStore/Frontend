import AccountPNG from "@/public/icon/Account.png";
import StatsPNG from "@/public/icon/Stats.png";
import WroteMapPNG from "@/public/icon/WroteMap.png";
import ChallengePNG from "@/public/icon/Challenge.png";
import MorePNG from "@/public/icon/More.png";
import { NavigationItemsUI } from "./style";
import { useState } from "react";
import NavigationItem from "../NavigationItem";

export interface bottomNavigationType {
  image: string;
  categoryName: string;
  active: boolean;
}

function NavigationItems() {
  const [bottomNavigation, setBottomNavigation] = useState<
    bottomNavigationType[]
  >([
    {
      image: AccountPNG,
      categoryName: "가계부",
      active: true,
    },
    {
      image: StatsPNG,
      categoryName: "통계",
      active: false,
    },
    {
      image: WroteMapPNG,
      categoryName: "기록지",
      active: false,
    },
    {
      image: ChallengePNG,
      categoryName: "챌린지",
      active: false,
    },
    {
      image: MorePNG,
      categoryName: "더보기",
      active: false,
    },
  ]);

  const eventHandler = (item: bottomNavigationType) => {
    // console.log("item.name : ", item.categoryName);
    /** bottomNavigation에 활성화 버튼 변경하기 */
    const updatedNavigation = bottomNavigation.map((navItem) => {
      // 클릭한 항목만 active를 true로, 나머지는 false로 설정
      return {
        ...navItem,
        active: navItem.categoryName === item.categoryName,
      };
    });
    setBottomNavigation(updatedNavigation);

    /** TODO: middle section에 영역이 바뀌도록 설정하기 */
    // 1. 가계부
    // 2. 통계
    // 3. 기록지
    // 4. 챌린지
    // 5. 더보기
  };

  return (
    <NavigationItemsUI.UnorderedListContainer>
      {bottomNavigation.map((item) => (
        <NavigationItem
          key={item.categoryName}
          onClick={() => eventHandler(item)}
          item={item}
        />
      ))}
    </NavigationItemsUI.UnorderedListContainer>
  );
}

export default NavigationItems;
