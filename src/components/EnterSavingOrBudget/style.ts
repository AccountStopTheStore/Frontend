import { ChallengeHeight } from "@/src/assets/height";
import { theme } from "@/src/assets/theme";
import styled from "@emotion/styled";

const Container = styled.div`
  height: calc(${ChallengeHeight}px);

  position: relative;
`;

const EnterContainer = styled.div`
  width: 100%;
  padding: 0 20px;

  position: absolute;
  top: 125px;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;

  > button {
    width: 100%;
    margin: 0;
  }
`;
const Input = styled.input`
  border: none;
  text-align: center;
  border-bottom: 1px solid ${theme.font_color.gray2};
  margin-bottom: 20px;
`;

export const EnterSavingOrBudgetUI = {
  Container,
  EnterContainer,
  Input,
};
