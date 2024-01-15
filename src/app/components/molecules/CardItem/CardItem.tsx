import React from 'react';
import { useRouter } from "next/router";

import { FavouritesButton }from "@/app/components/atoms/buttons/FavouritesButton";
import { BuyButton } from "@/app/components/atoms/buttons/BuyButton";
import { DeleteButton } from "@/app/components/atoms/buttons/DeleteButton";

import {
    CardItemContainer,
    ContentWrapper,
    TextContent,
    CardImage,
    CardTitle,
    CardDescription,
    ActionButtons,
}  from './CardItem.styled';


type Props = {
    id: string;
    title: string;
    description: string;
    imageURL?: string;
    onToggleFavorite?: () => void;
    isFavorite?: boolean;
};

export const CardItem = ({
  id,
  title,
  description,
  imageURL,
  onToggleFavorite,
  isFavorite = false,
} :Props) => {

    const router = useRouter();
    const isInFavoritesPage = router.pathname === '/favourites';

    return (
        <CardItemContainer>
            <CardImage imageURL={imageURL || 'images/img1.png'} />

            <ContentWrapper>
                <TextContent>
                    <CardTitle>
                        {title}
                    </CardTitle>

                    <CardDescription>
                        {description}
                    </CardDescription>
                </TextContent>

                <ActionButtons>
                    <BuyButton />
                    {isInFavoritesPage ? (
                        <DeleteButton id={id} />
                    ) : (
                        <FavouritesButton
                            onToggle={onToggleFavorite}
                            isActive={isFavorite}
                        />
                    )}
                </ActionButtons>
            </ContentWrapper>
        </CardItemContainer>
    );
};