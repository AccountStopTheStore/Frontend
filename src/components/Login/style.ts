import { theme } from "@/src/assets/theme";
import styled from "@emotion/styled";
import { deleteMarginLength } from "../Common/Input/style";

const deleteMarginWidth = "390px - 64px";

const SectionContainer = styled.section`
  height: inherit;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  >div: first-of-type {
    width: 100%;
    > * {
      display: block;
      margin-bottom: 12px;
    }
    > button {
      margin-bottom: 24px;
    }
  }
`;

const Header = styled.h1`
  margin-bottom: 33px;
`;

const ErrorContainer = styled.div`
  width: calc(${deleteMarginLength});
  margin: 0 32px;
`;

const OtherPageContainer = styled.div`
  width: calc(${deleteMarginWidth});
  margin-bottom: 40px;

  display: flex;
  justify-content: space-evenly;
  > button {
    width: 100%;
    display: block;
  }
`;

const DivisionLine = styled.div`
  background-color: ${theme.font_color.white};
  color: ${theme.font_color.gray3};

  margin-bottom: 40px;

  position: relative;
  z-index: 1;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -96px;
    transform: translate(-50%, -50%);
    z-index: -1;

    width: calc((${deleteMarginWidth}) / 3);
    border: 1px solid ${theme.font_color.gray2};
  }
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -96px;
    transform: translate(+50%, -50%);
    z-index: -1;

    width: calc((${deleteMarginWidth}) / 3);
    border: 1px solid ${theme.font_color.gray2};
  }
`;

export const LoginUI = {
  SectionContainer,
  Header,
  ErrorContainer,
  OtherPageContainer,
  DivisionLine,
};
