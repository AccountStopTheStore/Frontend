import { APIInstance } from "./instance";

const CATEGORIES = "/categories";
export const categoryAPI = {
  /** COMPLETED: getCategory GET 요청하기 */
  getCategory: () => {
    return APIInstance.get(CATEGORIES);
  },
  /** COMPLETED: createCategory POST 요청하기 */
  createCategory: (categoryName: string, categoryType: string) => {
    return APIInstance.post(CATEGORIES, {
      categoryName: categoryName,
      categoryType: categoryType,
    });
  },
  /** COMPLETED: updateCategory PUT 요청하기 */
  updateCategory: (
    categoryId: number,
    categoryName: string,
    categoryType: string
  ) => {
    return APIInstance.put(CATEGORIES + `/${categoryId}`, {
      categoryName: categoryName,
      categoryType: categoryType,
    });
  },
  /** COMPLETED: deleteCategory DELETE 요청하기 */
  deleteCategory: (categoryId: number) => {
    return APIInstance.delete(CATEGORIES + `/${categoryId}`);
  },
};
