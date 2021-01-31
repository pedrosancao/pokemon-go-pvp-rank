import { pokedex, getByName, getByFamily, calculateRank } from './main.js';

const pokemonName = 'Machamp'
const pokedexEntry = getByName({ name: pokemonName });
const rank = calculateRank({
  pokedexEntry,
  refAttackStat: 15,
  refDefenseStat: 15,
  refHealthStat: 15,
  maxCP: 1500,
  maxLevel: 40,
  minimumStatValue: 0,
});
console.log(rank);
