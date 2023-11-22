import { ChangeEvent, useEffect, useRef, useState } from "react";
import LabelInput from "../../Common/LabelInput";
import { InputAreaUI } from "./style";
import { theme } from "@/src/assets/theme";
import RecurringInstallmentButtons from "../RecurringInstallmentButtons";
import ImageUploadSVG from "@/public/icon/ImageUpload.svg";
import { useNavigate } from "react-router-dom";
import RecurringICon from "../RecurringIcon";
import SelectedImage from "../SelectedImage";
import SeparatedCategory from "../../Common/SeparatedCategory";
import { useRecoilState } from "recoil";
import { saveAccountBookAtom } from "@/src/hooks/recoil/useSaveAccountBook";

export const checkGreenColor = "#3cb043";

function InputArea() {
  const labelInputItems = [
    {
      label: "날짜",
      inputId: "date",
      inputName: "transactedAt",
      placeholder: "날짜를 입력해주세요.",
      addContent: "button",
    },
    {
      label: "금액",
      inputId: "amount",
      inputName: "amount",
      placeholder: "금액을 입력해주세요.",
      addContent: "won",
    },
    {
      label: "분류",
      inputId: "categoryName",
      inputName: "categoryName",
      placeholder: "카테고리를 선택해주세요.",
      onClick: () => {
        setShowSeparatedCategory(true);
      },
      readonly: true,
    },
    {
      label: "자산",
      inputId: "categoryName",
      inputName: "categoryName",
      placeholder: "결제수단",
    },
    {
      label: "사용처",
      inputId: "transactionDetail",
      inputName: "transactionDetail",
      placeholder: "결제수단",
    },
    {
      label: "주소",
      inputId: "categoryName",
      inputName: "categoryName",
      placeholder: "주소를 입력해주세요.",
    },
    {
      label: "주소",
      inputId: "categoryName",
      inputName: "categoryName",
      placeholder: "주소를 입력해주세요.",
    },
  ];

  const [showRecurringInstallmentBtns, setShowRecurringInstallmentBtns] =
    useState<boolean>(false);
  const [btnLabel, setBtnLabel] = useState<string>("반복/할부");
  const [showSeparatedCategory, setShowSeparatedCategory] =
    useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null);

  const naviagte = useNavigate();

  const recurringInstallmentBtnRef = useRef<HTMLButtonElement | null>(null);
  const fileInputRef = useRef(null);

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
    naviagte("/recordAccountBook/recurring");
  };

  const handleInstallmentButton = () => {
    setBtnLabel("할부");
    naviagte("/recordAccountBook/installment");
  };

  // 이미지 표시
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImageFile = event.target.files?.[0];
    if (selectedImageFile) {
      const imageUrl = URL.createObjectURL(selectedImageFile);
      setSelectedImage(imageUrl);
      setSelectedImageFile(selectedImageFile);
    }
  };

  /** TODO: recoil에 값 추가하기 */
  const handleMemo = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPostAccountBook(prev => ({
      ...prev,
      memo: value,
    }));
  };
  const [, setPostAccountBook] = useRecoilState(saveAccountBookAtom);
  return (
    <InputAreaUI.Container>
      <InputAreaUI.Wrapper>
        {labelInputItems.map((item, index) => (
          <InputAreaUI.LabelInputWrapper key={index}>
            <LabelInput
              type="text"
              label={item.label}
              inputId={item.inputId}
              inputName={item.inputName}
              placeholder={item.placeholder}
              onClick={item.onClick}
              readonly={item.readonly}
            />
            {item.addContent === "button" && (
              <InputAreaUI.RecurringInstallmentBtn
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
              </InputAreaUI.RecurringInstallmentBtn>
            )}
            {item.addContent === "button" && showRecurringInstallmentBtns && (
              <RecurringInstallmentButtons
                onRecurringClick={handleRecurringButton}
                onInstallmentClick={handleInstallmentButton}
              />
            )}
            {item.addContent === "won" && (
              <InputAreaUI.WonUnit>원</InputAreaUI.WonUnit>
            )}
          </InputAreaUI.LabelInputWrapper>
        ))}
      </InputAreaUI.Wrapper>
      {showSeparatedCategory && <SeparatedCategory />}
      <InputAreaUI.MemoArea>
        <InputAreaUI.MemoInputWrapper>
          <LabelInput
            type="text"
            label="메모"
            inputId="memo"
            inputName="memo"
            placeholder="메모를 입력해주세요."
            onClick={handleMemo}
          />
          {/** 이미지 업로드 */}
          <InputAreaUI.AddImageButtonLabel htmlFor="addImage">
            <img src={ImageUploadSVG} alt="plus svg" />
          </InputAreaUI.AddImageButtonLabel>
          <input
            type="file"
            id="addImage"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </InputAreaUI.MemoInputWrapper>
        {/** 이미지 미리보기 */}
        <SelectedImage
          selectedImages={selectedImage}
          setSelectedImages={setSelectedImage}
          selectedImageFile={selectedImageFile}
        />
      </InputAreaUI.MemoArea>
    </InputAreaUI.Container>
  );
}

export default InputArea;
