import React from "react";

import { NavItemStyled } from "@/app/components/atoms/NavItem/NavItem.styled";
import { Nav } from './HeaderNavigation.styled';

export const HeaderNavigation = () => {
    return (
        <Nav>
            <NavItemStyled href={'/'}>home</NavItemStyled>
            <NavItemStyled href={'tours'}>tours</NavItemStyled>
            <NavItemStyled href={'about'}>about</NavItemStyled>
            <NavItemStyled href={'help'}>help</NavItemStyled>
        </Nav>
    );
};

