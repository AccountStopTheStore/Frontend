import styled from "@emotion/styled";
import { theme } from "../../../assets/theme";
import { css } from "@emotion/react";

const Wrapper = styled.div`
  width: 123px;
  border: 1px solid ${theme.font_color.gray2};
  background-color: ${theme.font_color.white};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  position: absolute;
  top: 70%;
  right: 0;
  z-index: 1;
`;

const commButtonStyle = css`
  width: inherit;
  height: 37px;
  backgroundcolor: ${theme.font_color.white};
  color: ${theme.font_color.gray3};
  ${theme.font_style.regular_medium}
`;

const RecurringButton = styled.button`
  ${commButtonStyle}
  border-bottom: 1px solid ${theme.font_color.gray2};
`;

const InstallmentButton = styled.button`
  ${commButtonStyle}
`;

export const RecurringInstallmentButtonsUI = {
  Wrapper,
  RecurringButton,
  InstallmentButton,
} as const;
