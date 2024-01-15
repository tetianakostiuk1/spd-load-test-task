import styled from "styled-components";

export const DotContainer = styled.div`
  position: absolute;
  top: 80%;
  display: flex;
`;

export const Dot = styled.span<{ isActive: boolean }>`
  z-index: 3;
  width: 24px;
  height: 24px;
  margin: 0 8px;
  
  background: 
      url(${(props) => (
          props.isActive
            ? "icons/dot-active.png"
            : "icons/dot.png"
      )})
        center/cover 
        no-repeat;
  
  cursor: pointer;
`;