/** 메인 로직은 아니지만,
 * 코드 작성 시 자주 사용하게 될 함수를 따로 정리한 파일 */

/** COMPLETED: (index.tsx) 회계식으로 숫자 표현하기
 * 세 자리씩 끊어서 쉼표 사용하는 방식
 * 음수까지 표현
 * 소수점 두 번째자리까지 표현
 * index.tsx에 사용하는 경우를 생각하고 제작 */
export const ChangeNumberForAccounting = (number: number) => {
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
  } else if (!hasDecimal) {
    return `${integerPart}`;
  }
};

/** COMPLETED: (index.tsx) 수입과 지출의 합계 결과 표현하기 */
export const CalculateTotal = (income: number | "", expense: number | "") => {
  if (income === "" || expense === "") return;

  const total = income - expense;

  return ChangeNumberForAccounting(total);
};

/** COMPLETED: 백분율(Percentage) 계산하기
 * 소수점 없이 정수로 계산
 */
export const CalculatePercentage = (numerator: number, denominator: number) => {
  return `${Math.floor((numerator / denominator) * 100)}%`;
};

/** COMPLETED: '오전/오후 00:00' 형태로 시간 구성하기 */
export const ChangeTime = (time: string | Date) => {
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
/** COMPLETED: '0000.00.00 ~ 0000.00.00'로 달 전체 일일 표시하기 */
export const ChangeMonthPeriod = (time: string) => {
  /* 1. Date 객체로 변환 */
  const date = new Date(time);

  /* 2. 년월일 형태로 변경 */
  const firstYearsMonthDate = new Date(date.getFullYear(), date.getMonth(), 1);
  const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);
  const lastYearsMonthDate = new Date(nextMonth.getTime() - 1);

  console.log("firstDate: ", firstYearsMonthDate);
  console.log("lastDate: ", lastYearsMonthDate);

  /* 3. Date 객체로 변환 */
  const firstYears = new Date(firstYearsMonthDate).getFullYear();
  const firstMonth = new Date(firstYearsMonthDate).getMonth();
  const firstDate = new Date(firstYearsMonthDate).getDate();
  const lastYears = new Date(lastYearsMonthDate).getFullYear();
  const lastMonth = new Date(lastYearsMonthDate).getMonth();
  const lastDate = new Date(lastYearsMonthDate).getDate();

  /* 4. 출력 */
  return `${firstYears}.${firstMonth}.${firstDate} ~ ${lastYears}.${lastMonth}.${lastDate}`;
};
/** COMPLETED: '0000.00.00 ~ 0000.00.00'로 달 전체 일일 표시하기 */
export const ChangeChallengePeriod = (
  startedAt: string,
  finishedAt: string
) => {
  /* 1. Date 객체로 변환 */
  const startedTotalDate = new Date(startedAt);
  const finishedTotalDate = new Date(finishedAt);

  /* 3. Date 객체로 변환 */
  const startedYears = new Date(startedTotalDate).getFullYear();
  const startedMonth = new Date(startedTotalDate).getMonth();
  const startedDate = new Date(startedTotalDate).getDate();
  const finishedYears = new Date(finishedTotalDate).getFullYear();
  const finishedMonth = new Date(finishedTotalDate).getMonth();
  const finishedDate = new Date(finishedTotalDate).getDate();

  /* 4. 출력 */
  return `${startedYears}.${startedMonth}.${startedDate} ~ ${finishedYears}.${finishedMonth}.${finishedDate}`;
};
/** COMPLETED: '00.00 ~ 00.00'로 표시하기 */
export const ChangeWeeks = (start: string, end: string) => {
  /* 1. Date 객체로 변환 */
  const startNewDate = new Date(start);
  const endNewDate = new Date(end);

  /* 2. 달 형태로 변경 */
  const startMonth = startNewDate.getMonth() + 1;
  const startDate = startNewDate.getDate();
  const endMonth = endNewDate.getMonth() + 1;
  const endDate = endNewDate.getDate();

  /* 3. 최종 formattedMonth 생성 및 반환 */
  const formattedWeeks = `${String(startMonth).padStart(2, "0")}.${String(
    startDate
  ).padStart(2, "0")} ~ ${String(endMonth).padStart(2, "0")}.${String(
    endDate
  ).padStart(2, "0")}`;

  return formattedWeeks;
};
/** COMPLETED: '월'만 표시하기 */
export const ChangeMonth = (time: string) => {
  /* 1. Date 객체로 변환 */
  const date = new Date(time);

  /* 2. 달 형태로 변경 */
  const month = date.getMonth() + 1;

  /* 3. 최종 formattedMonth 생성 및 반환 */
  const formattedMonth = `${month}월`;

  return formattedMonth;
};

/** COMPLETED: Cookie에 Token 가져오기 */
export const getAccessToken = () => {
  const COOKIE_VALUE = `${document.cookie}`;
  console.log("COOKIE_VALUE2: ", COOKIE_VALUE);
  // const PARTS = COOKIE_VALUE.split(";");
  // const ACCESS_TOKEN = PARTS[5].split("=")[1];

  // if (ACCESS_TOKEN) {
  //   return true;
  // } else {
  //   return false;
  // }
};

/** COMPLETED: 이메일 유효성 검사하기 */
export const isEmailValid = (email: string): boolean => {
  /** 이메일 형식을 정의한 정규표현식 */
  const emailRegex = /^\S+@\S+\.\S+$/;

  // 정규표현식을 사용하여 이메일 형식을 검증
  return emailRegex.test(email);
};

/** COMPLETED: 비밀번호 유효성 검사하기 */
export const isPasswordValid = (password: string) => {
  /* 최소 길이 검사 */
  if (password.length < 8) {
    return false;
  }

  /* 대/소문자, 숫자, 특수문자 포함 여부 검사 */
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  /* 모든 규칙을 만족해야 유효한 비밀번호로 판단 */
  return hasUppercase && hasLowercase && hasNumber && hasSpecialChar;
};
