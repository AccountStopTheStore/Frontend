import { imageUploadResponseAtomProps } from "@/src/hooks/recoil/useOcrResult";
import { APIInstance } from "./instance";

export const imageAPI = {
  /** TODO: imageUpload POST 요청하기
   * json-data, image-file Parameters를 어떻게 받아오는지 알아보기
   */
  imageUpload: (jsonData: string, imageFile: File) => {
    const formData = new FormData();
    const boundary = "myboundary";

    formData.append("json-data", jsonData);
    formData.append("image-file", imageFile);

    return APIInstance.post<imageUploadResponseAtomProps>(
      "/images",
      formData,
      {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${boundary}`,
        },
      }
      //`/images?json-data=${jsonData}&image-file=${imageFile}`
      // `/images/${jsonData}/${imageFile}`
    );
  },
  /** COMPLETED: getImage GET 요청하기 */
  getImage: (imageFileName: string) => {
    return APIInstance.get(`images/${imageFileName}`);
  },
};
