import { SettingListUI } from "./style";
import BlackWriting from "@/public/icon/BlackWriting.png";
import TrashCan from "@/public/icon/TrashCan.png";

function SettingList() {
  return (
    <SettingListUI.SettingContainer>
      {/* <SettingListUI.SettingTitle>관리</SettingListUI.SettingTitle>
      <ul>
        <SettingListUI.SettingItem>
          <SettingListUI.SettingButton>자산 관리</SettingListUI.SettingButton>
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          <SettingListUI.SettingButton>
            수입 카테고리 관리
          </SettingListUI.SettingButton>
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          <SettingListUI.SettingButton>
            지출 카테고리 관리
          </SettingListUI.SettingButton>
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          <SettingListUI.SettingButton>예산 관리</SettingListUI.SettingButton>
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          <SettingListUI.SettingButton>반복 관리</SettingListUI.SettingButton>
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          <SettingListUI.SettingButton>
            비밀번호 변경
          </SettingListUI.SettingButton>
        </SettingListUI.SettingItem>
      </ul> */}
      {/* <SettingListUI.SettingTitle>
        <span>현금</span>
        <span>10000원</span>
      </SettingListUI.SettingTitle>
      <ul>
        <SettingListUI.SettingItem>
          <SettingListUI.SettingButton>
            <span>현금</span>
            <span>10000원</span>
          </SettingListUI.SettingButton>
        </SettingListUI.SettingItem>
      </ul>
      <SettingListUI.SettingTitle>
        <span>은행</span>
        <span>10000원</span>
      </SettingListUI.SettingTitle>
      <ul>
        <SettingListUI.SettingItem>
          <SettingListUI.SettingButton>
            <span>국민은행</span>
            <span>10000원</span>
          </SettingListUI.SettingButton>
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          <SettingListUI.SettingButton>
            <span>신한은행</span>
            <span>10000원</span>
          </SettingListUI.SettingButton>
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          <SettingListUI.SettingButton>
            <span>우리은행</span>
            <span>10000원</span>
          </SettingListUI.SettingButton>
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          <SettingListUI.SettingButton>
            <span>하나은행</span>
            <span>10000원</span>
          </SettingListUI.SettingButton>
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          <SettingListUI.SettingButton>
            <span>기업은행</span>
            <span>10000원</span>
          </SettingListUI.SettingButton>
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          <SettingListUI.SettingButton>
            <span>농협은행</span>
            <span>10000원</span>
          </SettingListUI.SettingButton>
        </SettingListUI.SettingItem>
      </ul>
      <SettingListUI.SettingTitle>
        <span>카드</span>
        <span>10000원</span>
      </SettingListUI.SettingTitle>
      <ul>
        <SettingListUI.SettingItem>
          <SettingListUI.SettingButton>
            <span>신한카드</span>
            <span>10000원</span>
          </SettingListUI.SettingButton>
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          <SettingListUI.SettingButton>
            <span>현대카드</span>
            <span>10000원</span>
          </SettingListUI.SettingButton>
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          <SettingListUI.SettingButton>
            <span>삼성카드</span>
            <span>10000원</span>
          </SettingListUI.SettingButton>
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          <SettingListUI.SettingButton>
            <span>KB국민카드</span>
            <span>10000원</span>
          </SettingListUI.SettingButton>
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          <SettingListUI.SettingButton>
            <span>NH농협카드</span>
            <span>10000원</span>
          </SettingListUI.SettingButton>
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          <SettingListUI.SettingButton>
            <span>우리카드</span>
            <span>10000원</span>
          </SettingListUI.SettingButton>
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          <SettingListUI.SettingButton>
            <span>롯데카드</span>
            <span>10000원</span>
          </SettingListUI.SettingButton>
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          <SettingListUI.SettingButton>
            <span>비씨카드</span>
            <span>10000원</span>
          </SettingListUI.SettingButton>
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          <SettingListUI.SettingButton>
            <span>하나카드</span>
            <span>10000원</span>
          </SettingListUI.SettingButton>
        </SettingListUI.SettingItem>
      </ul> */}
      {/* <SettingListUI.SettingTitle>
        <span>수입 카테고리</span>
        <span></span>
      </SettingListUI.SettingTitle>
      <ul>
        <SettingListUI.SettingItem>
          <SettingListUI.SettingButton>
            <span>월급</span>
            <span>
              <img src={BlackWriting} alt="BlackWritingPNG" />
              <img src={TrashCan} alt="TrashCanPNG" />
            </span>
          </SettingListUI.SettingButton>
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          <SettingListUI.SettingButton>
            <span>부수입</span>
            <span>
              <img src={BlackWriting} alt="BlackWritingPNG" />
              <img src={TrashCan} alt="TrashCanPNG" />
            </span>
          </SettingListUI.SettingButton>
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          <SettingListUI.SettingButton>
            <span>용돈</span>
            <span>
              <img src={BlackWriting} alt="BlackWritingPNG" />
              <img src={TrashCan} alt="TrashCanPNG" />
            </span>
          </SettingListUI.SettingButton>
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          <SettingListUI.SettingButton>
            <span>상여</span>
            <span>
              <img src={BlackWriting} alt="BlackWritingPNG" />
              <img src={TrashCan} alt="TrashCanPNG" />
            </span>
          </SettingListUI.SettingButton>
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          <SettingListUI.SettingButton>
            <span>금융소득</span>
            <span>
              <img src={BlackWriting} alt="BlackWritingPNG" />
              <img src={TrashCan} alt="TrashCanPNG" />
            </span>
          </SettingListUI.SettingButton>
        </SettingListUI.SettingItem>
      </ul> */}
      {/* <SettingListUI.SettingTitle>
        <span>지출 카테고리</span>
        <span></span>
      </SettingListUI.SettingTitle>
      <ul>
        <SettingListUI.SettingItem>
          <SettingListUI.SettingButton>
            <span>가전/가구</span>
            <span>
              <img src={BlackWriting} alt="BlackWritingPNG" />
              <img src={TrashCan} alt="TrashCanPNG" />
            </span>
          </SettingListUI.SettingButton>
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          <SettingListUI.SettingButton>
            <span>가정생활/서비스</span>
            <span>
              <img src={BlackWriting} alt="BlackWritingPNG" />
              <img src={TrashCan} alt="TrashCanPNG" />
            </span>
          </SettingListUI.SettingButton>
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          <SettingListUI.SettingButton>
            <span>교육/학원</span>
            <span>
              <img src={BlackWriting} alt="BlackWritingPNG" />
              <img src={TrashCan} alt="TrashCanPNG" />
            </span>
          </SettingListUI.SettingButton>
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          <SettingListUI.SettingButton>
            <span>미용</span>
            <span>
              <img src={BlackWriting} alt="BlackWritingPNG" />
              <img src={TrashCan} alt="TrashCanPNG" />
            </span>
          </SettingListUI.SettingButton>
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          <SettingListUI.SettingButton>
            <span>스포츠/문화/레저</span>
            <span>
              <img src={BlackWriting} alt="BlackWritingPNG" />
              <img src={TrashCan} alt="TrashCanPNG" />
            </span>
          </SettingListUI.SettingButton>
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          <SettingListUI.SettingButton>
            <span>여행/교통</span>
            <span>
              <img src={BlackWriting} alt="BlackWritingPNG" />
              <img src={TrashCan} alt="TrashCanPNG" />
            </span>
          </SettingListUI.SettingButton>
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          <SettingListUI.SettingButton>
            <span>요식/유흥</span>
            <span>
              <img src={BlackWriting} alt="BlackWritingPNG" />
              <img src={TrashCan} alt="TrashCanPNG" />
            </span>
          </SettingListUI.SettingButton>
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          <SettingListUI.SettingButton>
            <span>유통</span>
            <span>
              <img src={BlackWriting} alt="BlackWritingPNG" />
              <img src={TrashCan} alt="TrashCanPNG" />
            </span>
          </SettingListUI.SettingButton>
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          <SettingListUI.SettingButton>
            <span>음/식료품</span>
            <span>
              <img src={BlackWriting} alt="BlackWritingPNG" />
              <img src={TrashCan} alt="TrashCanPNG" />
            </span>
          </SettingListUI.SettingButton>
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          <SettingListUI.SettingButton>
            <span>의료</span>
            <span>
              <img src={BlackWriting} alt="BlackWritingPNG" />
              <img src={TrashCan} alt="TrashCanPNG" />
            </span>
          </SettingListUI.SettingButton>
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          <SettingListUI.SettingButton>
            <span>의류/잡화</span>
            <span>
              <img src={BlackWriting} alt="BlackWritingPNG" />
              <img src={TrashCan} alt="TrashCanPNG" />
            </span>
          </SettingListUI.SettingButton>
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          <SettingListUI.SettingButton>
            <span>자동차</span>
            <span>
              <img src={BlackWriting} alt="BlackWritingPNG" />
              <img src={TrashCan} alt="TrashCanPNG" />
            </span>
          </SettingListUI.SettingButton>
        </SettingListUI.SettingItem>
        <SettingListUI.SettingItem>
          <SettingListUI.SettingButton>
            <span>전자상거래</span>
            <span>
              <img src={BlackWriting} alt="BlackWritingPNG" />
              <img src={TrashCan} alt="TrashCanPNG" />
            </span>
          </SettingListUI.SettingButton>
        </SettingListUI.SettingItem>
      </ul> */}
    </SettingListUI.SettingContainer>
  );
}

export default SettingList;
