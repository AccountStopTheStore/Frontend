import styled from "@emotion/styled";
import { theme } from "../../assets/theme";

const inputWidth = "100% - 72px";

const Container = styled.div`
  margin-top: 75px;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  border: 0;
  border-bottom: 1px solid ${theme.font_color.gray2};
  width: calc(${inputWidth});
  height: 40px;
  ${theme.font_style.regular_medium};

  padding-left: 38%;
  margin-bottom: 25px;
`;

export const InstallmentPageUI = { Container, Form, Input } as const;
