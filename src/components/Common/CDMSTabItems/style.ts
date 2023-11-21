import { theme } from "@/src/assets/theme";
import styled from "@emotion/styled";

const UnorderedListContainer = styled.ul`
  width: 100%;
  height: 50px;
  padding: 0 20px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  border-bottom: 1px solid ${theme.font_color.gray2};
`;

export const CDMSTabItemsUI = {
  UnorderedListContainer,
};
