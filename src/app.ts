import { finHeroById } from "./services/hero.service";



const hero = finHeroById(1);

console.log(hero?.name ?? 'No hero found.');