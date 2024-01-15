import React from 'react';
import styled from "styled-components";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import '@/app/globals.css';
import { useFavorites } from '@/app/hooks/useFavourites';
import { FavouritesBanner } from "@/app/components/molecules/FavouritesBanner/FavouritesBanner";
import { EmptyComponent } from "@/app/components/utilities/EmptyComponent/EmptyComponent";
import { Header } from "@/app/components/organisms/Header";
import { CardItem } from "@/app/components/molecules/CardItem/CardItem";

const MainContent = styled.main`
  width: fit-content;
  margin: auto;
  padding-block: 80px;
`;

const StyledTransitionGroup = styled(TransitionGroup)`
  display: grid;
  grid-template-columns: repeat(3, 411px);
  gap: 34px 24px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 40px;
`;

const ClearAllButton = styled.button`
  width: fit-content;
  
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 300;
  color: #556B84;
  
  transition: color 0.3s ease-in-out;
  
  &:hover {
    color: #010f1e;
    cursor: pointer;
  }
`;

export const Favourites = () => {

    const { favorites, setFavorites } = useFavorites();

    const handleClearAll = () => {
        if (favorites.length) {
            setFavorites([]);
        }
    };

    return (
        <>
            <Header />

            <FavouritesBanner />

            <EmptyComponent
                data={favorites}
                text={`You haven't added anything to favourites yet`}
            >
                <MainContent>
                    <ButtonWrapper>
                        <ClearAllButton onClick={handleClearAll}>
                            Clear All
                        </ClearAllButton>
                    </ButtonWrapper>

                    <StyledTransitionGroup>
                        {favorites.map(item => (
                            <CSSTransition
                                key={item.id}
                                timeout={500}
                                classNames="item"
                                unmountOnExit
                            >
                                <CardItem
                                    key={item.id}
                                    id={item.id}
                                    title={item.name || ''}
                                    description={item.description || ''}
                                    imageURL={item.imageURL}
                                />
                            </CSSTransition>
                        ))}
                    </StyledTransitionGroup>
                </MainContent>
            </EmptyComponent>
        </>
    );
};

export default Favourites;