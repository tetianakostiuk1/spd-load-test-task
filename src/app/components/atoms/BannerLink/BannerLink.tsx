import React from "react";

import { LinkContainer, LinkStyled, ArrowDown} from './BannerLink.styled';

export const BannerLink = () => {
    const handleOnClick = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    };

    return (
        <LinkContainer>
            <LinkStyled onClick={handleOnClick}>
                Explore Tours
            </LinkStyled>

            <ArrowDown />
        </LinkContainer>
    );
};