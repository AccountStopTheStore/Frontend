import { HeaderUI } from "./style";
import backSVG from "/icon/Back.svg";
import searchkSVG from "/icon/Search.svg";
import moreSVG from "/icon/More.svg";
import filterSVG from "/icon/Filter.svg";

interface HeaderProps {
  pageName: string;
}

function Header({ pageName }: HeaderProps) {
  /** TODO: 카테고리 페이지에 따라 버튼 표시되게 설정하기 */
  // searchSVG: 가계부
  // backSVG: 검색, 수입 및 지출 입력, 기록지, 저축 챌린지,
  // filterSVG: 검색
  // moreSVG: 저축 챌린지, 더보기

  return (
    <HeaderUI.HeaderContainer>
      <HeaderUI.HeaderWrapper>
        <HeaderUI.LeftBtnWrapper>
          <HeaderUI.Button>
            <img src={searchkSVG} alt="search SVG" />
          </HeaderUI.Button>
          <HeaderUI.Button style={{ display: "none" }}>
            <img src={backSVG} alt="back SVG" />
          </HeaderUI.Button>
        </HeaderUI.LeftBtnWrapper>

        <HeaderUI.PageName>{pageName}</HeaderUI.PageName>

        <HeaderUI.RightBtnWrapper style={{ display: "none" }}>
          <HeaderUI.Button>
            <img src={filterSVG} alt="filter SVG" />
          </HeaderUI.Button>
          <HeaderUI.Button>
            <img src={moreSVG} alt="more SVG" />
          </HeaderUI.Button>
        </HeaderUI.RightBtnWrapper>
      </HeaderUI.HeaderWrapper>
    </HeaderUI.HeaderContainer>
  );
}

export default Header;
