import { CategoryTypeSymbol } from "./categoryTypeSymbol";

/**
 * 카테고리 수정 Response Interface
 */
export type UpdateCategory = {
  categoryType: CategoryTypeSymbol;
  categoryName: string;
};
