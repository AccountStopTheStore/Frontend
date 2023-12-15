import CancelPNG from "@/public/icon/Cancel.png";
import WhiteWriting from "@/public/icon/WhiteWriting.png";
import { Button } from "@mui/material";
import { theme } from "../../../assets/theme";
import { SeparatedCategoryUI } from "./style";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { openSeparatedCategoryAtom } from "@/src/hooks/recoil/useOpenSeparatedCategory";
import { getCategoriesAtom } from "@/src/hooks/recoil/useGetCategories";
import { saveAccountBookAtom } from "@/src/hooks/recoil/useSaveAccountBook";
import { GetCategory } from "@/src/@types/models/getCategories";

interface SeparatedCategoryProps {
  title?: string;
}

const buttonStyles = {
  height: "75px",
  border: `1px solid ${theme.font_color.gray2}`,
  borderRadius: "0",
};

function SeparatedCategory({ title }: SeparatedCategoryProps) {
  const navigate = useNavigate();
  const [, setIsOpenSeparatedCategory] = useRecoilState(
    openSeparatedCategoryAtom
  );
  const [categories] = useRecoilState(getCategoriesAtom);
  const [, setPostSaveAccountBook] = useRecoilState(saveAccountBookAtom);

  const handleWritingButton = () => {
    navigate("/setting");
  };

  const handleCancelButton = () => {
    setIsOpenSeparatedCategory({ isOpen: false });
  };

  const handleCategoryButton = (item: GetCategory) => {
    setPostSaveAccountBook(prev => ({
      ...prev,
      categoryName: item.categoryName,
    }));
  };

  return (
    <SeparatedCategoryUI.Container>
      <div>
        <SeparatedCategoryUI.CategoryHeader>
          <div>{title}</div>
          <div>
            <button
              type="button"
              onClick={handleWritingButton}
              style={{ display: "inline-block", marginRight: "20px" }}>
              <img src={WhiteWriting} alt="WritingPNG" />
            </button>
            <button type="button" onClick={handleCancelButton}>
              <img src={CancelPNG} alt="CancelPNG" />
            </button>
          </div>
        </SeparatedCategoryUI.CategoryHeader>
        <SeparatedCategoryUI.GridContainer>
          {categories.map(item => (
            <Button
              key={item.categoryId}
              style={buttonStyles}
              onClick={() => handleCategoryButton(item)}>
              {item.categoryName}
            </Button>
          ))}
        </SeparatedCategoryUI.GridContainer>
      </div>
    </SeparatedCategoryUI.Container>
  );
}

export default SeparatedCategory;
