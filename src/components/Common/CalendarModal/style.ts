import styled from "@emotion/styled";
import { theme } from "../../../assets/theme";

const modalWidth = "100% - 80px";

const Backgorund = styled.div`
  width: 100%;
  height: 744px;
  background-color: rgba(73, 80, 87, 0.74);

  position: absolute;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  width: calc(${modalWidth});
  height: 190px;
  ${theme.border_radius};
  border: 1px solid;
  background-color: ${theme.font_color.white};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;

  position: absolute;
  top: 35%;
  z-index: 1;
`;

export const CalendarModalUI = { Backgorund, ModalContainer } as const;
