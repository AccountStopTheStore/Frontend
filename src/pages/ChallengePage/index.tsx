import BarGraphItemDetails from "@/src/components/BarGraphItemDetails/index";
import BarGraphList from "@/src/components/BarGraphList";
import Chatting from "@/src/components/Chatting";
import FixedCircleButton from "@/src/components/Common/FixedCircleButton";
import Header from "@/src/components/Common/Header";
import Layout from "@/src/components/Common/Layout";
import NavigationItems from "@/src/components/Common/NavigationItems";
import CreateChallengeGroup from "@/src/components/CreateChallengeGroup";
import EnterSavingOrBudget from "@/src/components/EnterSavingOrBudget";

function ChallengePage() {
  return (
    <Layout>
      <Header
        pageName="저축 챌린지"
        isBackButton={true}
        isSearcButton={false}
        isFilterButton={false}
        isMoreButton={false}
      />
      {/* <BarGraphList /> */}
      {/* <BarGraphItemDetails />
      <FixedCircleButton buttonType="채팅" /> */}
      {/* <CreateChallengeGroup /> */}
      {/* <EnterSavingOrBudget enterType="저축" /> */}
      <Chatting />
      <NavigationItems />
    </Layout>
  );
}

export default ChallengePage;
