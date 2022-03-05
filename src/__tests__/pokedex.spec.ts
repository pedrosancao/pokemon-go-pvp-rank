import { getByName, getByFamily } from '../pokedex';

describe('pokedex module', () => {
  it('should find pokémon data', () => {
    const pokedexEntry = getByName({ name: 'Machamp' });
    expect(pokedexEntry).toEqual({
      number: '068',
      name: 'Machamp',
      baseAttack: 234,
      baseDefense: 159,
      baseHealth: 207,
      family: 'machop',
    });
  });

  it('should thown error for pokémon data not found', () => {
    expect(() => {
      getByName({ name: 'not exists' });
    }).toThrow('Could not find entry.');
  });

  it('should find pokémon family', () => {
    const pokedexEntry = getByName({ name: 'Machamp' });
    const pokemonFamily = getByFamily({ name: pokedexEntry.family });
    expect(pokemonFamily).toHaveLength(3);
    expect(pokemonFamily[0].number).toEqual('066');
    expect(pokemonFamily[0].name).toEqual('Machop');
    expect(pokemonFamily[1].number).toEqual('067');
    expect(pokemonFamily[1].name).toEqual('Machoke');
    expect(pokemonFamily[2].number).toEqual('068');
    expect(pokemonFamily[2].name).toEqual('Machamp');
  });
});
