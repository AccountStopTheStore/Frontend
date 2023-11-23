import { ChangeEvent, useState } from "react";
import LabelInput from "../Common/LabelInput";
import { InputAreaUI } from "./style";
import SelectedImage from "../SelectedImage";
import SeparatedCategory from "../Common/SeparatedCategory";
import { useRecoilState } from "recoil";
import { saveAccountBookAtom } from "@/src/hooks/recoil/useSaveAccountBook";

function InputArea() {
  const [postSaveAccountBook, setPostSaveAccountBook] =
    useRecoilState(saveAccountBookAtom);
  const [showSeparatedCategory, setShowSeparatedCategory] =
    useState<boolean>(false);

  /** COMPLETED: recoil saveAccountBookAtom에 값 추가하기 */
  const handleDate = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setPostSaveAccountBook(prev => ({
      ...prev,
      transactedAt: value,
    }));
  };
  const handleAmount = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setPostSaveAccountBook(prev => ({
      ...prev,
      amount: Number(value),
    }));
  };
  const handleCategoryName = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setPostSaveAccountBook(prev => ({
      ...prev,
      categoryName: value,
    }));
  };
  const handleAssetName = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setPostSaveAccountBook(prev => ({
      ...prev,
      assetName: value,
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
            onChange={handleDate}
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
            onClick={() => setShowSeparatedCategory(!showSeparatedCategory)}
            onChange={handleCategoryName}
            readonly={true}
          />
          <LabelInput
            type={"text"}
            label={"자산"}
            inputId={"assetName"}
            value={postSaveAccountBook.assetName}
            placeholder={"결제 수단을 선택해주세요."}
            onClick={() => setShowSeparatedCategory(!showSeparatedCategory)}
            onChange={handleAssetName}
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
          <LabelInput
            type={"text"}
            label={"주소"}
            inputId={"address"}
            value={postSaveAccountBook.address}
            placeholder={"주소를 입력해주세요."}
            onChange={handleAddress}
          />
        </div>
        {showSeparatedCategory && <SeparatedCategory />}
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
