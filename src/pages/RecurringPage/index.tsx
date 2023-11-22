import CommonButton from "@/src/components/Common/CommonButton";
import Header from "@/src/components/Common/Header";
import { RecurringUI } from "@/src/components/Recurring/style";

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

  const handleButtonClick = (item: string) => {
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
      <RecurringUI.Background>
        <div>
          {recurringItems.map((item, index) => (
            <CommonButton
              key={index}
              children={item}
              onClick={() => handleButtonClick(item)}
            />
          ))}
        </div>
      </RecurringUI.Background>
    </>
  );
}

export default RecurringPage;
