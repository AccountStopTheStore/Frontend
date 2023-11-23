import { CategoryTypeSymbol } from "./categoryTypeSymbol";

/**
 * 카테고리 조회 Response Interface
 */
export type GetCategories = GetCategory[];

export type GetCategory = {
  categoryId: number;
  categoryType: CategoryTypeSymbol;
  categoryName: string;
};
