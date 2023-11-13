/** 메인 로직은 아니지만,
 * 코드 작성 시 자주 사용하게 될 함수 및 style을 따로 정리한 파일 */

/** COMPLETED: (index.tsx) 회계식으로 숫자 표현하기
 * 세 자리씩 끊어서 쉼표 사용하는 방식
 * index.tsx에 사용하는 경우를 생각하고 제작 */
export const NumberForAccounting = (number: number) => {
  /* 1. 숫자를 문자열로 변환 */
  const numStr = String(number);

  /* 2. 소수점 확인 */
  const hasDecimal = numStr.includes(".");

  /* 3. 소주점 이하 숫자와 소수점 이상 숫자를 분리 */
  let integerPart = numStr;
  let decimalPart = "";

  if (hasDecimal) {
    [integerPart, decimalPart] = numStr.split(".");
  }

  /* 4. 정수 부분에 ',' 추가 */
  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  /* 5. 분리한 숫자값을 재조합 */
  if (hasDecimal) {
    return `${integerPart}.${decimalPart}`;
  } else {
    return integerPart;
  }
};

/** COMPLETED: (style.ts) content가 과도하게 길 때, ...으로 생략하기(JS로 구현) */
export const TruncateTextByWidth = (text: string, maxWidth: number) => {
  const ellipsis = "...";

  /* 문자열이 maxWidth보다 짧으면 그대로 반환 */
  if (text.length <= maxWidth) {
    return text;
  }

  /* maxWidth에 ellipsis 길이를 뺀 길이까지만 자르기 */
  const truncatedText = text.slice(0, maxWidth - ellipsis.length);

  /* 최종 결과에 ellipsis 추가 */
  return truncatedText + ellipsis;
};

/** COMPLETED: '오전/오후 00:00' 형태로 시간 구성하기 */
export const changeTime = (time: string) => {
  /* 1. Date 객체로 변환 */
  const date = new Date(time);

  /* 2. 시간 형태로 변경 */
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "오후" : "오전";
  const formattedHours = hours % 12 || 12; // 12시간 형식으로 변경

  /* 3. 최종 formattedTime 생성 및 반환 */
  const formattedTime = `${ampm} ${String(formattedHours).padStart(
    2,
    "0"
  )}:${String(minutes).padStart(2, "0")}`;

  return formattedTime;
};
