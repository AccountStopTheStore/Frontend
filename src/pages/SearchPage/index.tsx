import Header from "@/src/components/Common/Header";
import SearchInput from "@/src/components/SearchInput";
import SearchKeywordResults from "@/src/components/SearchKeywordResults";
import SearchResults from "@/src/components/SearchResults";

function SearchPage() {
  return (
    <>
      <Header
        pageName={"검색"}
        isBackButton={true}
        isSearchButton={false}
        isAddButton={false}
        isFilterButton={true}
        isMoreButton={false}
      />
      <SearchInput />
      <SearchKeywordResults />
      <SearchResults />
    </>
  );
}

export default SearchPage;
