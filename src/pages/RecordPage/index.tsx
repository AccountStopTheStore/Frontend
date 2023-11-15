import Layout from "@/src/components/Common/Layout";
import Header from "@/src/components/Common/Header";
import NavigationItems from "@/src/components/Common/NavigationItems";
import KakaoMap from "@/src/components/Record/KakaoMap";
import RecordInfos from "@/src/components/Record/RecordInfos";

function RecordPage() {
  return (
    <Layout>
      <Header
        pageName="기록지"
        isBackButton={true}
        isFilterButton={false}
        isMoreButton={false}
      />
      <KakaoMap />
      <RecordInfos />
      <NavigationItems />
    </Layout>
  );
}

export default RecordPage;
