export function ViewStats(pokemonName, league, attackIv, defenseIv, hpIv, minIv, levelCap) {
  let rows = ([]);
  let trueMinIv = minIv;
  minIv = 0;
  var oneItem = GetSinglePokemon(pokemonName);
  for (var hp = 15; hp >= minIv; hp--) {
    for (var defense = 15; defense >= minIv; defense--) {
      for (var attack = 15; attack >= minIv; attack--) {
        for (var level = levelCap * 2; level >= 1; level--) {
          var attackStat = GetAtack(oneItem.base_attack, attack, level / 2);
          var defenseStat = GetDefense(oneItem.base_defense, defense, level / 2);
          var hpStat = GetHP(oneItem.base_stamina, hp, level / 2);
          var statProduct = GetStatProduct(attackStat, defenseStat, hpStat);
          var cp = GetCp(attack + oneItem.base_attack, defense + oneItem.base_defense, hp + oneItem.base_stamina, level / 2);
          if (cp <= league) {
            rows.push({
              'cp': cp,
              'level': level / 2,
              'att': attackStat,
              'def': defenseStat,
              'sta': hpStat,
              'stat_product': statProduct,
              'att_iv': attack,
              'def_iv': defense,
              'sta_iv': hp
            });
            break;
          }
        }
      }
    }
  }
  rows = rows.sort(function (a, b) {
    return b.stat_product - a.stat_product
  });
  var singleOption = rows.filter(f=>f.att_iv === attackIv && f.def_iv === defenseIv && f.sta_iv === hpIv) [0];
  var matchingOptions = rows.filter(f=>f.att_iv >= trueMinIv && f.def_iv >= trueMinIv && f.sta_iv >= trueMinIv);
  matchingOptions = [
    ...new Set(matchingOptions)
  ]
  let bestOption = matchingOptions[0];
  var rankOneStatProduct = Number(bestOption['stat_product']);
  let selectedRank = GetRankFromMatchingOptions(singleOption, matchingOptions);
  let currentStatProduct = (Number(singleOption['stat_product']) / rankOneStatProduct) * 100
  let leagueLogo = greatLeagueRegular;
  if (league === '2500') {
    leagueLogo = ultraLeagueRegular;
  } else if (league === '9001') {
    leagueLogo = masterLeageuRegular;
  }
  return {
    _id: league,
    rank: selectedRank,
    level: singleOption['level'],
    ivs_ads: singleOption['att_iv'] + '/' + singleOption['def_iv'] + '/' + singleOption['sta_iv'],
    att: Math.floor(Number(singleOption['att']) * 100) / 100,
    def: Math.floor(Number(singleOption['def']) * 100) / 100,
    sta: Number(singleOption['sta']).toFixed(0),
    cp: singleOption['cp'],
    stat_product: (Number(singleOption['stat_product']) / 1000).toFixed(3),
    stat_product_pct: currentStatProduct.toFixed(2) + '%',
    leagueLogo: leagueLogo,
    totalCombinations: matchingOptions.length,
    hundoRank: 1,
    hundoLevel: bestOption['level'],
    hundoIvAds: bestOption['att_iv'] + '/' + bestOption['def_iv'] + '/' + bestOption['sta_iv'],
    hundoatt: Math.floor(Number(bestOption['att']) * 100) / 100,
    hundodef: Math.floor(Number(bestOption['def']) * 100) / 100,
    hundosta: Number(bestOption['sta']).toFixed(0),
    hundocp: bestOption['cp'],
    hundostat_product: (Number(bestOption['stat_product']) / 1000).toFixed(3),
    hundostat_product_pct: '100%'
  };
}
export function GetStatsNative(pokemonName, league, minIv, levelCap, attackIv, defenseIv, hpIv, numberOfResults) {
  let rows = ([]);
  let trueMinIv = minIv;
  minIv = 0;
  var oneItem = GetSinglePokemon(pokemonName);
  for (var hp = 15; hp >= minIv; hp--) {
    for (var defense = 15; defense >= minIv; defense--) {
      for (var attack = 15; attack >= minIv; attack--) {
        for (var level = levelCap * 2; level >= 1; level--) {
          var attackStat = GetAtack(oneItem.base_attack, attack, level / 2);
          var defenseStat = GetDefense(oneItem.base_defense, defense, level / 2);
          var hpStat = GetHP(oneItem.base_stamina, hp, level / 2);
          var statProduct = GetStatProduct(attackStat, defenseStat, hpStat);
          var cp = GetCp(attack + oneItem.base_attack, defense + oneItem.base_defense, hp + oneItem.base_stamina, level / 2);
          if (cp <= league) {
            rows.push({
              'cp': cp,
              'level': level / 2,
              'att': attackStat,
              'def': defenseStat,
              'sta': hpStat,
              'stat_product': statProduct,
              'att_iv': attack,
              'def_iv': defense,
              'sta_iv': hp,
              //"image": currentPoke.image,
            });
            break;
          }
        }
      }
    }
  }
  let filteredRows = rows.filter(f=>(f.att_iv >= trueMinIv && f.def_iv >= trueMinIv && f.sta_iv >= trueMinIv) || (f.att_iv === attackIv && f.def_iv === defenseIv && f.sta_iv === hpIv));
  let sorted = filteredRows.sort(function (a, b) {
    return b.stat_product - a.stat_product
  });
  let returnSet = sorted.slice(0, numberOfResults).concat(sorted.filter(f=>f.att_iv === attackIv && f.def_iv === defenseIv && f.sta_iv === hpIv));
  for (var i = 0; i < returnSet.length; i++) {
    returnSet[i]['rank'] = GetRankFromMatchingOptions(returnSet[i], sorted.filter(f=>(f.att_iv >= trueMinIv && f.def_iv >= trueMinIv && f.sta_iv >= trueMinIv)));
  }
  console.log(returnSet.length);
  return returnSet;
}
export function GetCp(attackStat, defenseStat, hpStat, level) {
  let newDefenseStat = Math.pow(defenseStat, 0.5);
  let newHpStat = Math.pow(hpStat, 0.5);
  let cp = (attackStat * newDefenseStat * newHpStat * CPM[level] * CPM[level]) / 10;
  if (cp < 10)
  return 10;
  return Math.floor(cp);
}
export function GetAtack(baseAttack, attackIv, level) {
  return (baseAttack + attackIv) * CPM[level];
}
export function GetDefense(baseDefense, defenseIv, level) {
  return (baseDefense + defenseIv) * CPM[level];
}
export function GetHP(baseHp, hpIv, level) {
  return Math.floor((baseHp + hpIv) * CPM[level]);
}
export function GetRankFromMatchingOptions(chosenOption, allOptions) {
  for (var i = 0; i < allOptions.length; i++) {
    if (allOptions[i]['stat_product'] === chosenOption['stat_product']) {
      return (i + 1).toString();
    }
  }
  return 'Not Found';
}
export function GetStatProduct(attackStat, defenseStat, hpStat) {
  return attackStat * defenseStat * hpStat;
}
export function GetFilterdPokemonList(searchTerm) {
  searchTerm = searchTerm.toLowerCase();
  const matches = ([]);
  for (var i = 0; i < families.length; i++) {
    if (families[i].Pokemon.toLowerCase().includes(searchTerm)) {
      matches.push({
        '_id': families[i].id + families[i].Pokemon.replace(/\s/g, '').replace('_', '-').replace('*', ''),
        'name': families[i].Pokemon
      })
    }
    if (matches.length === 10)
    return matches;
  }
  return matches;
}
export function GetPokemonFamily(pokemonName) {
  let parsedName = pokemonName;
  var firstMatch = families.filter(f=>f.Pokemon.toLowerCase().includes(parsedName.toLowerCase())) [0];
  return families.filter(f=>f.family_id === firstMatch.family_id);
}
export function GetSinglePokemon(pokemonName) {
  return families.filter(f=>f.Pokemon === pokemonName) [0];
}

var families = [];

var CPM = {}
