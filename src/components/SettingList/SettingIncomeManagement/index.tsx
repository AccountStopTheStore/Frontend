import { SettingListUI } from "./style";
import BlackWriting from "@/public/icon/BlackWriting.png";
import TrashCan from "@/public/icon/TrashCan.png";
import GreenCheck from "@/public/icon/GreenCheck.png";
import RedClose from "@/public/icon/RedCancel.png";
import { GetCategories } from "@/src/@types/models/getCategories";
import { categoryAPI } from "@/src/core/api/category";
import { getIncomeCategoriesAtom } from "@/src/hooks/recoil/useGetIncomeCategories";
import { ChangeEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";

function SettingIncomeManagement() {
  const [incomeCategories, setIncomeCategories] = useRecoilState<GetCategories>(
    getIncomeCategoriesAtom
  );

  useEffect(() => {
    const getIncomeData = async () => {
      try {
        const response = await categoryAPI.getCategory();
        if (response.status === 200) {
          const categories = response.data;
          const incomeCategories = categories.filter(
            v => v.categoryType === "수입"
          );
          setIncomeCategories(incomeCategories);
        }
      } catch (error) {
        console.error("Income error: ", error);
      }
    };
    getIncomeData();
  }, []);

  const [isEditState, setIsEditState] = useState(false);

  return (
    <>
      <SettingListUI.SettingContainer>
        <SettingListUI.SettingTitle>
          <span>수입 카테고리</span>
          <span></span>
        </SettingListUI.SettingTitle>
        <ul>
          {incomeCategories.map((category, index) => {
            const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
              const { value } = e.target;
              const updatedIncomeCategories = [...incomeCategories];
              updatedIncomeCategories[index] = {
                ...updatedIncomeCategories[index],
                categoryName: value,
              };

              setIncomeCategories(updatedIncomeCategories);
            };
            const handleGreenCheckButton = async () => {
              const updatedIncomeCategories = [...incomeCategories];
              const categoryId = updatedIncomeCategories[index].categoryId;
              const categoryName = updatedIncomeCategories[index].categoryName;
              const categoryType = updatedIncomeCategories[index].categoryType;
              try {
                const response = await categoryAPI.updateCategory(
                  categoryId,
                  categoryName,
                  categoryType
                );
                if (response.status === 200) {
                  setIsEditState(false);
                }
              } catch (error) {
                console.error("handleGreenCheckButton error: ", error);
              }
            };
            const handleDeleteButton = () => {
              const prev = [...incomeCategories];
              const deletedIncomeCategories = prev.filter(
                v => incomeCategories[index] !== v
              );

              setIncomeCategories(deletedIncomeCategories);
            };
            const handleSelectedCategory = () => {};
            return (
              <SettingListUI.SettingItem key={index}>
                {isEditState ? (
                  <input
                    type="text"
                    value={category.categoryName}
                    onChange={handleInputValue}
                  />
                ) : (
                  <span>{category.categoryName}</span>
                )}
                <span>
                  {isEditState ? (
                    <>
                      <button onClick={handleGreenCheckButton}>
                        <img src={GreenCheck} alt="GreenCheckPNG" />
                      </button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => setIsEditState(true)}>
                        <img src={BlackWriting} alt="BlackWritingPNG" />
                      </button>
                      <button onClick={handleDeleteButton}>
                        <img src={TrashCan} alt="TrashCanPNG" />
                      </button>
                    </>
                  )}
                </span>
              </SettingListUI.SettingItem>
            );
          })}
        </ul>
      </SettingListUI.SettingContainer>
    </>
  );
}

export default SettingIncomeManagement;
