import Header from "@/src/components/Common/Header";
import SavingChallenge from "@/src/components/SavingChallenge";

function SavingPage() {
  return (
    <>
      <Header
        pageName={"챌린지 저축"}
        isBackButton={true}
        isSearchButton={false}
        isFilterButton={false}
        isAddButton={false}
        isMoreButton={false}
      />
      <SavingChallenge />
    </>
  );
}

export default SavingPage;
