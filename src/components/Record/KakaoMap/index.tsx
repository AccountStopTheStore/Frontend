import { useEffect, useRef } from "react";
import { MapUI } from "./style";

function KakaoMap() {
  const { kakao } = window;

  const mapRef = useRef<HTMLDivElement>(null); // map 객체를 표시할 div를 지정하기 위한 용도
  useEffect(() => {
    const container = mapRef.current;
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
      level: 3, // 지도의 확대 레벨
    };

    // 지도 객체 생성
    const map = new kakao.maps.Map(container, options);
  }, []);

  return <MapUI.MapContainer ref={mapRef}>KakaoMap</MapUI.MapContainer>;
}

export default KakaoMap;
