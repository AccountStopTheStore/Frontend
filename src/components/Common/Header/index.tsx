import { HeaderUI } from "./style";
import backSVG from "/icon/Back.svg";
import searchkSVG from "/icon/Search.svg";
import moreSVG from "/icon/More.svg";
import filterSVG from "/icon/Filter.svg";

interface HeaderProps {
  pageName: string;
  isBackButton: boolean;
  isFilterButton: boolean;
  isMoreButton: boolean;
  onSearchClick?: () => void;
  onBackClick?: () => void;
  onFilterClick?: () => void;
  onMoreClick?: () => void;
}

function Header({
  pageName,
  isBackButton,
  isFilterButton,
  isMoreButton,
  onSearchClick,
  onBackClick,
  onFilterClick,
  onMoreClick,
}: HeaderProps) {
  return (
    <HeaderUI.HeaderContainer>
      <HeaderUI.HeaderWrapper>
        <HeaderUI.LeftBtnWrapper>
          <HeaderUI.Button
            type="button"
            onClick={isBackButton ? onBackClick : onSearchClick}>
            {isBackButton ? (
              <img src={backSVG} alt="search SVG" />
            ) : (
              <img src={searchkSVG} alt="back SVG" />
            )}
          </HeaderUI.Button>
        </HeaderUI.LeftBtnWrapper>
        <HeaderUI.PageName>{pageName}</HeaderUI.PageName>
        <HeaderUI.RightBtnWrapper>
          {isFilterButton && (
            <HeaderUI.Button type="button" onClick={onFilterClick}>
              <img src={filterSVG} alt="filter SVG" />
            </HeaderUI.Button>
          )}
          {isMoreButton && (
            <HeaderUI.Button type="button" onClick={onMoreClick}>
              <img src={moreSVG} alt="more SVG" />
            </HeaderUI.Button>
          )}
        </HeaderUI.RightBtnWrapper>
      </HeaderUI.HeaderWrapper>
    </HeaderUI.HeaderContainer>
  );
}

export default Header;
