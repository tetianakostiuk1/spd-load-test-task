import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  height: 80px;
  width: 100vw;
  padding-inline: 80px;
  
  background-color: rgba(30, 30, 30, 0.48);
`;

export const Logo = styled.div`
  height: 42px;
  width: 329px;
  
  background: 
          url("/icons/logo.png")
          center/cover 
          no-repeat;
  transition: transform 0.5s ease-in-out;
  
  &:hover {
    opacity: 90%;
    transform: scale(95%);
  }
`;