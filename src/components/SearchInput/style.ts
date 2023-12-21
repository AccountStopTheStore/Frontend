import styled from "@emotion/styled";
import { theme } from "@/src/assets/theme";

export const inputWidth = "100% - 45px";

const Container = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid ${theme.font_color.gray2};
  padding: 0 20px;
  display: flex;
  jutify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 46px;
  display: flex;
  align-items: center;
  background-color: ${theme.font_color.gray1};
  ${theme.border_radius};
  padding: 0 10px;

  img {
    width: 20px;
    height: 20px;
  }
`;

const Input = styled.input`
  width: calc(${inputWidth});
  height: 30px;
  background-color: transparent;
  padding: 0 10px;
  margin-right: 5px;
  border: none;
  ${theme.font_style.regular_medium};

  &::placeholder {
    ${theme.font_style.regular_small};
    color: ${theme.font_color.gray4};
  }

  /* x버튼 없애기*/
  /* IE인 경우*/
  &::-ms-clear,
  &::-ms-reveal {
    display: noen;
  }

  /* 크롬의 경우 */
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }
`;

const CancleButton = styled.button`
  width: 20px;
  height: 20px;
`;

export const SearchInputUI = {
  Container,
  Wrapper,
  Input,
  CancleButton,
} as const;
