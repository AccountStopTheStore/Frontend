import { useRecoilState } from "recoil";
import Header from "../../components/Common/Header";
import ShortButton from "../../components/Common/ShortButton";
import IncomeExpenseButton from "../../components/IncomeExpenseButton/idnex";
import InputArea from "../../components/InputArea";
import { AccountBookAPI } from "@/src/core/api/accountBook";
import { saveAccountBookAtom } from "@/src/hooks/recoil/useSaveAccountBook";
import { useNavigate } from "react-router-dom";

function RecordAccountBookPage() {
  const navigate = useNavigate();
  const [postAccountBook] = useRecoilState(saveAccountBookAtom);

  const handleCancelButton = () => {
    console.log("저장 안하고 가계부 페이지로 이동");
    navigate("/account");
  };

  /** TODO: recoil에 값 사용하기 */
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
