import React from 'react';
import { Header } from "@/app/components/organisms/Header";
import { Banner } from "@/app/components/organisms/Banner/Banner";
import { CardSlider } from "@/app/components/organisms/CardsSlider";

const Index = () => {
    return (
        <>
            <Header />

            <Banner />

            <CardSlider />
        </>

    );
};

export default Index;