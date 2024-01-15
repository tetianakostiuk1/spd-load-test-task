import React, {FC} from "react";
import { useRouter } from "next/router";

import { ButtonContainer, HeartLogo } from "./FavouritesButton.styled";

export type Props = {
    isActive?: boolean;
    onToggle?: () => void;
};

export const FavouritesButton: FC<Props> = ({ isActive= false, onToggle }) => {
    const router = useRouter();
    const isFavPage = router.pathname === '/favourites';

    return (
        <ButtonContainer
            isActive={isFavPage || isActive}
            onClick={onToggle}
        >
            <HeartLogo />
        </ButtonContainer>
    );
};
