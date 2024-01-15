import React from 'react';

import { BannerLink } from "@/app/components/atoms/BannerLink";
import { BannerTitle } from "@/app/components/atoms/BannerTitle";
import { ImageSlider } from "@/app/components/atoms/BannerImageSlider";
import { BannerContainer } from './Banner.styled';

export const Banner = () => {
    const images = ['images/img1.png', '/images/img2.png', '/images/img3.png'];

    return (
        <BannerContainer>
            <ImageSlider images={images} />

            <BannerTitle />

            <BannerLink />
        </BannerContainer>
    );
};