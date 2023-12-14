import { useDaumPostcodePopup } from "react-daum-postcode";
import { DaumPostUI } from "./style";
import { useRecoilState } from "recoil";
import { saveAccountBookAtom } from "@/src/hooks/recoil/useSaveAccountBook";

interface DaumPostcodeData {
  address: string;
  roadAddress: string;
  jibunAddress: string;
  bname: string;
  buildingName: string;
  apartment: "Y" | "N";
  userSelectedType: "R" | "J";
}

function DaumPost() {
  const [, setPostSaveAccountBook] = useRecoilState(saveAccountBookAtom);

  const scriptURL =
    "https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
  const open = useDaumPostcodePopup(scriptURL);

  const handleComplete = (data: DaumPostcodeData) => {
    let fullAddress = ""; // 주소 변수
    let extraAddress = ""; // 추가될 주소

    //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
    // 사용자가 도로명 주소를 선택했을 경우
    if (data.userSelectedType === "R") {
      fullAddress = data.roadAddress;
    } else {
      fullAddress = data.jibunAddress;
    }

    // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
    if (data.userSelectedType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      // 건물명이 있고, 공동주택일 경우 추가한다.
      if (data.buildingName !== "" && data.apartment === "Y") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
    }
    fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";

    setPostSaveAccountBook(prev => ({
      ...prev,
      address: fullAddress,
    }));
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <DaumPostUI.AddressButton type="button" onClick={handleClick}>
      주소 찾기
    </DaumPostUI.AddressButton>
  );
}

export default DaumPost;
