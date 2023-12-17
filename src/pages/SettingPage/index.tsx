import Header from "@/src/components/Common/Header";
import SettingList from "@/src/components/SettingList";

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
      <SettingList />
    </>
  );
}

export default SettingPage;
