import { CreateCategory } from "@/src/@types/models/createCategory";
import { APIInstance } from "./instance";
import { GetCategories } from "@/src/@types/models/getCategories";
import { UpdateCategory } from "@/src/@types/models/updateCategory";
import { DeleteCategory } from "@/src/@types/models/deleteCategory";

const CATEGORIES = "/categories";
export const categoryAPI = {
  /** COMPLETED: getCategory GET 요청하기 */
  getCategory: () => {
    return APIInstance.get<GetCategories>(CATEGORIES);
  },
  /** COMPLETED: createCategory POST 요청하기 */
  createCategory: (categoryName: string, categoryType: string) => {
    return APIInstance.post<CreateCategory>(CATEGORIES, {
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
    return APIInstance.put<UpdateCategory>(CATEGORIES + `/${categoryId}`, {
      categoryName: categoryName,
      categoryType: categoryType,
    });
  },
  /** COMPLETED: deleteCategory DELETE 요청하기 */
  deleteCategory: (categoryId: number) => {
    return APIInstance.delete<DeleteCategory>(CATEGORIES + `/${categoryId}`);
  },
};
