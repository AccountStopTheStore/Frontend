import Header from "../../components/Common/Header";
import Layout from "../../components/Common/Layout";
import ShortButton from "../../components/Common/ShortButton";
import IncomeExpenseButton from "../../components/RecordAccountBook/IncomeExpenseButton/idnex";
import InputArea from "../../components/RecordAccountBook/InputArea";

function RecordAccountBookPage() {
  const handleCancelButton = () => {
    console.log("취소");
  };

  const handleSaveButton = () => {
    console.log("뒤로가기");
  };

  return (
    <Layout>
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
    </Layout>
  );
}

export default RecordAccountBookPage;
