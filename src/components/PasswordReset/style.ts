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

export const PasswordResetUI = {
  SectionContainer,
  Header,
};
