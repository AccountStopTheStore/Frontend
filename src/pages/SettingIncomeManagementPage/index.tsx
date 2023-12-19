import Header from "@/src/components/Common/Header";

function SettingIncomeManagementPage() {
  return (
    <>
      <Header
        pageName={"수입 카테고리 관리"}
        isBackButton={true}
        isSearchButton={false}
        isFilterButton={false}
        isMoreButton={false}
        isAddButton={true}
      />
      {/* <SettingIncomeManagement /> */}
    </>
  );
}

export default SettingIncomeManagementPage;
