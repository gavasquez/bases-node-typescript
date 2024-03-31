import { heroes } from "../data/heros";

export const finHeroById = (id: number) => {
    return heroes.find(heroe => heroe.id === id);
}
