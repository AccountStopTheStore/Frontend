import { APIInstance } from "./instance";

export const imageAPI = {
  /** TODO: imageUpload POST 요청하기
   * json-data, image-file Parameters를 어떻게 받아오는지 알아보기
   */
  imageUpload: (jsonData: string, imageFile: string) => {
    return APIInstance.post(
      `/images?json-data=${jsonData}&image-file=${imageFile}`
      // `/images/${jsonData}/${imageFile}`
    );
  },
  /** COMPLETED: getImage GET 요청하기 */
  getImage: (imageFileName: string) => {
    return APIInstance.get(`images/${imageFileName}`);
  },
};
