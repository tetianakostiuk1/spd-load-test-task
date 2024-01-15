import { useRecoilState } from 'recoil';

import { favoritesState } from '@/state/favouritesState';
import { Rocket } from "@/app/components/interfaces/IRocket";

export const useFavorites = () => {
    const [favorites, setFavorites] = useRecoilState(favoritesState);

    const addToFavorites = (rocket: Rocket, imageURL: string) => {
        if (!favorites.some((fav) => fav.id === rocket.id)) {
            setFavorites((prevFavorites) => [...prevFavorites, { ...rocket, imageURL }]);
        }
    };

    const removeFromFavorites = (id: string) => {
        const updatedFavorites = favorites.filter((fav) => fav.id !== id);
        setFavorites(updatedFavorites);
    };

    const toggleFavorites = (rocket: Rocket, imageURL?: string) => {
        return favorites.some((fav) => fav.id === rocket.id)
            ? removeFromFavorites(rocket.id)
            : addToFavorites(rocket, imageURL || '');
    };

    return {
        favorites,
        setFavorites,
        addToFavorites,
        removeFromFavorites,
        toggleFavorites,
    };
};