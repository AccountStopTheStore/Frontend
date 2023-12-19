import { recordAccountBookHeight } from "@/src/assets/height";
import styled from "@emotion/styled";

const Container = styled.div`
  height: calc(${recordAccountBookHeight}px);

  > div:first-of-type {
    margin: 20px 20px;
  }
`;

export const UpdatePasswordUI = {
  Container,
};
