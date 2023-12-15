import Header from "@/src/components/Common/Header";
import UpdateChallengeGroup from "@/src/components/UpdateChallengeGroup";

function UpdateChallengeGroupPage() {
  return (
    <>
      <Header
        pageName={"저축 챌린지 수정"}
        isBackButton={true}
        isSearchButton={false}
        isFilterButton={false}
        isAddButton={false}
        isMoreButton={false}
      />
      <UpdateChallengeGroup />
    </>
  );
}

export default UpdateChallengeGroupPage;
