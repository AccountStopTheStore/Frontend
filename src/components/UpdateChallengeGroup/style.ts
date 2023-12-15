import { ApplicationHeight, ChallengeHeight } from "@/src/assets/height";
import { theme } from "@/src/assets/theme";
import styled from "@emotion/styled";
import { Button } from "@mui/material";

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

const ModalBackgroundContainer = styled.div`
  width: 100%;
  height: calc(${ApplicationHeight}px);
  background-color: rgba(134, 142, 150, 0.7);

  position: absolute;
  top: 0;
`;

const ModalContainer = styled.div`
  width: 350px;
  background-color: ${theme.font_color.white};

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  > h6 {
    height: 69px;
    ${theme.font_style.bold_large};
    border-bottom: 1px solid ${theme.font_color.gray2};
    display: flex;
    align-items: center;
    padding-left: 20px;
  }
  > ul li {
    border-bottom: 1px solid ${theme.font_color.gray2};
  }
`;

const ModalButton = styled(Button)`
  width: 100%;
  ${theme.font_style.light_medium};
  color: ${theme.font_color.black};

  display: flex;
  justify-content: flex-start;
  padding-left: 20px;
`;

export const UpdateChallengeGroupUI = {
  Container,
  ModalBackgroundContainer,
  ModalContainer,
  ModalButton,
};
