import Header from "@/src/components/Common/Header";
import Layout from "@/src/components/Common/Layout";
import LongButton from "@/src/components/Common/LongButton";
import { InstallmentPageUI } from "./style";
import { useState } from "react";

function InstallmentPage() {
  const [inputValue, setInputValue] = useState<string>("");

  const handleBackButton = () => {
    /** 이전 페이지로 이동 */
    console.log("뒤로가기");
  };

  const handleSaveButton = () => {
    console.log("저장");
  };

  const InputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <Layout>
      <Header
        pageName="할부"
        isBackButton={true}
        isFilterButton={false}
        isMoreButton={false}
        onBackClick={handleBackButton}
      />
      <InstallmentPageUI.Container>
        <InstallmentPageUI.Form>
          <InstallmentPageUI.Input
            type="text"
            defaultValue={"개월"}
            onChange={InputChange}
          />
        </InstallmentPageUI.Form>
        <LongButton buttonName="저장" onClick={handleSaveButton} />
      </InstallmentPageUI.Container>
    </Layout>
  );
}

export default InstallmentPage;
