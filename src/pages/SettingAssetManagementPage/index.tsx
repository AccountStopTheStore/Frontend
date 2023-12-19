import Header from "@/src/components/Common/Header";
import SettingAssetManagement from "@/src/components/SettingList/SettingAssetManagement";
import { useNavigate } from "react-router-dom";

function SettingAssetManagementPage() {
  const navigate = useNavigate();
  const handleAddClick = () => {
    navigate("/setting/asset/create");
  };
  return (
    <>
      <Header
        pageName={"자산 관리"}
        isBackButton={true}
        isSearchButton={false}
        isFilterButton={false}
        isMoreButton={false}
        isAddButton={true}
        onAddClick={handleAddClick}
      />
      <SettingAssetManagement />
    </>
  );
}

export default SettingAssetManagementPage;
