import styled from "@emotion/styled";
import { theme } from "@/src/assets/theme";

const Container = styled.div`
  width: 100%;
  height: 220px;
  position: relative;
  border: 1px dashed ${theme.font_color.gray2};
  margin-top: 15px;

  span {
    color: ${theme.font_color.gray2};
    ${theme.font_style.light_small};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const SelectedImageArea = styled.img`
  width: 100%;
  height: 220px;
  object-fit: fill;
`;

const IsReceiptButton = styled.button`
  position: absolute;
  top: 5px;
  left: 5px;
  ${theme.border_radius};
  background-color: ${theme.font_color.white};

  div {
    display: flex;
    align-items: center;
    padding: 4px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;

  img {
    width: 18px;
    height: 18px;
  }
`;

export const SelecteImageUI = {
  Container,
  SelectedImageArea,
  IsReceiptButton,
  CloseButton,
} as const;
