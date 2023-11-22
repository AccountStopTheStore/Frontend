import { theme } from "@/src/assets/theme";
import { useState } from "react";
import { checkGreenColor } from "../InputArea";
import RecurringICon from "../RecurringIcon";
import { SelecteImageUI } from "./style";
import CloseSVG from "@/public/icon/Close.svg";
import { imageAPI } from "@/src/core/api/image";

interface SelectedImageProps {
  selectedImages: string | null;
  setSelectedImages: (imageUrl: string | null) => void;
  selectedImageFile: File | null;
}

function SelectedImage({
  selectedImages,
  setSelectedImages,
  selectedImageFile,
}: SelectedImageProps) {
  const [isReceipt, setIsReceipt] = useState<boolean>(false);

  const handleIsReceiptButton = () => {
    setIsReceipt(!isReceipt);
    handlUploadImage();
  };

  const handleCloseButton = () => {
    setSelectedImages(null);
  };

  // 이미지 서버로 전송
  /** TODO: 전송시 302 에러 처리하기 */
  const handlUploadImage = () => {
    if (selectedImageFile) {
      const jsonData = JSON.stringify({ isReceipt });
      const imageFile = selectedImageFile;

      imageAPI
        .imageUpload(jsonData, imageFile)
        .then(response => {
          console.log("이미지 전송 성공: ", response);
        })
        .catch(error => {
          console.error("이미지 전송 실패:", error);
        });
    }
  };

  return (
    <SelecteImageUI.Container>
      {selectedImages ? null : <span>이미지 미리보기</span>}
      {selectedImages && (
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
            src={selectedImages}
            alt="영수증"
            style={{ maxWidth: "100%" }}
          />
          <SelecteImageUI.CloseButton type="button" onClick={handleCloseButton}>
            <img src={CloseSVG} alt="닫기 버튼" />
          </SelecteImageUI.CloseButton>
        </div>
      )}
    </SelecteImageUI.Container>
  );
}

export default SelectedImage;
