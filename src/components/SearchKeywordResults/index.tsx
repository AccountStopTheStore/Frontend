import { useRecoilState } from "recoil";
import { SearchKeywordResultsUI } from "./style";
import {
  autoCompleteAtom,
  getSearchAtom,
} from "@/src/hooks/recoil/useGetSearch";
import { autoCompleteDatasAtom } from "@/src/hooks/recoil/autoCompleteResults";
import { AccountBookAPI } from "@/src/core/api/accountBook";
import { useEffect } from "react";
import { searchResultDataAtom } from "@/src/hooks/recoil/searchResultData";
import { showKeywordResultsaAtom } from "@/src/hooks/recoil/showKeywordResultsState";
import { searchKeywordClickedState } from "@/src/hooks/recoil/searchKeywordClickedState";

function SearchKeywordResults() {
  const [getSearchParams, setGetSearchParams] = useRecoilState(getSearchAtom);
  const [autoKeyword] = useRecoilState(autoCompleteAtom);
  const [autoCompleteDatas] = useRecoilState(autoCompleteDatasAtom);
  const [, setSearchResultData] = useRecoilState(searchResultDataAtom);
  const [showKeywordResults, setShowKeywordResults] = useRecoilState(
    showKeywordResultsaAtom
  );
  const [, setSearchKeywordClicked] = useRecoilState(searchKeywordClickedState);

  const handleKeywordClick = (item: string) => {
    setGetSearchParams(prev => ({
      ...prev,
      categoryName: item,
    }));
    setSearchKeywordClicked(true);
    setShowKeywordResults(false);
  };

  useEffect(() => {
    const serachData = async () => {
      try {
        const response = await AccountBookAPI.getSearch(
          getSearchParams.categoryName
        );
        if (response.status === 200) {
          console.log("검색 성공: ", response.data);
          setSearchResultData(response.data);
        }
      } catch (error) {
        console.log("getSearch Error: ", error);
      }
    };

    serachData();
  }, [getSearchParams.categoryName]);

  return (
    <>
      {autoKeyword.query.length > 0 &&
        autoCompleteDatas &&
        showKeywordResults && (
          <SearchKeywordResultsUI.ContainerUl>
            {autoCompleteDatas.map((item, index) => (
              <li key={index} onClick={() => handleKeywordClick(item)}>
                <SearchKeywordResultsUI.Name>
                  {item}
                </SearchKeywordResultsUI.Name>
                <SearchKeywordResultsUI.Badge>
                  카테고리
                </SearchKeywordResultsUI.Badge>
              </li>
            ))}
          </SearchKeywordResultsUI.ContainerUl>
        )}
    </>
  );
}

export default SearchKeywordResults;
