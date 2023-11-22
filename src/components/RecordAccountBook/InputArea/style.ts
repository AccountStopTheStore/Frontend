import styled from "@emotion/styled";
import { theme } from "../../../assets/theme";

const barWidth = "100% - 40px";

const Container = styled.div`
  width: inherit;
  padding: 10px 20px 0;
  border-top: 1px solid ${theme.font_color.gray2};
`;

const Wrapper = styled.div`
  margin-bottom: 50px;

  &::after {
    content: "";
    position: absolute;
    width: calc(${barWidth});
    height: 1px;
    background-color: ${theme.font_color.gray2};
    top: 58%;
  }
`;

const LabelInputWrapper = styled.div`
  position: relative;
`;

const RecurringInstallmentBtn = styled.button`
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

const MemoArea = styled.div`
  margin-bottom: 25px;
`;

const MemoInputWrapper = styled.div`
  position: relative;
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

export const InputAreaUI = {
  Container,
  Wrapper,
  LabelInputWrapper,
  RecurringInstallmentBtn,
  WonUnit,
  MemoArea,
  MemoInputWrapper,
  AddImageButtonLabel,
} as const;
