import styled from "@emotion/styled";
import { theme } from "../../../assets/theme";

const inputWidth = "100% - 73px";

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  height: 45px;

  position: relative;
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

const RecurringInstallmentButton = styled.button`
  display: flex;
  align-items: center;

  ${theme.font_style.regular_small};
  color: ${theme.font_color.gray3};
  position: absolute;
  top: 25%;
  right: 0;
  z-index: 1;
`;

const WonUnit = styled.span`
  ${theme.font_style.regular_medium}
  position: absolute;
  top: 25%;
  right: 0;
`;

const AddImageButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  right: 0;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const LabelInputUI = {
  InputContainer,
  Label,
  Input,
  RecurringInstallmentButton,
  WonUnit,
  AddImageButtonLabel,
} as const;
