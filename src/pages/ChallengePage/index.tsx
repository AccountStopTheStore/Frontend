import BarGraphList from "@/src/components/BarGraphList";
import Header from "@/src/components/Common/Header";
import { useNavigate } from "react-router-dom";

function ChallengePage() {
  const navigation = useNavigate();
  const handleAddClick = () => {
    navigation("/challenge/create");
  };
  return (
    <>
      <Header
        pageName="저축 챌린지"
        isBackButton={true}
        isSearchButton={false}
        isFilterButton={false}
        isMoreButton={false}
        isAddButton={true}
        onAddClick={handleAddClick}
      />
      <BarGraphList />
    </>
  );
}

export default ChallengePage;
