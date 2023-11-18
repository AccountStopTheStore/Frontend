import { ChallengeBottomListHeight } from "@/src/assets/height";
import { theme } from "@/src/assets/theme";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const BottomContainer = styled.div`
  height: calc(${ChallengeBottomListHeight}px);

  display: flex;
  flex-direction: column;
`;

const ChattingList = styled.ul`
  flex: 1;

  background-color: ${theme.font_color.primary_green};
`;

const ChattingInputContainer = styled.div`
  height: 50px;
  padding: 0 20px;

  display: flex;
  align-items: center;
`;

const ChattingInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid ${theme.font_color.gray2};
  height: 32px;

  margin-right: 20px;
`;

const SendButton = styled(Button)`
  background-color: ${theme.font_color.primary_green};
  border-radius: 50%;
  min-width: 0;
  min-height: 0;

  width: 35px;
  height: 35px;
`;

export const ChattingUI = {
  BottomContainer,
  ChattingList,
  ChattingInputContainer,
  ChattingInput,
  SendButton,
};
