import { GetNearbyAccountBooks } from "@/src/@types/models/getNearbyAccountBooks";
import Header from "@/src/components/Common/Header";
import NavigationItems from "@/src/components/Common/NavigationItems";
import KakaoMap from "@/src/components/KakaoMap";
import RecordInfos from "@/src/components/RecordInfos";
import { useEffect, useState } from "react";
import { AccountBookAPI } from "@/src/core/api/accountBook";
import { useRecoilValue } from "recoil";
import {
  currentLocationAtom,
  currentLocationDataProps,
} from "@/src/hooks/recoil/useCurrentLocation";

function RecordPage() {
  const [isRecordInfosVisible, setIsRecordInfosVisible] =
    useState<boolean>(false);
  const currentLatLng =
    useRecoilValue<currentLocationDataProps>(currentLocationAtom);

  const toggleRecordInfosVisibility = () => {
    setIsRecordInfosVisible(!isRecordInfosVisible);
  };

  /** getNearbyAccountBooks로 가져온 데이터 */
  const [nearbyAccountBooksData, setNearbyAccountBooksData] = useState<
    GetNearbyAccountBooks[]
  >([]);

  const getNearbyAccountBook = (lat: number, lng: number) => {
    AccountBookAPI.getNearbyAccountBooks(lat, lng)
      .then(response => {
        setNearbyAccountBooksData(response.data);
        console.log("기록지 수신 성공: ", response.data);
      })
      .catch(error => {
        console.error("기록지 수신 실패:", error);
      });
  };

  /** COMPLETED: 위도, 경도 현재 위치로 바꾸기 */
  useEffect(() => {
    getNearbyAccountBook(currentLatLng.lat, currentLatLng.lng);
  }, [currentLatLng]);

  return (
    <>
      <Header
        pageName="기록지"
        isSearchButton={false}
        isBackButton={false}
        isFilterButton={false}
        isAddButton={false}
        isMoreButton={false}
      />
      <KakaoMap
        data={nearbyAccountBooksData}
        toggleRecordInfosVisibility={toggleRecordInfosVisibility}
      />
      <RecordInfos isVisible={isRecordInfosVisible} />
      <NavigationItems />
    </>
  );
}

export default RecordPage;
