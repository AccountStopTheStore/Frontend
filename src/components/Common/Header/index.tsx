import { HeaderUI } from "./style";
import backSVG from "/icon/Back.svg";
import searchSVG from "/icon/Search.svg";
import moreSVG from "/icon/More.svg";
import filterSVG from "/icon/Filter.svg";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  pageName: string;
  isBackButton: boolean;
  isSearcButton: boolean;
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
  isSearcButton,
  isFilterButton,
  isMoreButton,
  onSearchClick,
  onFilterClick,
  onMoreClick,
}: HeaderProps) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <HeaderUI.HeaderContainer>
      <HeaderUI.HeaderWrapper>
        <HeaderUI.LeftBtnWrapper>
          {isBackButton && (
            <HeaderUI.Button type="button" onClick={handleBackClick}>
              <img src={backSVG} alt="back SVG" />
            </HeaderUI.Button>
          )}
          {isSearcButton && (
            <HeaderUI.Button type="button" onClick={onSearchClick}>
              <img src={searchSVG} alt="search SVG" />
            </HeaderUI.Button>
          )}
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
