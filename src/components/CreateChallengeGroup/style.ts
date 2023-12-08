import { ChallengeHeight } from "@/src/assets/height";
import { theme } from "@/src/assets/theme";
import styled from "@emotion/styled";

const Container = styled.div`
  height: calc(${ChallengeHeight}px);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    > div {
      padding: 30px 0;
      margin: 0 20px;
    }
    > div:nth-of-type(2) {
      border-bottom: 1px solid ${theme.font_color.gray2};
    }
    > div:nth-of-type(5) {
      border-bottom: 1px solid ${theme.font_color.gray2};
    }
  }

  > div:last-of-type {
    width: 100%;
    position: relative;
  }
`;

export const CreateChallengeGroupUI = {
  Container,
};
