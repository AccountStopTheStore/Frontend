import Header from "@/src/components/Common/Header";
import LongButton from "@/src/components/Common/LongButton";
import { InstallmentPageUI } from "./style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { saveAccountBookAtom } from "@/src/hooks/recoil/useSaveAccountBook";
import { btnLabelStateAtom } from "@/src/hooks/recoil/btnLabelState";

function InstallmentPage() {
  const [inputValue, setInputValue] = useState<number | null>(null);

  const [, setPostSaveAccountBook] = useRecoilState(saveAccountBookAtom);
  const [, setBtnLabel] = useRecoilState<string>(btnLabelStateAtom);

  const navigate = useNavigate();

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);

    setInputValue(isNaN(newValue) ? null : newValue);
    console.log(newValue);
  };

  const handleSaveButton = () => {
    if (inputValue !== 0 && inputValue !== null) {
      setPostSaveAccountBook(prev => ({
        ...prev,
        installmentMonth: inputValue,
        isInstallment: true,
      }));
      setBtnLabel(`${inputValue}개월 할부`);
    }
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
        <div>할부 입력 (개월 수)</div>
        <InstallmentPageUI.InputWrapper>
          <InstallmentPageUI.Input
            type="number"
            value={inputValue === null ? "" : inputValue}
            onChange={inputChange}
            autoFocus
          />
        </InstallmentPageUI.InputWrapper>
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
