import { theme } from "@/src/assets/theme";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const deleteMarginWidth = "390px - 64px";

const LinkButton = styled(Link)`
  width: calc(${deleteMarginWidth});
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${theme.font_color.gray1};
  border: 1px solid ${theme.font_color.gray2};
  ${theme.font_style.regular_small};
  ${theme.border_radius};

  > img {
    margin-right: 14px;
  }
`;

export const OAuthButtonUI = {
  LinkButton,
};
