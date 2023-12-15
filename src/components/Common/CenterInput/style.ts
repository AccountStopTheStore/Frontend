import { theme } from "@/src/assets/theme";
import styled from "@emotion/styled";

const CenterInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 85px 36px 20px;

  border-bottom: 1px solid ${theme.font_color.gray2};
`;

const CenterInput = styled.input`
  text-align: center;
  ${theme.font_style.regular_medium};

  border: none;
`;

const Unit = styled.span``;

export const CenterInputUI = {
  CenterInputContainer,
  CenterInput,
  Unit,
};
