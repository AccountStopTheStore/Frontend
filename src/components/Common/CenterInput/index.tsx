import { ChangeEvent } from "react";
import { CenterInputUI } from "./style";
import { ChangeNumberForAccounting } from "@/src/assets/util";
import { useRecoilState } from "recoil";
import { createCenterInputValueAtom } from "@/src/hooks/recoil/useCreateCenterInputValue";

interface CenterInputProps {
  type: "text" | "number" | "submit";
  unit: "개월" | "원";
}

function CenterInput({ type, unit }: CenterInputProps) {
  const [centerInputValue, setCenterInputValue] = useRecoilState(
    createCenterInputValueAtom
  );

  const handleCenterInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (unit === "원") {
      const result = ChangeNumberForAccounting(value);
      setCenterInputValue(result || "");
    }
  };

  const adjustCenterInputSize = () => {
    const input = document.getElementById("dynamicInput");
    if (input) {
      const minWidth = 10;
      input.style.width = "auto";
      const newWidth = Math.max(minWidth, input.scrollWidth);
      input.style.width = `${newWidth}px`;
    }
  };

  return (
    <CenterInputUI.CenterInputContainer>
      <CenterInputUI.CenterInput
        id="dynamicInput"
        type={type}
        value={centerInputValue}
        onChange={handleCenterInputValue}
        onKeyDown={adjustCenterInputSize}
        onPaste={adjustCenterInputSize}
      />
      <CenterInputUI.Unit>{unit}</CenterInputUI.Unit>
    </CenterInputUI.CenterInputContainer>
  );
}

export default CenterInput;
