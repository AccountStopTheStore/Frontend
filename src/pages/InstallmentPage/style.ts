import styled from "@emotion/styled";
import { theme } from "../../assets/theme";

const inputWrapperWidth = "100% - 72px";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div:first-of-type {
    margin: 55px 0 45px 0;
    ${theme.font_style.regular_medium};
    color: ${theme.font_color.gray3};
  }
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(${inputWrapperWidth});
  border-bottom: 1px solid ${theme.font_color.gray2};
  margin-bottom: 30px;
`;

const Input = styled.input`
  border: 0;
  margin-bottom: 3px;
  width: 40px;
  ${theme.font_style.regular_medium};
`;

export const InstallmentPageUI = { Container, InputWrapper, Input } as const;
