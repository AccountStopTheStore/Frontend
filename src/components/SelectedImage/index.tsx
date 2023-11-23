import { theme } from "@/src/assets/theme";
import { useEffect, useState } from "react";
// import { checkGreenColor } from "../InputArea";
import RecurringICon from "../RecurringIcon";
import { SelecteImageUI } from "./style";
import CloseSVG from "@/public/icon/Close.svg";
import { imageAPI } from "@/src/core/api/image";
import { useRecoilState } from "recoil";
import { saveAccountBookAtom } from "@/src/hooks/recoil/useSaveAccountBook";
import { uploadImageFileAtom } from "@/src/hooks/recoil/useUploadImageFile";

function SelectedImage() {
  const [isReceipt, setIsReceipt] = useState<boolean>(false);
  const [, setPostSaveAccountBook] = useRecoilState(saveAccountBookAtom);
  const [selectedImageFile, setSelectedImageFile] =
    useRecoilState(uploadImageFileAtom);

  const handleIsReceiptButton = () => {
    setIsReceipt(!isReceipt);
    handleUploadImage();
  };

  const handleCloseButton = () => {
    setSelectedImageFile(prev => ({
      ...prev,
      isUploadImage: false,
      selectedImageFile: null,
    }));
  };

  /** COMPLETED: 이미지 전송하기 */
  const handleUploadImage = () => {
    if (selectedImageFile) {
      const jsonData = JSON.stringify({ isReceipt });
      const imageFile = selectedImageFile.selectedImageFile;

      if (imageFile === null) return;

      imageAPI
        .imageUpload(jsonData, imageFile)
        .then(response => {
          console.log("imageUpload response: ", response);

          /** COMPLETED: image OCR 결과를 input에 사용되고 있는 recoil state에 값으로 대체하기 */
          setPostSaveAccountBook(prev => ({
            ...prev,
            address: response.data.ocrResult.address,
            amount: response.data.ocrResult.amount,
            transactedAt: response.data.ocrResult.date,
            transactionDetail: response.data.ocrResult.vendor,
          }));
        })
        .catch(error => {
          console.error("이미지 전송 실패:", error);
        });
    }
  };

  useEffect(() => {
    // isReceipt가 변경될 때마다 handlUploadImage 호출
    handleUploadImage();
    console.log("isReceipt: ", isReceipt);
  }, [isReceipt]);

  return (
    <SelecteImageUI.Container>
      {selectedImageFile.isUploadImage ? (
        <div>
          <SelecteImageUI.IsReceiptButton
            type="button"
            onClick={handleIsReceiptButton}>
            <div style={{ fontWeight: isReceipt ? "bold" : 300 }}>
              <RecurringICon
                fill={isReceipt ? "#3cb043" : theme.font_color.gray2}
              />
              영수증
            </div>
          </SelecteImageUI.IsReceiptButton>
          <SelecteImageUI.SelectedImageArea
            src={selectedImageFile.selectedImage}
            alt="영수증"
            style={{ maxWidth: "100%" }}
          />
          <SelecteImageUI.CloseButton type="button" onClick={handleCloseButton}>
            <img src={CloseSVG} alt="닫기 버튼" />
          </SelecteImageUI.CloseButton>
        </div>
      ) : (
        <span>영수증 이미지 미리보기</span>
      )}
    </SelecteImageUI.Container>
  );
}

export default SelectedImage;
