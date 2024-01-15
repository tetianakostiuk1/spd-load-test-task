import React from "react";
import { TitleContainer, FirstLine, SecondLine } from './BannerTitle.styled';

export const BannerTitle = () => {
    return (
        <TitleContainer>
            <FirstLine>The space is waiting for</FirstLine>
            <SecondLine>You</SecondLine>
        </TitleContainer>
    );
};