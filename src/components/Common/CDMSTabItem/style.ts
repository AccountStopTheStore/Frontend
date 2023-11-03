import styled from "@emotion/styled";

const ItemContainer = styled.li`
  width: 100%;
  height: inherit;

  text-align: center;
  margin: auto 0;

  // 버튼 하단 하이라이트
  position: relative;
  > div {
    position: absolute;
    bottom: 0;
    z-index: 1;
  }
`;

const Button = styled.button`
  display: block;
  width: 100%;
  height: inherit;
`;

export const CDMSTabItemUI = {
  ItemContainer,
  Button,
};
