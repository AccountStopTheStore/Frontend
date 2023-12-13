import BarGraphItemDetails from "@/src/components/BarGraphItemDetails";
import FixedCircleButton from "@/src/components/Common/FixedCircleButton";
import Header from "@/src/components/Common/Header";
import EditChallengeButton from "@/src/components/EditChallengeButton";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ChallengeDetailPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [openEditButton, setOpenEditButton] = useState(false);

  const handleFilterClick = () => {
    navigate(`/challenge/update/${params.slug}`);
  };
  return (
    <>
      <Header
        pageName={"저축 챌린지"}
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
      <FixedCircleButton buttonType={"채팅"} params={params} />
    </>
  );
}

export default ChallengeDetailPage;
