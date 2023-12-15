import styled from "@emotion/styled";
import { theme } from "../../assets/theme";

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
    top: 54%;
  }
`;

const AddressArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  AddressArea,
  MemoArea,
  MemoInputWrapper,
  AddImageButtonLabel,
} as const;
