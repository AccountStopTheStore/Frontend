import styled from "@emotion/styled";
import { theme } from "../../../assets/theme";

const LogoContainer = styled.div`
  width: 100px;

  margin-top: 32px;
  // 가운데 정렬
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const Title = styled.div`
  display: flex;
  ${theme.font_style.bold_medium};
`;

export const LogoUI = {
  LogoContainer,
  Title,
};
