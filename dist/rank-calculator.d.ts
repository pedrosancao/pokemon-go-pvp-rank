import { PokedexEntry } from './pokedex.js';
export interface StatProducts {
    attackProduct: number;
    defenseProduct: number;
    healthProduct: number;
    product: number;
    cp: number;
}
export interface RankOccurence extends StatProducts {
    attackStat: number;
    defenseStat: number;
    healthStat: number;
    level: number;
    rank: number;
}
export interface Rank {
    rank: RankOccurence[];
    occurence: RankOccurence;
}
export interface BuildRankRequest {
    pokedexEntry: PokedexEntry;
    maxCP: number;
    maxLevel?: number;
    minimumStatValue?: number;
}
export interface CalculateRankRequest extends BuildRankRequest {
    refAttackStat: number;
    refDefenseStat: number;
    refHealthStat: number;
}
export interface CalculateProductsRequest {
    pokedexEntry: PokedexEntry;
    attackStat: number;
    defenseStat: number;
    healthStat: number;
    levelConstant: number;
}
export interface CalculateCpRequest {
    attack: number;
    defense: number;
    health: number;
    levelConstant: number;
}
export declare function calculateProducts({ pokedexEntry, attackStat, defenseStat, healthStat, levelConstant, }: CalculateProductsRequest): StatProducts;
export declare function buildRank({ pokedexEntry, maxCP, maxLevel, minimumStatValue: minStat, }: BuildRankRequest): RankOccurence[];
export default function calculateRank({ pokedexEntry, refAttackStat, refDefenseStat, refHealthStat, maxCP, maxLevel, minimumStatValue, }: CalculateRankRequest): Rank;
