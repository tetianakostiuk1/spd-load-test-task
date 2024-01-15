import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 53px;
  height: 53px;
  
  background-color: #ECECEC;
  transition: border-radius 0.5s ease-in-out, background-color 0.5s ease-in-out;

  &:hover {
    border-radius: 20%;
    cursor: pointer;
    background-color: #b4b4bb;
  }

  &:active {
    -webkit-box-shadow: 0 0 62px -10px rgb(0, 225, 255);
    -moz-box-shadow: 0 0 62px -10px rgb(0, 225, 255);
    box-shadow: 0 0 62px -10px rgb(0, 225, 255);

    background-color: #0004ff;
  }
`;

export const DeleteLogo = styled.div`
  height: 24px;
  width: 24px;
  background: url('/icons/Delete.svg') center/cover no-repeat;
`;