import CommonButton from "@/src/components/Common/CommonButton";
import Header from "@/src/components/Common/Header";
import { RecurringPageUI } from "@/src/pages/RecurringPage/style";
import { useRecoilState } from "recoil";
import { saveAccountBookAtom } from "@/src/hooks/recoil/useSaveAccountBook";
import { useNavigate } from "react-router-dom";
import { btnLabelStateAtom } from "@/src/hooks/recoil/btnLabelState";

function RecurringPage() {
  const recurringItems = [
    "매일",
    "주중",
    "주말",
    "매주",
    "2주마다",
    "4주마다",
    " 매월",
    "월말",
    "2개월마다",
    "3개월마다",
    "4개월마다",
    "6개월마다",
    "1년마다",
  ];

  const [, setPostSaveAccountBook] = useRecoilState(saveAccountBookAtom);
  const [, setBtnLabel] = useRecoilState<string>(btnLabelStateAtom);
  const navigate = useNavigate();

  const handleButtonClick = (item: string) => {
    setPostSaveAccountBook(prev => ({
      ...prev,
      recurringType: item,
    }));
    setBtnLabel("반복");
    navigate("/recordAccountBook");

    console.log(`${item} 클릭`);
  };

  return (
    <>
      <Header
        pageName="반복"
        isBackButton={false}
        isSearchButton={false}
        isFilterButton={false}
        isAddButton={false}
        isMoreButton={false}
      />
      <RecurringPageUI.Background>
        <div>
          {recurringItems.map((item, index) => (
            <CommonButton
              key={index}
              children={item}
              onClick={() => handleButtonClick(item)}
            />
          ))}
        </div>
      </RecurringPageUI.Background>
    </>
  );
}

export default RecurringPage;
