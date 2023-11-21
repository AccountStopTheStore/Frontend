import Header from "@/src/components/Common/Header";
import KakaoMap from "@/src/components/Record/KakaoMap";
import RecordInfos from "@/src/components/Record/RecordInfos";

function RecordPage() {
  return (
    <>
      <Header
        pageName="기록지"
        isBackButton={true}
        isFilterButton={false}
        isMoreButton={false}
        isSearchButton={false}
        isAddButton={false}
      />
      <KakaoMap />
      <RecordInfos />
    </>
  );
}

export default RecordPage;
