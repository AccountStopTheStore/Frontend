import Header from "../../components/Common/Header";
import Layout from "../../components/Common/Layout";
import ShortButton from "../../components/Common/ShortButton";
import IncomeExpenseButton from "../../components/RecordAccountBook/IncomeExpenseButton/IncomeExpenseButton/idnex";
import InputArea from "../../components/RecordAccountBook/InputArea";

function RecordAccountBookPage() {
  const handleShortButton = () => {
    console.log("short button");
  };

  const handleBackbutton = () => {
    console.log("뒤로가기");
  };

  return (
    <Layout>
      <Header
        pageName={"수입 및 지출 입력"}
        isBackButton={true}
        isFilterButton={false}
        isMoreButton={false}
        onBackClick={handleBackbutton}
      />
      <IncomeExpenseButton />
      <InputArea />
      <ShortButton isSaveButton={true} onClick={handleShortButton} />
    </Layout>
  );
}

export default RecordAccountBookPage;
