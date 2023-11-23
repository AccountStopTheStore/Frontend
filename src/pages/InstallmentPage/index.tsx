import Header from "@/src/components/Common/Header";
import LongButton from "@/src/components/Common/LongButton";
import { InstallmentPageUI } from "./style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { saveAccountBookAtom } from "@/src/hooks/recoil/useSaveAccountBook";
import { btnLabelStateAtom } from "@/src/hooks/recoil/btnLabelState";

function InstallmentPage() {
  const [inputValue, setInputValue] = useState<string>("");

  const [, setPostSaveAccountBook] = useRecoilState(saveAccountBookAtom);
  const [, setBtnLabel] = useRecoilState<string>(btnLabelStateAtom);

  const navigate = useNavigate();

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    setInputValue(newValue);
    console.log(newValue);
  };

  const handleSaveButton = () => {
    setPostSaveAccountBook(prev => ({
      ...prev,
      installmentMonth: parseInt(inputValue, 10),
      isInstallment: true,
    }));
    setBtnLabel("할부");
    navigate("/recordAccountBook");

    console.log("저장");
  };

  return (
    <>
      <Header
        pageName="할부"
        isBackButton={true}
        isFilterButton={false}
        isMoreButton={false}
        isSearchButton={false}
        isAddButton={false}
      />
      <InstallmentPageUI.Container>
        <div>
          <InstallmentPageUI.InputWrapper>
            <InstallmentPageUI.Input type="number" onChange={inputChange} />
            <span>개월</span>
          </InstallmentPageUI.InputWrapper>
        </div>
        <LongButton
          type={"button"}
          buttonName="저장"
          onClick={handleSaveButton}
        />
      </InstallmentPageUI.Container>
    </>
  );
}

export default InstallmentPage;
