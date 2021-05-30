import { getByName, calculateRank, getByFamily } from '../index';

describe('general-test', () => {
  it('should generate ranking', () => {
    const pokedexEntry = getByName({ name: 'Machamp' });
    const rank = calculateRank({
      pokedexEntry,
      refAttackStat: 15,
      refDefenseStat: 15,
      refHealthStat: 15,
      maxCP: 1500,
      maxLevel: 40,
      minimumStatValue: 0,
    });
    expect(rank).toHaveProperty('occurence', {
      attackStat: 15,
      defenseStat: 15,
      healthStat: 15,
      level: 17,
      attackProduct: 137.1473808309,
      defenseProduct: 95.8379287734,
      healthProduct: 122,
      product: 1603558.3516946794,
      cp: 1484,
      rank: 1191,
    });
    expect(rank).toHaveProperty('rank');
    expect(rank.rank).toEqual(
      expect.arrayContaining([
        {
          attackStat: 0,
          defenseStat: 14,
          healthStat: 11,
          level: 18.5,
          attackProduct: 134.4491759754,
          defenseProduct: 99.4004591613,
          healthProduct: 125,
          product: 1670538.7282266484,
          cp: 1500,
          rank: 1,
        },
        {
          attackStat: 0,
          defenseStat: 11,
          healthStat: 15,
          level: 18.5,
          attackProduct: 134.4491759754,
          defenseProduct: 97.676751777,
          healthProduct: 127,
          product: 1667834.9661231602,
          cp: 1500,
          rank: 2,
        },
        {
          attackStat: 0,
          defenseStat: 15,
          healthStat: 9,
          level: 18.5,
          attackProduct: 134.4491759754,
          defenseProduct: 99.97502828940002,
          healthProduct: 124,
          product: 1666753.461281765,
          cp: 1497,
          rank: 3,
        },
      ]),
    );
  });

  it('should return family', () => {
    const pokedexEntry = getByName({ name: 'Machamp' });
    const pokemonFamily = getByFamily({ name: pokedexEntry.family });
    expect(pokemonFamily).toHaveLength(3);
    expect(pokemonFamily[0].name).toEqual('Machop');
    expect(pokemonFamily[1].name).toEqual('Machoke');
    expect(pokemonFamily[2].name).toEqual('Machamp');
  });
});
