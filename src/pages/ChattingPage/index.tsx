import Chatting from "@/src/components/Chatting";
import Header from "@/src/components/Common/Header";

function ChattingPage() {
  return (
    <>
      <Header
        pageName={"저축 챌린지"}
        isBackButton={true}
        isSearchButton={false}
        isFilterButton={false}
        isAddButton={false}
        isMoreButton={false}
      />
      <Chatting />
    </>
  );
}

export default ChattingPage;
