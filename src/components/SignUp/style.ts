import { theme } from "@/src/assets/theme";
import styled from "@emotion/styled";

const SectionContainer = styled.section`
  height: inherit;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > form {
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
  color: ${theme.font_color.primary_red};
  ${theme.font_style.bold_small}
`;

export const SignUpUI = {
  SectionContainer,
  Header,
  ErrorContainer,
};
