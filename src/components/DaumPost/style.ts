import { theme } from "@/src/assets/theme";
import styled from "@emotion/styled";

const AddressButton = styled.button`
  padding: 6px 10px;
  background-color: ${theme.font_color.primary_green};
  color: ${theme.font_color.black};
  ${theme.font_style.regular_small};
  ${theme.border_radius};
`;

export const DaumPostUI = { AddressButton } as const;
