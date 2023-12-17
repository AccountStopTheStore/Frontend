import { ChangeEvent } from "react";
import LabelInput from "../Common/LabelInput";
import { InputAreaUI } from "./style";
import SelectedImage from "../SelectedImage";
import SeparatedCategory from "../Common/SeparatedCategory";
import { useRecoilState } from "recoil";
import { saveAccountBookAtom } from "@/src/hooks/recoil/useSaveAccountBook";
import { openSeparatedCategoryAtom } from "@/src/hooks/recoil/useOpenSeparatedCategory";
import DaumPost from "../DaumPost";
import { modalOpenStateAtom } from "@/src/hooks/recoil/calendarModalState";
import CalendarModal from "../Common/CalendarModal";

function InputArea() {
  const [postSaveAccountBook, setPostSaveAccountBook] =
    useRecoilState(saveAccountBookAtom);
  const [isOpenSeparatedCategory, setIsOpenSeparatedCategory] = useRecoilState(
    openSeparatedCategoryAtom
  );

  const [isCalendarModalOpen, setIsCalendarModalOpen] =
    useRecoilState(modalOpenStateAtom);

  const [serperatedCategoryTitle, setSerperatedCategoryTitle] =
    useState<string>("");

  /** input value 관리 */
  const handleAmount = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setPostSaveAccountBook(prev => ({
      ...prev,
      amount: Number(value),
    }));
  };
  const handleTransactionDetail = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setPostSaveAccountBook(prev => ({
      ...prev,
      transactionDetail: value,
    }));
  };
  const handleAddress = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setPostSaveAccountBook(prev => ({
      ...prev,
      address: value,
    }));
  };
  const handleMemo = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setPostSaveAccountBook(prev => ({
      ...prev,
      memo: value,
    }));
  };

  /** 클릭 이벤트 */
  const handleDateClick = () => {
    setIsCalendarModalOpen(true);
  };

  const handleCategoryClick = () => {
    setIsOpenSeparatedCategory({ isOpen: true });
    setSerperatedCategoryTitle("카테고리 분류");
  };

  const handleAssetClick = () => {
    setIsOpenSeparatedCategory({ isOpen: true });
    setSerperatedCategoryTitle("결제수단 자산");
  };

  return (
    <InputAreaUI.Container>
      <InputAreaUI.Wrapper>
        <div>
          <LabelInput
            type={"text"}
            label={"날짜"}
            inputId={"date"}
            value={postSaveAccountBook.transactedAt}
            placeholder={"날짜를 입력해주세요."}
            addContent={"button"}
            onClick={handleDateClick}
            readonly={true}
          />
          <LabelInput
            type={"number"}
            label={"금액"}
            inputId={"amount"}
            value={postSaveAccountBook.amount}
            placeholder={"금액을 입력해주세요."}
            addContent={"won"}
            onChange={handleAmount}
          />
          <LabelInput
            type={"text"}
            label={"분류"}
            inputId={"categoryName"}
            value={postSaveAccountBook.categoryName}
            placeholder={"카테고리를 선택해주세요."}

            onClick={handleCategoryClick}
            readonly={true}
          />
          <LabelInput
            type={"text"}
            label={"자산"}
            inputId={"assetName"}
            value={postSaveAccountBook.assetName}
            placeholder={"결제 수단을 선택해주세요."}
            onClick={handleAssetClick}
            readonly={true}
          />
          <LabelInput
            type={"text"}
            label={"사용처"}
            inputId={"transactionDetail"}
            value={postSaveAccountBook.transactionDetail}
            placeholder={"사용처를 입력해주세요."}
            onChange={handleTransactionDetail}
          />
          <InputAreaUI.AddressArea>
            <LabelInput
              type={"text"}
              label={"주소"}
              inputId={"address"}
              value={postSaveAccountBook.address}
              placeholder={"주소를 입력해주세요."}
              onChange={handleAddress}
              readonly={true}
            />
            <DaumPost />
          </InputAreaUI.AddressArea>
        </div>
        {isOpenSeparatedCategory.isOpen && (
          <SeparatedCategory title={serperatedCategoryTitle} />
        )}
        {isCalendarModalOpen && <CalendarModal page={"recordAccountBook"} />}
      </InputAreaUI.Wrapper>

      <InputAreaUI.MemoArea>
        <LabelInput
          type={"text"}
          label={"메모"}
          inputId={"memo"}
          value={postSaveAccountBook.memo}
          placeholder={"메모를 입력해주세요."}
          addContent={"imageUpload"}
          onChange={handleMemo}
        />

        {/** 이미지 미리보기 */}
        <SelectedImage />
      </InputAreaUI.MemoArea>
    </InputAreaUI.Container>
  );
}

export default InputArea;
