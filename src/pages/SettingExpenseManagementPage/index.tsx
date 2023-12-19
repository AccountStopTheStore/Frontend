import Header from "@/src/components/Common/Header";
import SettingExpenseManagement from "@/src/components/SettingList/SettingExpenseManagement";

function SettingExpenseManagementPage() {
  return (
    <>
      <Header
        pageName={"지출 카테고리 관리"}
        isBackButton={true}
        isSearchButton={false}
        isFilterButton={false}
        isMoreButton={false}
        isAddButton={false}
      />
      <SettingExpenseManagement />
    </>
  );
}

export default SettingExpenseManagementPage;
