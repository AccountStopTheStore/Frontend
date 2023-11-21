interface DisplayMarkerProps {
  map: any;
  locPosition: kakao.maps.LatLng;
  message: string;
  markerImageURL: string;
  markerImageSize: {
    width: number;
    height: number;
  };
}

function DisplayMarker({
  map,
  locPosition,
  message,
  markerImageURL,
  markerImageSize,
}: DisplayMarkerProps) {
  // 마커 이미지 사이즈
  const markerSize = new window.kakao.maps.Size(
    markerImageSize.width,
    markerImageSize.height
  );

  // 마커 이미지 설정
  const markerImage = new window.kakao.maps.MarkerImage(
    markerImageURL,
    markerSize
  );

  // 마커 생성
  const marker = new window.kakao.maps.Marker({
    map: map,
    position: locPosition,
    image: markerImage,
  });

  const iwContent = `<div style="width:150px;text-align:center;padding:6px 0;">${message}</div>`;

  // 인포윈도우 생성
  const infowindow = new window.kakao.maps.InfoWindow({
    content: iwContent,
  });

  // 마커 이벤트 등록
  const hanldeMarkerClick = () => {
    console.log("마커 클릭");
  };

  kakao.maps.event.addListener(marker, "mouseover", function () {
    infowindow.open(map, marker);
  });
  kakao.maps.event.addListener(marker, "mouseout", function () {
    infowindow.close();
  });
  kakao.maps.event.addListener(marker, "click", hanldeMarkerClick);

  return null;
}

export default DisplayMarker;
