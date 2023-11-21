import { useEffect, useRef, useState } from "react";
import { MapUI } from "./style";
import DisplayMarker from "../DisplayMarker";
import { AccountsData } from "../Common/DayIncomeExpenseInfos";
import BackToCenterIcon from "@/public/icon/BackToCenter.svg";

declare global {
  interface Window {
    kakao: any;
  }
}

interface onLocationChangeCallBack {
  onLocationChange: (lat: number, lng: number) => void;
  data: AccountsData[];
}

function KakaoMap({ onLocationChange, data }: onLocationChangeCallBack) {
  const { kakao } = window;
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [currentLocation, setCurrentLocation] =
    useState<kakao.maps.LatLng | null>(null);

  const [message, setMessage] = useState<HTMLDivElement | string>("");

  /** 카카오 맵 불러오기 */
  useEffect(() => {
    const container = mapRef.current;
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 4, //100m
    };
    // 지도 객체 생성
    const mapContainer = new kakao.maps.Map(container, options);
    setMap(mapContainer);

    // Zoom Control 생성 및 추가 (오른쪽 상단에 표시)
    const zoomControl = new kakao.maps.ZoomControl();
    mapContainer.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    /** geolocation을 이용한 현재 위치 */
    // HTML5의 geolocation으로 사용할 수 있는지 확인
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position: any) => {
        const lat = position.coords.latitude; // 위도
        const lng = position.coords.longitude; // 경도
        const locPosition = new kakao.maps.LatLng(lat, lng);

        setCurrentLocation(locPosition);
        onLocationChange(lat, lng);
      });
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을 때 마커 표시 위치와 인포윈도우 내용 설정
      const locPosition = new kakao.maps.LatLng(33.450701, 126.570667);
      const errorMessage = "geolocation을 사용할 수 없습니다.";

      setCurrentLocation(locPosition);
      setMessage(errorMessage);
      console.error("error: ", errorMessage);
    }
  }, []);

  /**  마커 표시 */
  useEffect(() => {
    /** 중심 좌표 마커 표시 */
    if (map && currentLocation) {
      DisplayMarker({
        map: map,
        locPosition: currentLocation,
        message: "현재위치",
        markerImageURL: "/public/icon/Center.svg",
        markerImageSize: { width: 50, height: 50 },
      });

      // 지도 중심좌표를 접속위치로 변경
      map.setCenter(currentLocation);

      /** 중심 좌표 외 장소 마커들 표시 */
      if (data && data.length > 0) {
        data.forEach(item => {
          const location = new kakao.maps.LatLng(item.latitude, item.longitude);
          DisplayMarker({
            map: map,
            locPosition: location,
            message: item.transactionDetail,
            markerImageURL:
              "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
            markerImageSize: { width: 24, height: 35 },
          });
        });
      }
    }
  }, [map, currentLocation, data, kakao.maps.LatLng]);

  const goBackToCenter = () => {
    map.panTo(currentLocation);
  };

  return (
    <div>
      <MapUI.MapContainer ref={mapRef}>
        <MapUI.BackToCenterButton onClick={goBackToCenter}>
          <img src={BackToCenterIcon} alt="" />
        </MapUI.BackToCenterButton>
      </MapUI.MapContainer>
    </div>
  );
}

export default KakaoMap;
