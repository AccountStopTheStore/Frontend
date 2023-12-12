import Header from "@/src/components/Common/Header";
import CreateChallengeGroup from "@/src/components/CreateChallengeGroup";

function CreateChallengeGroupPage() {
  return (
    <>
      <Header
        pageName={"저축 챌린지 등록"}
        isBackButton={true}
        isSearchButton={false}
        isFilterButton={false}
        isAddButton={false}
        isMoreButton={false}
      />
      <CreateChallengeGroup />
    </>
  );
}

export default CreateChallengeGroupPage;
