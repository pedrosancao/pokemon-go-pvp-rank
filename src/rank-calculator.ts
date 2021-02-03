import levelConstants, { indexToLevel, levelToIndex } from './level-constants';
import { PokedexEntry } from './pokedex';

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

function calculateCp({
  attack,
  defense,
  health,
  levelConstant,
}: CalculateCpRequest): number {
  const value = attack * Math.sqrt(defense * health) * levelConstant ** 2;
  return value < 100 ? 10 : Math.floor(value / 10);
}

export function calculateProducts({
  pokedexEntry,
  attackStat,
  defenseStat,
  healthStat,
  levelConstant,
}: CalculateProductsRequest): StatProducts {
  const { baseAttack, baseDefense, baseHealth } = pokedexEntry;
  const attackProduct = (baseAttack + attackStat) * levelConstant;
  const defenseProduct = (baseDefense + defenseStat) * levelConstant;
  const healthProduct = Math.floor((baseHealth + healthStat) * levelConstant);
  const product = attackProduct * defenseProduct * healthProduct;
  const cp = calculateCp({
    attack: baseAttack + attackStat,
    defense: baseDefense + defenseStat,
    health: baseHealth + healthStat,
    levelConstant,
  });
  return {
    attackProduct,
    defenseProduct,
    healthProduct,
    product,
    cp,
  };
}

export function buildRank({
  pokedexEntry,
  maxCP,
  maxLevel = 40,
  minimumStatValue: minStat = 0,
}: BuildRankRequest): RankOccurence[] {
  const rankEntries = [];
  for (let attackStat = 15; attackStat >= minStat; attackStat -= 1) {
    for (let defenseStat = 15; defenseStat >= minStat; defenseStat -= 1) {
      for (let healthStat = 15; healthStat >= minStat; healthStat -= 1) {
        const initialIndex = levelToIndex({ level: maxLevel });
        for (let levelIndex = initialIndex; levelIndex >= 0; levelIndex -= 1) {
          const products = calculateProducts({
            pokedexEntry,
            attackStat,
            defenseStat,
            healthStat,
            levelConstant: levelConstants[levelIndex],
          });
          if (products.cp <= maxCP) {
            rankEntries.push({
              attackStat,
              defenseStat,
              healthStat,
              level: indexToLevel({ index: levelIndex }),
              ...products,
            });
            break;
          }
        }
      }
    }
  }
  const rankSorted = rankEntries.sort((a, b) => b.product - a.product);

  return rankSorted.map((data, index) => {
    return { ...data, rank: index + 1 };
  });
}

export default function calculateRank({
  pokedexEntry,
  refAttackStat,
  refDefenseStat,
  refHealthStat,
  maxCP,
  maxLevel = 40,
  minimumStatValue = 0,
}: CalculateRankRequest): Rank {
  const rank = buildRank({
    pokedexEntry,
    maxCP,
    maxLevel,
    minimumStatValue,
  });
  const occurence = rank.find(el => {
    return (
      el.attackStat === refAttackStat &&
      el.defenseStat === refDefenseStat &&
      el.healthStat === refHealthStat
    );
  });
  if (!occurence) {
    throw new Error('Could not find a rank occurence');
  }
  return { occurence, rank };
}
