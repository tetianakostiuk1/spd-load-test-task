import {useRecoilState} from "recoil";
import { Rocket } from "@/app/components/interfaces/IRocket";
import { favoritesState } from "@/state/favouritesState";
import React, { useEffect, useRef, useState } from "react";
import { useFavorites } from "@/app/hooks/useFavourites";
import { useQuery } from "@apollo/client";
import { EmptyComponent } from "@/app/components/utilities/EmptyComponent/EmptyComponent";
import { CardItem } from "@/app/components/molecules/CardItem/CardItem";
import { ExampleQuery } from '@/app/graphql/queries.graphql';

import {
    CarouselSliderContainer,
    CarouselContainer,
    CarouselArrow,
    CarouselArrows,
    CarouselSlider,
    CardContainer,
    DotContainer,
    Dot,
    CarouselTitle,
    CarouselHeader,
    ArrowLeft,
    ArrowRight
} from './CardsSlider.styled';


// const ExampleQuery = gql`
//   query ExampleQuery {
//     rockets {
//       id
//       description
//       name
//     }
//   }
// `;


const images = [
    '/images/img1.png',
    '/images/img2.png',
    '/images/img3.png',
];


export const CardSlider = ({  }) => {

    const [favorites] = useRecoilState<Rocket[]>(favoritesState);

    const containerRef = useRef<HTMLDivElement | null>(null);

    const [scrollPosition, setScrollPosition] = useState(0);
    const [maxScroll, setMaxScroll] = useState(0);
    const [activeDotIndex, setActiveDotIndex] = useState(0);

    const cardItemWidthAndGap: number = 411 + 24;


    const { toggleFavorites } = useFavorites();


    const { loading, error, data } = useQuery(ExampleQuery);

    const rockets = data?.rockets || [];

    useEffect(() => {
        const setOrUpdateMaxScroll = () => {
            if (containerRef.current) {
                const scrollWidth = containerRef.current.scrollWidth;
                const offsetWidth = containerRef.current.offsetWidth;
                const maxScrollValue = scrollWidth - offsetWidth;

                setMaxScroll(maxScrollValue);
            }
        };

        const handleActiveDots = () => {
            if (containerRef.current) {
                const current = containerRef.current as HTMLDivElement;

                const totalWidth = current.scrollWidth;
                const scrollLeft = current.scrollLeft;

                const dotsCount = 3;

                const activeIndex = Math.round(
                    (scrollLeft / (totalWidth - current.offsetWidth)) * (dotsCount - 1)
                );

                setActiveDotIndex(activeIndex);
            }
        };

        handleActiveDots();
        setOrUpdateMaxScroll();

        window.addEventListener('resize', setOrUpdateMaxScroll);

        return () => {
            window.removeEventListener('resize', setOrUpdateMaxScroll);
        };
    }, [scrollPosition]);



    const handleScrollLeft = () => {
        if (containerRef.current) {
            const current = containerRef.current as HTMLDivElement;

            if (current.scrollLeft && current.offsetWidth) {
                current.scrollTo({
                    left: current.scrollLeft - cardItemWidthAndGap,
                    behavior: 'smooth',
                });
            }
        }
    };

    const handleScrollRight = () => {
        if (containerRef.current) {
            const current = containerRef.current as HTMLDivElement;

            if (current.scrollLeft != null && current.offsetWidth) {
                current.scrollTo({
                    left: current.scrollLeft + cardItemWidthAndGap,
                    behavior: 'smooth',
                });
            }
        }
    };

    const handleScroll = () => {
        if (containerRef.current) {
            setScrollPosition(+containerRef.current?.scrollLeft);
        }
    };

    const handleDotClick = (index: number) => {
        if (containerRef.current) {
            const current = containerRef.current as HTMLDivElement;

            const newPosition = index * current.offsetWidth;

            current.scrollTo({
                left: newPosition,
                behavior: 'smooth',
            });
        }
    };
    return (
        <CarouselContainer>
            <EmptyComponent data={rockets} text={'there are no tours available now ('}>
                <CarouselHeader>
                    <CarouselTitle>Popular tours</CarouselTitle>

                    <CarouselArrows>
                        <CarouselArrow
                            disabled={scrollPosition === 0}
                            onClick={handleScrollLeft}
                        >
                            <ArrowLeft />
                        </CarouselArrow>

                        <CarouselArrow
                            disabled={maxScroll - scrollPosition <= 10}
                            onClick={handleScrollRight}
                        >
                            <ArrowRight />
                        </CarouselArrow>
                    </CarouselArrows>
                </CarouselHeader>

                <CarouselSliderContainer ref={containerRef} onScroll={handleScroll}>
                    <CarouselSlider>
                        {rockets.map((rocket: Rocket, index: number) => (
                            <CardContainer key={rocket.id}>
                                <CardItem
                                    id={rocket.id}
                                    title={rocket.name}
                                    description={rocket.description}
                                    imageURL={images[index % images.length]}
                                    onToggleFavorite={() => toggleFavorites(rocket, images[index % images.length])}
                                    isFavorite={favorites.some((fav) => fav.id === rocket.id)}
                                />
                            </CardContainer>
                        ))}
                    </CarouselSlider>
                </CarouselSliderContainer>



                <DotContainer>
                    {[0,1,2].map((_, index) => (
                        <Dot
                            key={index}
                            active={index === activeDotIndex}
                            onClick={() => handleDotClick(index)}
                        />
                    ))}
                </DotContainer>
            </EmptyComponent>

        </CarouselContainer>
    );
};