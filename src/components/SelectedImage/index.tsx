import { theme } from "@/src/assets/theme";
import RecurringICon from "../RecurringIcon";
import { SelecteImageUI } from "./style";
import CloseSVG from "@/public/icon/Close.svg";
import { imageAPI } from "@/src/core/api/image";
import { useRecoilState } from "recoil";
import { saveAccountBookAtom } from "@/src/hooks/recoil/useSaveAccountBook";
import {
  isReceiptAtom,
  uploadImageFileAtom,
} from "@/src/hooks/recoil/useUploadImageFile";
import { checkGreenColor } from "../Common/LabelInput";

function SelectedImage() {
  const [isReceipt, setIsReceipt] = useRecoilState(isReceiptAtom);

  const [, setPostSaveAccountBook] = useRecoilState(saveAccountBookAtom);
  const [selectedImageFile, setSelectedImageFile] =
    useRecoilState(uploadImageFileAtom);

  const handleIsReceiptButton = () => {
    setIsReceipt(!isReceipt);
    handleSendReceiptImage();
  };

  const handleCloseButton = () => {
    setSelectedImageFile(prev => ({
      ...prev,
      isUploadImage: false,
      selectedImageFile: null,
    }));
    setPostSaveAccountBook(prev => ({
      ...prev,
      imageIds: [],
    }));
  };

  /** COMPLETED: 이미지 전송후 OCR 결과 보여주기 */
  const handleSendReceiptImage = () => {
    if (selectedImageFile) {
      const jsonData = JSON.stringify({ isReceipt });
      const imageFile = selectedImageFile.selectedImageFile;

      if (imageFile === null) {
        return;
      } else {
        if (isReceipt === true) {
          imageAPI
            .imageUpload(jsonData, imageFile)
            .then(response => {
              console.log("영수증 이미지 전송 성공: ", response);

              /** COMPLETED: image OCR 결과를 input에 사용되고 있는 recoil state에 값으로 대체하기 */
              setPostSaveAccountBook(prev => ({
                ...prev,
                address: response.data.ocrResult.address,
                amount: response.data.ocrResult.amount,
                imageIds: [response.data.ocrResult.imageId],
                transactedAt: response.data.ocrResult.date,
                transactionDetail: response.data.ocrResult.vendor,
              }));
            })
            .catch(error => {
              console.error("영수증 이미지 전송 실패:", error);
            });
        }
      }
    }
  };

  return (
    <SelecteImageUI.Container>
      {selectedImageFile.isUploadImage ? (
        <div>
          <SelecteImageUI.IsReceiptButton
            type="button"
            onClick={handleIsReceiptButton}>
            <div style={{ fontWeight: isReceipt ? "bold" : 300 }}>
              <RecurringICon
                fill={isReceipt ? checkGreenColor : theme.font_color.gray2}
              />
              영수증
            </div>
          </SelecteImageUI.IsReceiptButton>
          <SelecteImageUI.SelectedImageArea
            src={selectedImageFile.selectedImage}
            alt={isReceipt ? "영수증" : "이미지"}
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
