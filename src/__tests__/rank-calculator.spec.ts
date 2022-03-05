import calculateRank, {
  buildRank,
  calculateProducts,
} from '../rank-calculator';

describe('rank-calculator module', () => {
  it('should build rank using defaults', () => {
    const rank = buildRank({
      pokedexEntry: {
        number: '068',
        name: 'Machamp',
        baseAttack: 234,
        baseDefense: 159,
        baseHealth: 207,
        family: 'machop',
      },
      maxCP: 1500,
    });
    expect(rank).toHaveLength(16 * 16 * 16);
    expect(rank).toEqual(
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
        {
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
        },
      ]),
    );
  });

  it('should not calculate PC below 10', () => {
    const { cp } = calculateProducts({
      pokedexEntry: {
        number: '010',
        name: 'Caterpie',
        baseAttack: 55,
        baseDefense: 55,
        baseHealth: 128,
        family: 'caterpie',
      },
      attackStat: 1,
      defenseStat: 2,
      healthStat: 3,
      levelConstant: 0.1351374321,
    });
    expect(cp).toBe(10);
  });

  it('should generate ranking using defaults', () => {
    const { occurence, rank } = calculateRank({
      pokedexEntry: {
        number: '068',
        name: 'Machamp',
        baseAttack: 234,
        baseDefense: 159,
        baseHealth: 207,
        family: 'machop',
      },
      refAttackStat: 15,
      refDefenseStat: 15,
      refHealthStat: 15,
      maxCP: 1500,
    });
    expect(occurence).toEqual({
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
    expect(rank).toHaveLength(16 * 16 * 16);
  });

  it('should thown error for rank data not found', () => {
    expect(() => {
      calculateRank({
        pokedexEntry: {
          number: '068',
          name: 'Machamp',
          baseAttack: 234,
          baseDefense: 159,
          baseHealth: 207,
          family: 'machop',
        },
        refAttackStat: 1,
        refDefenseStat: 2,
        refHealthStat: 3,
        maxCP: 1500,
        maxLevel: 40,
        minimumStatValue: 5,
      });
    }).toThrow('Could not find a rank occurence.');
  });
});
