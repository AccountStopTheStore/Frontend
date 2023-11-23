import styled from "@emotion/styled";
import { theme } from "../../assets/theme";

const inputWrapperWidth = "100% - 72px";

const Container = styled.div`
  margin-top: 75px;

  div: first-of-type {
    display: flex;
    justify-content: center;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(${inputWrapperWidth});
  border-bottom: 1px solid ${theme.font_color.gray2};
  margin-bottom: 25px;

  span {
    ${theme.font_style.regular_medium}
  }
`;

const Input = styled.input`
  border: 0;
  width: 40px;
  height: 40px;
  ${theme.font_style.regular_medium};
  padding: 0 5px;
`;

export const InstallmentPageUI = { Container, InputWrapper, Input } as const;
