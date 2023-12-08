import { HeaderUI } from "./style";
import backSVG from "/icon/Back.svg";
import searchSVG from "/icon/Search.svg";
import moreSVG from "/icon/More.svg";
import filterSVG from "/icon/Filter.svg";
import plusSVG from "/icon/Plus.svg";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  pageName: string;
  isBackButton: boolean;
  isSearchButton: boolean;
  isFilterButton: boolean;
  isAddButton: boolean;
  isMoreButton: boolean;
  onSearchClick?: () => void;
  onBackClick?: () => void;
  onFilterClick?: () => void;
  onAddClick?: () => void;
  onMoreClick?: () => void;
}

interface RenderButtonProps {
  onClick?: () => void;
  src: string;
  alt: string;
}

function Header({
  pageName,
  isBackButton,
  isSearchButton,
  isFilterButton,
  isAddButton,
  isMoreButton,
  onSearchClick,
  onFilterClick,
  onAddClick,
  onMoreClick,
}: HeaderProps) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const renderButton = ({ onClick, src, alt }: RenderButtonProps) => (
    <HeaderUI.Button type="button" onClick={onClick}>
      <img src={src} alt={alt} />
    </HeaderUI.Button>
  );

  return (
    <HeaderUI.HeaderContainer>
      <HeaderUI.HeaderWrapper>
        <HeaderUI.LeftBtnWrapper>
          {isBackButton &&
            renderButton({
              onClick: handleBackClick,
              src: backSVG,
              alt: "back SVG",
            })}
          {isSearchButton &&
            renderButton({
              onClick: onSearchClick,
              src: searchSVG,
              alt: "search SVG",
            })}
        </HeaderUI.LeftBtnWrapper>
        <HeaderUI.PageName>{pageName}</HeaderUI.PageName>
        <HeaderUI.RightBtnWrapper>
          {isFilterButton &&
            renderButton({
              onClick: onFilterClick,
              src: filterSVG,
              alt: "filter SVG",
            })}
          {isAddButton &&
            renderButton({
              onClick: onAddClick,
              src: plusSVG,
              alt: "plus SVG",
            })}
          {isMoreButton &&
            renderButton({
              onClick: onMoreClick,
              src: moreSVG,
              alt: "more SVG",
            })}
        </HeaderUI.RightBtnWrapper>
      </HeaderUI.HeaderWrapper>
    </HeaderUI.HeaderContainer>
  );
}

export default Header;
