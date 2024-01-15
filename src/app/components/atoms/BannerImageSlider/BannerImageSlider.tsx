import React, {useEffect, useState} from 'react';

import { DotContainer, Dot } from '@/app/components/styles/Dots.styled';
import { SliderContainer, Slide } from './BannerImageSlider.styled';

interface ImageSliderProps {
    images: string[];
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleDotClick = (index: number) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            // Move to the next slide
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 3000);

        // Clear the interval on component unmount to prevent memory leaks
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <SliderContainer>
            {images.map((image, index) => (
                <Slide
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    isActive={index === currentSlide}
                />
            ))}
            <DotContainer>
                {images.map((_, index) => (
                    <Dot
                        key={index}
                        isActive={index === currentSlide}
                        onClick={() => handleDotClick(index)}
                    />
                ))}
            </DotContainer>
        </SliderContainer>
    );
};