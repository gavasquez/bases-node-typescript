"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.finHeroById = void 0;
const heros_1 = require("../data/heros");
const finHeroById = (id) => {
    return heros_1.heroes.find(heroe => heroe.id === id);
};
exports.finHeroById = finHeroById;
