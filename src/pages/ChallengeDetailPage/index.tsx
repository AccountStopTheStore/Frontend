import BarGraphItemDetails from "@/src/components/BarGraphItemDetails";
import FixedCircleButton from "@/src/components/Common/FixedCircleButton";
import Header from "@/src/components/Common/Header";
import EditChallengeButton from "@/src/components/EditChallengeButton";
import { useState } from "react";

function ChallengeDetailPage() {
  const [openEditButton, setOpenEditButton] = useState(false);

  const handleFilterClick = () => {
    console.log("hello World");
  };
  return (
    <>
      <Header
        pageName={""}
        isBackButton={true}
        isSearchButton={false}
        isFilterButton={true}
        isAddButton={false}
        isMoreButton={false}
        onFilterClick={() => setOpenEditButton(!openEditButton)}
      />
      {openEditButton && (
        <EditChallengeButton onEditButton={handleFilterClick} />
      )}
      <BarGraphItemDetails />
      <FixedCircleButton buttonType={"채팅"} />
    </>
  );
}

export default ChallengeDetailPage;
