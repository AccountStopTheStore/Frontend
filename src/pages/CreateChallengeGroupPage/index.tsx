import Header from "@/src/components/Common/Header";
import CreateChallengeGroup from "@/src/components/CreateChallengeGroup";

function CreateChallengeGroupPage() {
  return (
    <>
      <Header
        pageName={""}
        isBackButton={false}
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
