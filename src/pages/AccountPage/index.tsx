import CDMSTabItems from "@/src/components/Common/CDMSTabItems";
import ChosenYearMonth from "@/src/components/Common/ChosenYearMonth";
import FinancialSummary from "@/src/components/Common/FinancialSummary";
import FixedCircleButton from "@/src/components/Common/FixedCircleButton";
import Header from "@/src/components/Common/Header";
import { useNavigate } from "react-router-dom";

function AccountPage() {
  const navigate = useNavigate();

  const handleSearchButton = () => {
    navigate("/search");
  };
  const handleFilterButton = () => {};

  return (
    <>
      <Header
        pageName={"가계부"}
        isBackButton={false}
        isSearchButton={true}
        isFilterButton={false}
        isAddButton={false}
        isMoreButton={false}
        onSearchClick={handleSearchButton}
        onFilterClick={handleFilterButton}
      />
      <ChosenYearMonth />
      <FinancialSummary />
      <CDMSTabItems />
      <FixedCircleButton buttonType={"입력"} />
    </>
  );
}

export default AccountPage;
