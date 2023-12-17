import { useRecoilState } from "recoil";
import Header from "../../components/Common/Header";
import ShortButton from "../../components/Common/ShortButton";
import IncomeExpenseButton from "../../components/IncomeExpenseButton";
import InputArea from "../../components/InputArea";
import { AccountBookAPI } from "@/src/core/api/accountBook";
import {
  saveAccountBookAtom,
  saveAccountBookInitial,
} from "@/src/hooks/recoil/useSaveAccountBook";
import { useNavigate } from "react-router-dom";

function RecordAccountBookPage() {
  const navigate = useNavigate();
  const [postSaveAccountBook, setPostSaveAccountBook] =
    useRecoilState(saveAccountBookAtom);

  const handleCancelButton = () => {
    console.log("저장 안하고 가계부 페이지로 이동");
    setPostSaveAccountBook(saveAccountBookInitial);
    navigate("/account");
  };

  const handleSaveButton = () => {
    AccountBookAPI.saveAccountBook(postSaveAccountBook)
      .then(response => {
        console.log("가계부 저장 성공: ", response.data);
        navigate("/account");
      })
      .catch(error => {
        console.log("가계부 저장 실패: ", error);
      });
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
      <div>
        <IncomeExpenseButton />
        <InputArea />
        <ShortButton
          isSaveButton={true}
          onCancelClick={handleCancelButton}
          onSaveClick={handleSaveButton}
        />
      </div>
    </>
  );
}

export default RecordAccountBookPage;
