import styled from "styled-components";

export const SliderContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  
  background-color: #1E1E1E;
`;

export const Slide = styled.img<{ isActive: boolean }>`
  width: 100%;
  height: 100%;
  
  object-fit: cover;
  position: absolute;
  transition: opacity 0.7s ease-in-out;
  opacity: ${(props) => (props.isActive ? 0.48 : 0)};
`;