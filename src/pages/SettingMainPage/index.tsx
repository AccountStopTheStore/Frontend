import Header from "@/src/components/Common/Header";
import SettingMain from "@/src/components/SettingList/SettingMain";

function SettingPage() {
  return (
    <>
      <Header
        pageName={"설정"}
        isBackButton={true}
        isSearchButton={false}
        isFilterButton={false}
        isMoreButton={false}
        isAddButton={false}
      />
      <SettingMain />
    </>
  );
}

export default SettingPage;
