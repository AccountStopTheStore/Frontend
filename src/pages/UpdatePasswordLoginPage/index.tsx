import Header from "@/src/components/Common/Header";
import UpdatePasswordLogin from "@/src/components/UpdatePasswordLogin";

function UpdatePasswordLoginPage() {
  return (
    <>
      <Header
        pageName={"비밀번호 변경"}
        isBackButton={true}
        isSearchButton={false}
        isFilterButton={false}
        isAddButton={false}
        isMoreButton={false}
      />
      <UpdatePasswordLogin />
    </>
  );
}

export default UpdatePasswordLoginPage;
