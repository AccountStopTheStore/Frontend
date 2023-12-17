type AssetTypeSymbol =
  | "현금"
  | "신한은행"
  | "국민은행"
  | "우리은행"
  | "하나은행"
  | "기업은행"
  | "농협은행"
  | "신한카드"
  | "현대카드"
  | "삼성카드"
  | "KB국민카드"
  | "NH농협카드"
  | "우리카드"
  | "롯데카드"
  | "비씨카드"
  | "하나카드";
type AssetGroupSymbol = "현금" | "은행" | "카드";

export type { AssetGroupSymbol, AssetTypeSymbol };
