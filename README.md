# Pokémon Go - PVP Ranking

![code size](https://img.shields.io/github/languages/code-size/pedrosancao/pokemon-go-pvp-rank)
![project license](https://img.shields.io/github/license/pedrosancao/pokemon-go-pvp-rank)
![Node.js version](https://img.shields.io/badge/node->%3D13.2.0-blue)
![npm](https://img.shields.io/npm/v/pokemon-go-pvp-rank)
![test coverage](https://img.shields.io/codecov/c/github/pedrosancao/pokemon-go-pvp-rank)
![tests status](https://img.shields.io/github/workflow/status/pedrosancao/pokemon-go-pvp-rank/yarn?label=tests)

A rank calculator for PVP on Pokémon Go.

It features full support for Typescript, ES Modules and Common JS imports.

Based on the work of [nickmagus][pogostat-reddit] on pogostat.com
and [gostadiumpvp][gostadiumpvp] on stadiumgaming.gg.

## Install

This was written as a library and can be requested with `npm` or `yarn`.

`yarn add pokemon-go-pvp-rank`

Or 

`npm install pokemon-go-pvp-rank`

## Use

Import the library:

```javascript
// for Typescript / ESM
import { calculateRank, getByName } from 'pokemon-go-pvp-rank';

// for Common JS
const { calculateRank, getByName } = require('pokemon-go-pvp-rank');
```

All function user objects as named parameters.

```javascript
const pokedexEntry = getByName({ name: 'Machamp' });
const { rank, occurence } = calculateRank({
    pokedexEntry,
    // refs from pokémon being compared (1-15)
    refAttackStat: 1,
    refDefenseStat: 14,
    refHealthStat: 14,
    // max league CP
    maxCP: 1500,
    // max desired level (1-55)
    maxLevel: 40,
    // minimum stat:
    //  0 - wild
    //  1 - good friend trade
    //  2 - great friend trade
    //  3 - ultra friend trade
    //  4 - weather boost
    //  5 - best friend trade
    // 10 - raid/egg/mission
    // 12 - lucky
    minimumStatValue: 0,
});
```

The `rank` object contains an array of `occurence` which contains the structure below,
`ocurrence` is has the data for the reference stats provided.

```javascript
{
  attackStat: 1,
  defenseStat: 14,
  healthStat: 14,
  level: 18,
  attackProduct: 133.1873121765,
  defenseProduct: 98.04853194270001,
  healthProduct: 125,
  product: 1632352.55403749,
  cp: 1475,
  rank: 235
}

```

## Disclaimer

Pokémon and all respective names and images are trademark & copyright of
Nintendo. Pokémon GO is trademark & copyright of Niantic, Inc.

This project is not affiliated with Niantic Inc., The Pokemon Company nor Nintendo.

[pogostat-reddit]: https://www.reddit.com/r/TheSilphRoad/comments/bwtsqg/pvp_iv_rank_calculator/
[nickmagus]: https://www.reddit.com/user/nickmagus/
[gostadiumpvp]: https://www.twitter.com/gostadiumpvp
