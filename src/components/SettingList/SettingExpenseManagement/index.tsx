import { SettingListUI } from "./style";
import BlackWriting from "@/public/icon/BlackWriting.png";
import TrashCan from "@/public/icon/TrashCan.png";

function SettingExpenseManagement() {
  return (
    <SettingListUI.SettingContainer>
      <SettingListUI.SettingTitle>
        <span>지출 카테고리</span>
        <span></span>
      </SettingListUI.SettingTitle>
      <ul>
        <SettingListUI.SettingItem>
          {/* <SettingListUI.SettingButton> */}
          <span>가전/가구</span>
          <span>
            <img src={BlackWriting} alt="BlackWritingPNG" />
            <img src={TrashCan} alt="TrashCanPNG" />
          </span>
          {/* </SettingListUI.SettingButton> */}
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          {/* <SettingListUI.SettingButton> */}
          <span>가정생활/서비스</span>
          <span>
            <img src={BlackWriting} alt="BlackWritingPNG" />
            <img src={TrashCan} alt="TrashCanPNG" />
          </span>
          {/* </SettingListUI.SettingButton> */}
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          {/* <SettingListUI.SettingButton> */}
          <span>교육/학원</span>
          <span>
            <img src={BlackWriting} alt="BlackWritingPNG" />
            <img src={TrashCan} alt="TrashCanPNG" />
          </span>
          {/* </SettingListUI.SettingButton> */}
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          {/* <SettingListUI.SettingButton> */}
          <span>미용</span>
          <span>
            <img src={BlackWriting} alt="BlackWritingPNG" />
            <img src={TrashCan} alt="TrashCanPNG" />
          </span>
          {/* </SettingListUI.SettingButton> */}
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          {/* <SettingListUI.SettingButton> */}
          <span>스포츠/문화/레저</span>
          <span>
            <img src={BlackWriting} alt="BlackWritingPNG" />
            <img src={TrashCan} alt="TrashCanPNG" />
          </span>
          {/* </SettingListUI.SettingButton> */}
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          {/* <SettingListUI.SettingButton> */}
          <span>여행/교통</span>
          <span>
            <img src={BlackWriting} alt="BlackWritingPNG" />
            <img src={TrashCan} alt="TrashCanPNG" />
          </span>
          {/* </SettingListUI.SettingButton> */}
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          {/* <SettingListUI.SettingButton> */}
          <span>요식/유흥</span>
          <span>
            <img src={BlackWriting} alt="BlackWritingPNG" />
            <img src={TrashCan} alt="TrashCanPNG" />
          </span>
          {/* </SettingListUI.SettingButton> */}
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          {/* <SettingListUI.SettingButton> */}
          <span>유통</span>
          <span>
            <img src={BlackWriting} alt="BlackWritingPNG" />
            <img src={TrashCan} alt="TrashCanPNG" />
          </span>
          {/* </SettingListUI.SettingButton> */}
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          {/* <SettingListUI.SettingButton> */}
          <span>음/식료품</span>
          <span>
            <img src={BlackWriting} alt="BlackWritingPNG" />
            <img src={TrashCan} alt="TrashCanPNG" />
          </span>
          {/* </SettingListUI.SettingButton> */}
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          {/* <SettingListUI.SettingButton> */}
          <span>의료</span>
          <span>
            <img src={BlackWriting} alt="BlackWritingPNG" />
            <img src={TrashCan} alt="TrashCanPNG" />
          </span>
          {/* </SettingListUI.SettingButton> */}
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          {/* <SettingListUI.SettingButton> */}
          <span>의류/잡화</span>
          <span>
            <img src={BlackWriting} alt="BlackWritingPNG" />
            <img src={TrashCan} alt="TrashCanPNG" />
          </span>
          {/* </SettingListUI.SettingButton> */}
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          {/* <SettingListUI.SettingButton> */}
          <span>자동차</span>
          <span>
            <img src={BlackWriting} alt="BlackWritingPNG" />
            <img src={TrashCan} alt="TrashCanPNG" />
          </span>
          {/* </SettingListUI.SettingButton> */}
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          {/* <SettingListUI.SettingButton> */}
          <span>전자상거래</span>
          <span>
            <img src={BlackWriting} alt="BlackWritingPNG" />
            <img src={TrashCan} alt="TrashCanPNG" />
          </span>
          {/* </SettingListUI.SettingButton> */}
        </SettingListUI.SettingItem>
      </ul>
    </SettingListUI.SettingContainer>
  );
}

export default SettingExpenseManagement;
