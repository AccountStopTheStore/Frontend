import styled from "@emotion/styled";
import { theme } from "../../../assets/theme";

const inputWidth = "100% - 73px";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  border: 1px solid red;
`;

const Label = styled.label`
  ${theme.font_style.regular_medium}
  color: ${theme.font_color.gray3};
  width: 73px;
`;

const Input = styled.input`
  padding: 0 0 6px 10px;
  border: none;
  border-bottom: 1px solid ${theme.font_color.gray2};
  ${theme.font_style.regular_medium}
  width: calc(${inputWidth});

  &::placeholder {
    ${theme.font_style.regular_small}
    color: ${theme.font_color.gray2}
  }
`;

export const LabelInputUI = {
  Container,
  Label,
  Input,
} as const;
