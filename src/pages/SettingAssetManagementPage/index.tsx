import Header from "@/src/components/Common/Header";
import CreateSettingAssetManagement from "@/src/components/CreateSettingAssetManagement";

function SettingAssetManagementPage() {
  return (
    <>
      <Header
        pageName={"자산 관리"}
        isBackButton={true}
        isSearchButton={false}
        isFilterButton={false}
        isAddButton={false}
        isMoreButton={false}
      />
      <CreateSettingAssetManagement />
    </>
  );
}

export default SettingAssetManagementPage;
