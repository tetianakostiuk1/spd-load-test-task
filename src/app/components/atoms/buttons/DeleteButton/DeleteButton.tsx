import React, { FC } from 'react';
import { useFavorites } from "@/app/hooks/useFavourites";
import { ButtonContainer, DeleteLogo } from "./DeleteButton.styled";

type Props = {
    id: string;
}

export const DeleteButton: FC<Props> = ({ id }) => {

    const { removeFromFavorites } = useFavorites();

    return (
        <ButtonContainer onClick={() => removeFromFavorites(id)}>
            <DeleteLogo />
        </ButtonContainer>
    );
};