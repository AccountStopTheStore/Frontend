import styled from "@emotion/styled";
import { theme } from "../../../assets/theme";

const deleteMarginLength = "100% - 64px";

const Input = styled.input`
  width: calc(${deleteMarginLength});
  height: 40px;
  margin: 0 32px;
  padding: 10px 15px;

  border: 1px solid ${theme.font_color.gray2};
  ${theme.border_radius};

  // input을 클릭하여 활성화된 경우, 스타일 변경
  :focus {
    border: 2px solid ${theme.font_color.primary_green};
  }
  :focus::placeholder {
    color: ${theme.font_color.primary_green};
    ${theme.font_style.bold_small};
  }
`;

export const InputUI = {
  Input,
};
