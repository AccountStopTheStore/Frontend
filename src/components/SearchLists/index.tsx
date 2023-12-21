import { SearchListsUI } from "./style";

function SearchLists() {
  return (
    <SearchListsUI.ContainerUl>
      <li>
        <div>
          <SearchListsUI.Name>카테고리 이름</SearchListsUI.Name>
          <SearchListsUI.Badge>카테고리</SearchListsUI.Badge>
        </div>
      </li>
    </SearchListsUI.ContainerUl>
  );
}

export default SearchLists;
