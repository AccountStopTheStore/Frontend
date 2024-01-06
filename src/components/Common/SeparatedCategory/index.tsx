import CancelPNG from "@/public/icon/WhiteCancel.png";
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
import { GetAsset } from "@/src/@types/models/getAssets";
import { getAssetsAtom } from "@/src/hooks/recoil/useGetAssets";
import { useEffect } from "react";
import { categoryAPI } from "@/src/core/api/category";
import { assetsAPI } from "@/src/core/api/assets";

interface SeparatedCategoryProps {
  title: string;
}

const buttonStyles = {
  height: "75px",
  border: `1px solid ${theme.font_color.gray2}`,
  borderRadius: "0",
  fontSize: "13px",
  textWrap: "balance",
};

function SeparatedCategory({ title }: SeparatedCategoryProps) {
  const navigate = useNavigate();
  const [categories, setCategories] = useRecoilState(getCategoriesAtom);
  const [isOpenSeparatedCategory, setIsOpenSeparatedCategory] = useRecoilState(
    openSeparatedCategoryAtom
  );
  const [assets, setAssets] = useRecoilState(getAssetsAtom);

  useEffect(() => {
    const getCategoriesData = async () => {
      try {
        const response = await categoryAPI.getCategory();

        console.log("response: ", response);
        if (response.status === 200) {
          setCategories(response.data);
        }
      } catch (error) {
        console.error("SeparatedCategory CategoriesData Error: ", error);
      }
    };
    getCategoriesData();

    const getAssetsData = async () => {
      try {
        const response = await assetsAPI.getAssets();

        if (response.status === 200) {
          setAssets(response.data);
        }
      } catch (error) {
        console.error("SeparatedCategory AssetsData Error: ", error);
      }
    };
    getAssetsData();
  }, []);

  const incomeCategories = categories.filter(
    category => category.categoryType === "수입"
  );
  const expenseCategories = categories.filter(
    category => category.categoryType === "지출"
  );

  const [postSaveAccountBook, setPostSaveAccountBook] =
    useRecoilState(saveAccountBookAtom);

  const handleWritingButton = () => {
    navigate("/setting");
  };

  const handleCancelButton = () => {
    setIsOpenSeparatedCategory({ isOpen: false });
  };

  const handleCategoryButton = (item: GetCategory | GetAsset) => {
    if (title === "카테고리 분류") {
      if (
        postSaveAccountBook.transactionType === "수입" ||
        postSaveAccountBook.transactionType === "지출"
      ) {
        setPostSaveAccountBook(prev => ({
          ...prev,
          categoryName: (item as GetCategory).categoryName,
        }));
      }
    }

    if (title === "결제수단 자산") {
      setPostSaveAccountBook(prev => ({
        ...prev,
        assetName: (item as GetAsset).assetName,
      }));
    }

    setIsOpenSeparatedCategory({ isOpen: false });
  };

  return (
    <>
      {isOpenSeparatedCategory.isOpen && (
        <SeparatedCategoryUI.Background>
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
            <SeparatedCategoryUI.GridWrapper>
              {title === "카테고리 분류" &&
                postSaveAccountBook.transactionType === "수입" && (
                  <SeparatedCategoryUI.GridContainer>
                    {incomeCategories.map(item => (
                      <Button
                        key={item.categoryId}
                        style={buttonStyles}
                        onClick={() => handleCategoryButton(item)}>
                        {item.categoryName}
                      </Button>
                    ))}
                  </SeparatedCategoryUI.GridContainer>
                )}
              {title === "카테고리 분류" &&
                postSaveAccountBook.transactionType === "지출" && (
                  <SeparatedCategoryUI.GridContainer>
                    {expenseCategories.map(item => (
                      <Button
                        key={item.categoryId}
                        style={buttonStyles}
                        onClick={() => handleCategoryButton(item)}>
                        {item.categoryName}
                      </Button>
                    ))}
                  </SeparatedCategoryUI.GridContainer>
                )}
              {title === "결제수단 자산" && (
                <SeparatedCategoryUI.GridContainer>
                  {assets.map(item => (
                    <Button
                      key={item.assetId}
                      style={buttonStyles}
                      onClick={() => handleCategoryButton(item)}>
                      {item.assetName}
                    </Button>
                  ))}
                </SeparatedCategoryUI.GridContainer>
              )}
            </SeparatedCategoryUI.GridWrapper>
          </div>
        </SeparatedCategoryUI.Background>
      )}
    </>
  );
}

export default SeparatedCategory;
