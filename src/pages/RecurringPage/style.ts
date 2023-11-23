import styled from "@emotion/styled";
import { theme } from "../../assets/theme";

const backgroundHeight = "100% - 77px";

const Background = styled.div`
  width: 100%;
  height: calc(${backgroundHeight});
  background-color: ${theme.font_color.gray1};
`;

export const RecurringPageUI = { Background } as const;
