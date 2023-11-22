import CDMSTabItems from "@/src/components/Common/CDMSTabItems";
import ChosenYearMonth from "@/src/components/Common/ChosenYearMonth";
import FinancialSummary from "@/src/components/Common/FinancialSummary";
import FixedCircleButton from "@/src/components/Common/FixedCircleButton";
import Header from "@/src/components/Common/Header";

function AccountPage() {
  return (
    <>
      <Header
        pageName={"가계부"}
        isBackButton={false}
        isSearchButton={true}
        isFilterButton={false}
        isAddButton={false}
        isMoreButton={false}
      />
      <ChosenYearMonth />
      <FinancialSummary />
      <CDMSTabItems />
      <FixedCircleButton buttonType={"입력"} />
    </>
  );
}

export default AccountPage;
