import styled from "styled-components";
import Link from "next/link";

export const NavItemStyled = styled(Link)`
  position: relative;
  
  text-decoration: none;
  transition: color 0.5s ease-in-out;

  &:hover {
    color: #fff;
  }

  &:before {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 1px;
    background-color: #fff;
    transition: width 0.5s ease-in-out;
  }

  &:hover:before {
    width: 100%;
  }
`;