import styled from "styled-components";
// import { Props } from "@/app/components/Header/FavouritesButton";

export const ButtonContainer = styled.button<{ isActive: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 53px;
  height: 53px;
  
  background-color: ${(props) => (props.isActive ? 'hotpink' : '#ECECEC')};
  transition: 
          border-radius 0.5s ease-in-out,
          background-color 0.5s ease-in-out,
          box-shadow 0.2s ease-in-out;

  &:hover {
    border-radius: 20%;
    background-color: #b4b4bb;
    cursor: pointer;
  }

  &:active {
    -webkit-box-shadow: 0 0 62px -10px rgb(209, 30, 173);
    -moz-box-shadow: 0 0 62px -10px rgb(209, 30, 173);
    box-shadow: 0 0 62px -10px rgb(209, 30, 173);
    
    background-color: red;
  }
`;

export const HeartLogo = styled.div`
  height: 24px;
  width: 24px;
  background: url('/icons/Heart.png') center/cover no-repeat;
`;

