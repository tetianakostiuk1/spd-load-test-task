import styled from "styled-components";

export const ButtonContainer = styled.div`
  padding-block: 12px;

  font: 600 24px 'Syne', sans-serif;
  text-transform: uppercase;
  text-align: center;

  background-color: #d3eaff;
  
  transition: border-radius 0.5s ease-in-out, 
    background-color 0.5s ease-in-out;;

  &:hover {
    cursor: pointer;
    background-color: rgba(152, 152, 241, 0.91);
  }
`;