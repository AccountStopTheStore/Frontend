import { ChangeEvent, useEffect, useRef, useState } from "react";
import { LabelInputUI } from "./style";
import RecurringICon from "../../RecurringIcon";
import { useRecoilState } from "recoil";
import { btnLabelStateAtom } from "@/src/hooks/recoil/btnLabelState";
import { useNavigate } from "react-router-dom";
import { theme } from "@/src/assets/theme";
import RecurringInstallmentButtons from "../../RecurringInstallmentButtons";
import ImageUploadSVG from "@/public/icon/ImageUpload.svg";
import { uploadImageFileAtom } from "@/src/hooks/recoil/useUploadImageFile";

export interface LabelInputProps {
  type: string;
  label: string;
  inputId: string;
  value: string | number | null;
  placeholder: string;
  addContent?: "button" | "won" | "imageUpload";
  onClick?: () => void;
  onChange?: undefined | ((e: ChangeEvent<HTMLInputElement>) => void);
  readonly?: boolean;
}

export const checkGreenColor = "#3cb043";

function LabelInput({
  type = "text",
  label,
  inputId,
  value,
  placeholder,
  addContent,
  onClick,
  onChange,
  readonly = false,
}: LabelInputProps) {
  const navigate = useNavigate();
  const [btnLabel, setBtnLabel] = useRecoilState<string>(btnLabelStateAtom);
  const fileInputRef = useRef(null);
  const recurringInstallmentBtnRef = useRef<HTMLButtonElement | null>(null);
  const [showRecurringInstallmentBtns, setShowRecurringInstallmentBtns] =
    useState<boolean>(false);
  const [, setSelectedImageFile] = useRecoilState(uploadImageFileAtom);

  // handleRecurringInstallmentBtn 외부 클릭시 버튼 사라짐
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        recurringInstallmentBtnRef.current &&
        !recurringInstallmentBtnRef.current.contains(event.target as Node)
      ) {
        setShowRecurringInstallmentBtns(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [recurringInstallmentBtnRef]);

  const handleRecurringButton = () => {
    setBtnLabel("반복");
    navigate("/recordAccountBook/recurring");
  };

  const handleInstallmentButton = () => {
    setBtnLabel("할부");
    navigate("/recordAccountBook/installment");
  };

  // 이미지 표시
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const FILE = e.target.files?.[0];
    if (FILE) {
      const imageUrl = URL.createObjectURL(FILE);
      setSelectedImageFile({
        isUploadImage: true,
        selectedImage: imageUrl,
        selectedImageFile: FILE,
      });
    }
  };

  return (
    <LabelInputUI.InputContainer>
      <LabelInputUI.Label>{label}</LabelInputUI.Label>
      <LabelInputUI.Input
        type={type}
        id={inputId}
        value={value}
        placeholder={placeholder}
        spellCheck={false}
        onClick={onClick}
        onChange={onChange}
        readOnly={readonly}
      />
      {addContent === "button" ? (
        <LabelInputUI.RecurringInstallmentButton
          type="button"
          onClick={() =>
            setShowRecurringInstallmentBtns(!showRecurringInstallmentBtns)
          }
          ref={recurringInstallmentBtnRef}
          style={{
            color:
              btnLabel === "반복/할부"
                ? theme.font_color.gray3
                : theme.font_color.black,
          }}>
          <RecurringICon
            fill={
              btnLabel === "반복/할부"
                ? theme.font_color.gray2
                : checkGreenColor
            }
          />
          {btnLabel}
        </LabelInputUI.RecurringInstallmentButton>
      ) : addContent === "won" ? (
        <LabelInputUI.WonUnit>원</LabelInputUI.WonUnit>
      ) : addContent === "imageUpload" ? (
        <>
          <LabelInputUI.AddImageButtonLabel htmlFor="addImage">
            <img src={ImageUploadSVG} alt="plus svg" />
          </LabelInputUI.AddImageButtonLabel>
          <input
            type="file"
            id="addImage"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </>
      ) : (
        <></>
      )}
      {showRecurringInstallmentBtns && (
        <RecurringInstallmentButtons
          onRecurringClick={handleRecurringButton}
          onInstallmentClick={handleInstallmentButton}
        />
      )}
    </LabelInputUI.InputContainer>
  );
}

export default LabelInput;
