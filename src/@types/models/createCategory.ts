import { CategoryTypeSymbol } from "./categoryTypeSymbol";

/**
 * 카테고리 추가 Response Interface
 */
export type CreateCategory = {
  categoryId: number;
  categoryType: CategoryTypeSymbol;
  categoryName: string;
};
