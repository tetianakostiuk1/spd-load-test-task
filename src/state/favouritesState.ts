import { atom } from 'recoil';
import { Rocket } from "@/app/components/interfaces/IRocket";

export const favoritesState = atom<Rocket[]>({
    key: 'favoritesState',
    default: [],
});
