import Header from "@/src/components/Common/Header";

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
    </>
  );
}

export default SettingPage;
