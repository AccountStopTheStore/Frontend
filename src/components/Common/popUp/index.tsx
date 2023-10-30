import { PopUpUI } from "./style";

type Mode = "guestCount" | "assetGroup";

interface PopUpProps {
  mode: Mode;
  onclick: (slectedItem: number | string) => void;
}

function PopUp({ mode, onclick }: PopUpProps) {
  const numberOfGuest = [1, 2, 3, 4, 5, 6];
  const assetItems = ["현금", "은행", "카드"];

  const handleItemClick = (item: number | string) => {
    if (typeof item === "number" || typeof item === "string") {
      onclick(item);
    }
  };

  // mode에 따라 초대 인원 수 또는 자산 그룹 표시
  const content =
    mode === "guestCount" ? (
      <ul>
        {numberOfGuest.map(number => (
          <PopUpUI.Item key={number} onClick={() => handleItemClick(number)}>
            {number}
          </PopUpUI.Item>
        ))}
      </ul>
    ) : (
      <ul>
        {assetItems.map((item, index) => (
          <PopUpUI.Item key={index} onClick={() => handleItemClick(item)}>
            {item}
          </PopUpUI.Item>
        ))}
      </ul>
    );

  return (
    <PopUpUI.PopUpContainer>
      <PopUpUI.Title>
        {mode === "guestCount" ? "초대 인원 수" : "자산 그룹"}
      </PopUpUI.Title>
      {content}
    </PopUpUI.PopUpContainer>
  );
}

export default PopUp;
