import Header from "@/src/components/Common/Header";
import UpdatePasswordLogout from "@/src/components/UpdatePasswordLogout";

function UpdatePasswordLogoutPage() {
  return (
    <>
      <Header
        pageName={"비밀번호 변경"}
        isBackButton={false}
        isSearchButton={false}
        isFilterButton={false}
        isAddButton={false}
        isMoreButton={false}
      />
      <UpdatePasswordLogout />
    </>
  );
}

export default UpdatePasswordLogoutPage;
