import React from 'react';
import styled from "styled-components";

const BackgroundImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 440px;
  
  background: linear-gradient(
          rgba(30, 30, 30, 0.64),
          rgba(30, 30, 30, 0.64)
  ), url("/images/img3.png") top/cover no-repeat;
`;

const Title = styled.h1`
  font: 800 48px 'Syne', sans-serif;
  color: #e0e0e0;
  text-transform: uppercase;
`;

export const FavouritesBanner = () => {
    return (
        <BackgroundImage>
            <Title>
                Favourites
            </Title>
        </BackgroundImage>
    );
};