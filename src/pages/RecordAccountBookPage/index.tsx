import { useRecoilState } from "recoil";
import Header from "../../components/Common/Header";
import ShortButton from "../../components/Common/ShortButton";
import IncomeExpenseButton from "../../components/RecordAccountBook/IncomeExpenseButton/idnex";
import InputArea from "../../components/RecordAccountBook/InputArea";
import { saveAccountBookAtom } from "@/src/hooks/recoil/useSaveAccountBook";
import { AccountBookAPI } from "@/src/core/api/accountBook";

function RecordAccountBookPage() {
  const handleCancelButton = () => {
    console.log("저장 안하고 가계부 페이지로 이동");
  };

  /** TODO: recoil에 값 사용하기 */
  const [postAccountBook] = useRecoilState(saveAccountBookAtom);
  const handleSaveButton = () => {
    console.log("저장하고 가계부 페이지로 이동");

    AccountBookAPI.saveAccountBook(postAccountBook);
  };

  return (
    <>
      <Header
        pageName={"수입 및 지출 입력"}
        isBackButton={true}
        isSearchButton={false}
        isFilterButton={false}
        isAddButton={false}
        isMoreButton={false}
      />
      <form>
        <IncomeExpenseButton />
        <InputArea />
        <ShortButton
          isSaveButton={true}
          onCancelClick={handleCancelButton}
          onSaveClick={handleSaveButton}
        />
      </form>
    </>
  );
}

export default RecordAccountBookPage;
