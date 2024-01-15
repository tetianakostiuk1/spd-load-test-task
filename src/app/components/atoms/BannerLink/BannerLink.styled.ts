import styled from "styled-components";

export const LinkContainer = styled.div`
  position: absolute;
  bottom: 32px;
  
  display: flex;
  gap: 8px;
  align-items: center;

  &:hover {
    opacity: 85%;
    transform: scale(90%);
    transition: transform 0.4s ease-in-out;
    cursor: pointer;
  }
`;

export const LinkStyled = styled.a`
  font: 300 32px 'Lato', sans-serif;
  color: #fff;
  text-align: center;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ArrowDown = styled.span`
  height: 40px;
  width: 40px;
  background-image: url('/icons/ArrowDown.svg');
`;