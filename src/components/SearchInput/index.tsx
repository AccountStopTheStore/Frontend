import SearchSVG from "@/public/icon/Search.svg";
import CancleSVG from "@/public/icon/Cancle.svg";
import { SearchInputUI } from "./style";
import { ChangeEvent, useEffect, useState } from "react";
import { AccountBookAPI } from "@/src/core/api/accountBook";
import { useRecoilState } from "recoil";
import {
  autoCompleteAtom,
  getSearchAtom,
} from "@/src/hooks/recoil/useGetSearch";
import { autoCompleteDatasAtom } from "@/src/hooks/recoil/autoCompleteResults";
import { showKeywordResultsaAtom } from "@/src/hooks/recoil/showKeywordResultsState";

function SearchInput() {
  const [showCancleButton, setShowCancleButton] = useState<boolean>(false);

  const [autoKeyword, setAutoKeyword] = useRecoilState(autoCompleteAtom);
  const [, setAutoCompleteDatas] = useRecoilState(autoCompleteDatasAtom);
  const [, setShowKeywordResults] = useRecoilState(showKeywordResultsaAtom);
  const [getSearchParams, setGetSearchParams] = useRecoilState(getSearchAtom);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    console.log("new value: ", newValue);

    setAutoKeyword(prev => ({
      ...prev,
      query: newValue,
    }));

    if (autoKeyword.query.length >= 0) {
      setShowCancleButton(true);
    } else if (autoKeyword.query.length <= 0) {
      setShowCancleButton(false);
    }
  };

  const handleCancleButtonClick = () => {
    setAutoKeyword(prev => ({
      ...prev,
      query: "",
    }));
    setGetSearchParams(prev => ({
      ...prev,
      categoryName: "",
    }));
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      const getAutoCompleteDatas = async () => {
        try {
          const response = await AccountBookAPI.getAutocomplete(
            autoKeyword.limit,
            autoKeyword.query
          );
          if (response.status === 200) {
            console.log("자동완성 검색 성공: ", response.data);
            setAutoCompleteDatas(response.data);
            setShowKeywordResults(true);
          }
        } catch (error) {
          console.log("자동완성 검색 실패: ", error);
        }
      };

      if (autoKeyword.query.length > 0) getAutoCompleteDatas();
    }, 200);

    return () => {
      clearTimeout(debounce);
    };
  }, [autoKeyword.query, setAutoCompleteDatas]);

  return (
    <SearchInputUI.Container>
      <SearchInputUI.Wrapper>
        <img src={SearchSVG} alt="돋보기" />
        <SearchInputUI.Input
          type="search"
          value={autoKeyword.query}
          placeholder="검색어 입력"
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
