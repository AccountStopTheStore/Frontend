import { GetNearbyAccountBooks } from "@/src/@types/models/getNearbyAccountBooks";
import Header from "@/src/components/Common/Header";
import NavigationItems from "@/src/components/Common/NavigationItems";
import KakaoMap from "@/src/components/KakaoMap";
import RecordInfos from "@/src/components/RecordInfos";
import { useEffect, useState } from "react";
import { AccountBookAPI } from "@/src/core/api/accountBook";

function RecordPage() {
  const exampleNearby = [
    {
      accountId: 1,
      address: "서울특별시 은평구 은평터널로 150 ",
      categoryName: "간식",
      assetName: "현금",
      amount: 2000000,
      transactionType: "지출",
      transactionDetail: "감자칩, 서신초등학교",
      memo: "맛있어요!",
      imageIds: [1, 2, 3],
      recurringType: "",
      createdAt: "2023-11-17 11:00:00",
      updatedAt: "",
      latitude: 37.5922940508,
      longitude: 126.90738231,
      installment: false,
      transactedAt: "",
    },
    {
      accountId: 2,
      address: "서울특별시 은평구 증산로 403-1",
      categoryName: "간식",
      assetName: "현금",
      amount: 1500,
      transactionType: "수입",
      transactionDetail: "몽소",
      memo: "맛있어요!",
      imageIds: [1, 2],
      recurringType: "",
      createdAt: "2023-11-17 13:00:00",
      updatedAt: "",
      latitude: 37.592355469552,
      longitude: 126.913642682037,
      installment: false,
      transactedAt: "",
    },
    {
      accountId: 3,
      address: "서울특별시 은평구 신사동 증산로 413",
      categoryName: "간식",
      assetName: "현금",
      amount: 1500,
      transactionType: "수입",
      transactionDetail: "신사초등학교",
      memo: "맛있어요!",
      imageIds: [1, 2],
      recurringType: "",
      createdAt: "2023-11-17 13:00:00",
      updatedAt: "",
      latitude: 37.5931409230026,
      longitude: 126.913846721415,
      installment: false,
      transactedAt: "",
    },
    {
      accountId: 4,
      address: "서울특별시 은평구 신사동 증산로 413",
      categoryName: "간식",
      assetName: "현금",
      amount: 1500,
      transactionType: "지출",
      transactionDetail: "설렁탕",
      memo: "맛있어요!",
      imageIds: [1, 2],
      recurringType: "",
      createdAt: "2023-11-17 13:00:00",
      updatedAt: "",
      latitude: 37.5931409230026,
      longitude: 126.913846721415,
      installment: false,
      transactedAt: "",
    },
  ];

  const [currentLatLng, setCurrentLatLng] = useState<{
    lat: number;
    lng: number;
  }>({ lat: 0, lng: 0 });

  // const [exampleData, setExampleData] = useState<GetNearbyAccountBooks[]>([]);
  // useEffect(() => {
  //   setExampleData(exampleNearby);
  // }, []);
  const [isRecordInfosVisible, setIsRecordInfosVisible] =
    useState<boolean>(false);

  const handleLocationChange = (lat: number, lng: number) => {
    setCurrentLatLng({ lat, lng });
  };

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

  useEffect(() => {
    getNearbyAccountBook(37.59305502696753, 126.91361917024199);
  }, []);

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
        onLocationChange={handleLocationChange}
        data={nearbyAccountBooksData}
        toggleRecordInfosVisibility={toggleRecordInfosVisibility}
      />
      <RecordInfos isVisible={isRecordInfosVisible} />
      <NavigationItems />
    </>
  );
}

export default RecordPage;
