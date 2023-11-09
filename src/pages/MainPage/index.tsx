import BudgetAccountBarGraph from "../../components/Common/BudgetAccountBarGraph";
import CDMSTabItems from "../../components/Common/CDMSTabItems";
import FixedCircleButton from "../../components/Common/FixedCircleButton";
import Header from "../../components/Common/Header";
import Layout from "../../components/Common/Layout";
import NavigationItems from "../../components/Common/NavigationItems";
import SeparatedCategory from "../../components/Common/SeparatedCategory";

function MainPage() {
  return (
    <Layout>
      <Header pageName={"가계부"} />
      <BudgetAccountBarGraph />
      <FixedCircleButton buttonType={"입력"} />
      <CDMSTabItems />
      <NavigationItems />
      <SeparatedCategory />
    </Layout>
  );
}

export default MainPage;
