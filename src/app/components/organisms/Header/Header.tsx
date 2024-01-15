import React from "react";
import Link from "next/link";

import { HeaderNavigation } from "@/app/components/molecules/HeaderNavigation";
import { UserActionsBar } from "@/app/components/molecules/UserActionsBar";
import { HeaderContainer, Logo } from './Header.styled';

export const Header = () => {
    return (
        <HeaderContainer>
            <Link href={'/'}>
                <Logo />
            </Link>

            <HeaderNavigation/>

            <UserActionsBar />
        </HeaderContainer>
    );
};