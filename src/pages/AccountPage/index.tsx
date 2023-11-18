import CDMSTabItems from "@/src/components/Common/CDMSTabItems";
import Calendar from "@/src/components/Common/Calendar";
import ChosenYearMonth from "@/src/components/Common/ChosenYearMonth";
import FinancialSummary from "@/src/components/Common/FinancialSummary";
import FixedCircleButton from "@/src/components/Common/FixedCircleButton";
import Header from "@/src/components/Common/Header";
import Layout from "@/src/components/Common/Layout";
// import MonthIncomeExpenseInfos from "@/src/components/Common/MonthIncomeExpenseInfos";
import NavigationItems from "@/src/components/Common/NavigationItems";
// import DateAccount from "@/src/components/DateAccount";
// import Report from "@/src/components/Report";

function AccountPage() {
  return (
    <Layout>
      <Header
        pageName={"가계부"}
        isBackButton={false}
        isSearcButton={true}
        isFilterButton={false}
        isMoreButton={false}
      />
      <ChosenYearMonth />
      <FinancialSummary />
      <CDMSTabItems />
      {/* <DateAccount /> */}
      {/* <MonthAccount /> */}
      {/* <Report /> */}
      <Calendar />
      <FixedCircleButton buttonType={"입력"} />
      <NavigationItems />
    </Layout>
  );
}

export default AccountPage;
