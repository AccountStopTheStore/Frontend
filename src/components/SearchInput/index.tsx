import SearchSVG from "@/public/icon/Search.svg";
import CancleSVG from "@/public/icon/Cancle.svg";
import { SearchInputUI } from "./style";
import { ChangeEvent, useState } from "react";

function SearchInput() {
  const [showCancleButton, setShowCancleButton] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>("");

  const handleFocus = () => {
    setShowCancleButton(true);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    console.log("new value: ", newValue);
    setKeyword(newValue);
  };

  const handleCancleButtonClick = () => {
    setKeyword("");
  };

  return (
    <SearchInputUI.Container>
      <SearchInputUI.Wrapper>
        <img src={SearchSVG} alt="돋보기" />
        <SearchInputUI.Input
          type="search"
          placeholder="검색어 입력"
          value={keyword}
          onFocus={handleFocus}
          onChange={handleChange}
        />
        {showCancleButton && (
          <SearchInputUI.CancleButton
            type="button"
            onClick={handleCancleButtonClick}>
            <img src={CancleSVG} alt="엑스" />
          </SearchInputUI.CancleButton>
        )}
      </SearchInputUI.Wrapper>
    </SearchInputUI.Container>
  );
}

export default SearchInput;
