import React from "react";
import Link from "next/link";
import { BarContainer } from "./UserActionsBar.styled";

import { FavouritesButton } from "@/app/components/atoms/buttons/FavouritesButton";
import { SignInButton } from "@/app/components/atoms/buttons/SignInButton";

export const UserActionsBar = () => {
    return (
        <BarContainer>
            <Link href={'/favourites'}>
                <FavouritesButton />
            </Link>

            <SignInButton />
        </BarContainer>
    );
};