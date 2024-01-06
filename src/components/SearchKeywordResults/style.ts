import styled from "@emotion/styled";
import { theme } from "@/src/assets/theme";

const containerWidth = "100% - 40px";

const ContainerUl = styled.ul`
  width: calc(${containerWidth});
  max-height: 350px;
  ${theme.border_radius};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background-color: ${theme.font_color.white};
  overflow: auto;

  position: absolute;
  top: 140px; // 77(hearder)+46+17
  left: 20px;
  z-index: 1;

  li {
    height: 50px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    &:hover {
      background-color: rgba(25, 118, 210, 0.04);

      & > div:first-of-type {
        font-weight: bold;
      }
    }
  }
`;

const Name = styled.div`
  ${theme.font_style.regular_small};
  color: ${theme.font_color.black};
`;

const Badge = styled.div`
  width: 62px;
  height: 22px;
  background-color: ${theme.font_color.gray3};
  ${theme.font_style.bold_small};
  color: ${theme.font_color.white};
  ${theme.border_radius};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchKeywordResultsUI = { ContainerUl, Name, Badge } as const;