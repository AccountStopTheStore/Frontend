import { useRef, useState } from "react";
import LabelInput from "../../Common/LabelInput";
import { InputAreaUI } from "./style";
import { theme } from "@/src/assets/theme";
import RecurringInstallmentButtons from "../RecurringInstallmentButtons";
import PlusSVG from "@/public/icon/Plus.svg";
import CloseSVG from "@/public/icon/Close.svg";

function InputArea() {
  const labelInputItems = [
    {
      label: "날짜",
      inputId: "date",
      inputName: "transactedAt",
      placeholder: "",
      hasButton: true,
    },
    {
      label: "금액",
      inputId: "amount",
      inputName: "amount",
      placeholder: "금액을 입력해주세요.",
      hasWonUnit: true,
    },
    {
      label: "분류",
      inputId: "categoryName",
      inputName: "categoryName",
      placeholder: "카테고리를 선택해주세요.",
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  /** svg 파일 관리 다시한번 확인한기 */
  const RecurringICon = () => (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z"
        fill={theme.font_color.gray2}
      />
    </svg>
  );

  const handleRecurringInstallmentBtn = () => {
    console.log("반복/할부 버튼 클릭");
    setShowRecurringInstallmentBtns(!showRecurringInstallmentBtns);
  };

  const handleRecurringButton = () => {
    console.log("반복 버튼 클릭");
    setBtnLabel("반복");
  };

  const handleInstallmentButton = () => {
    console.log("할부 버튼 클릭");
    setBtnLabel("할부");
  };

  // 이미지
  const fileInputRef = useRef(null);
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImageFile = event.target.files?.[0];
    if (selectedImageFile) {
      const imageUrl = URL.createObjectURL(selectedImageFile);
      setSelectedImage(imageUrl);
    }
  };

  const handleCloseButton = () => {
    setSelectedImage(null);
  };

  return (
    <InputAreaUI.Container>
      <form>
        <InputAreaUI.Wrapper>
          {labelInputItems.map((item, index) => (
            <InputAreaUI.LabelInputWrapper key={index}>
              <LabelInput
                label={item.label}
                inputId={item.inputId}
                inputName={item.inputName}
                placeholder={item.placeholder}
              />
              {item.hasButton && (
                <InputAreaUI.RecurringInstallmentBtn
                  type="button"
                  onClick={handleRecurringInstallmentBtn}>
                  <RecurringICon />
                  {btnLabel}
                </InputAreaUI.RecurringInstallmentBtn>
              )}
              {item.hasButton && showRecurringInstallmentBtns && (
                <RecurringInstallmentButtons
                  onRecurringClick={handleRecurringButton}
                  onInstallmentClick={handleInstallmentButton}
                />
              )}
              {item.hasWonUnit && <InputAreaUI.WonUnit>원</InputAreaUI.WonUnit>}
            </InputAreaUI.LabelInputWrapper>
          ))}
        </InputAreaUI.Wrapper>
        <InputAreaUI.MemoArea>
          <InputAreaUI.MemoInputWrapper>
            <LabelInput
              label="메모"
              inputId="memo"
              inputName="memo"
              placeholder="메모를 입력해주세요."
            />
            <div>
              <InputAreaUI.AddImageButton htmlFor="addImage">
                <img src={PlusSVG} alt="plus svg" />
              </InputAreaUI.AddImageButton>
              <input
                type="file"
                id="addImage"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
            </div>
          </InputAreaUI.MemoInputWrapper>
          <InputAreaUI.SelectedImageContainer>
            {selectedImage && (
              <div>
                <InputAreaUI.SelectedImage
                  src={selectedImage}
                  alt="선택한 이미지"
                  style={{ maxWidth: "100%" }}
                />
                <InputAreaUI.CloseButton
                  type="button"
                  onClick={handleCloseButton}>
                  <img src={CloseSVG} alt="닫기 버튼" />
                </InputAreaUI.CloseButton>
              </div>
            )}
          </InputAreaUI.SelectedImageContainer>
        </InputAreaUI.MemoArea>
      </form>
    </InputAreaUI.Container>
  );
}

export default InputArea;
