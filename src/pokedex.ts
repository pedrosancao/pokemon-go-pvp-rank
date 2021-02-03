export interface PokedexEntry {
  number: string;
  name: string;
  baseAttack: number;
  baseDefense: number;
  baseHealth: number;
  family: string;
}

export interface PokedexSearchRequest {
  name: string;
}

const pokedex: PokedexEntry[] = [
  {
    number: '001',
    name: 'Bulbasaur',
    baseAttack: 118,
    baseDefense: 111,
    baseHealth: 128,
    family: 'bulbasaur'
  },
  {
    number: '002',
    name: 'Ivysaur',
    baseAttack: 151,
    baseDefense: 143,
    baseHealth: 155,
    family: 'bulbasaur'
  },
  {
    number: '003',
    name: 'Venusaur',
    baseAttack: 198,
    baseDefense: 189,
    baseHealth: 190,
    family: 'bulbasaur'
  },
  {
    number: '003',
    name: 'Venusaur Mega',
    baseAttack: 241,
    baseDefense: 246,
    baseHealth: 190,
    family: 'bulbasaur'
  },
  {
    number: '004',
    name: 'Charmander',
    baseAttack: 116,
    baseDefense: 93,
    baseHealth: 118,
    family: 'charmander'
  },
  {
    number: '005',
    name: 'Charmeleon',
    baseAttack: 158,
    baseDefense: 126,
    baseHealth: 151,
    family: 'charmander'
  },
  {
    number: '006',
    name: 'Charizard',
    baseAttack: 223,
    baseDefense: 173,
    baseHealth: 186,
    family: 'charmander'
  },
  {
    number: '006',
    name: 'Charizard Mega X',
    baseAttack: 273,
    baseDefense: 213,
    baseHealth: 186,
    family: 'charmander'
  },
  {
    number: '006',
    name: 'Charizard Mega Y',
    baseAttack: 319,
    baseDefense: 212,
    baseHealth: 186,
    family: 'charmander'
  },
  {
    number: '007',
    name: 'Squirtle',
    baseAttack: 94,
    baseDefense: 121,
    baseHealth: 127,
    family: 'squirtle'
  },
  {
    number: '008',
    name: 'Wartortle',
    baseAttack: 126,
    baseDefense: 155,
    baseHealth: 153,
    family: 'squirtle'
  },
  {
    number: '009',
    name: 'Blastoise',
    baseAttack: 171,
    baseDefense: 207,
    baseHealth: 188,
    family: 'squirtle'
  },
  {
    number: '009',
    name: 'Blastoise Mega',
    baseAttack: 264,
    baseDefense: 237,
    baseHealth: 188,
    family: 'squirtle'
  },
  {
    number: '010',
    name: 'Caterpie',
    baseAttack: 55,
    baseDefense: 55,
    baseHealth: 128,
    family: 'caterpie'
  },
  {
    number: '011',
    name: 'Metapod',
    baseAttack: 45,
    baseDefense: 80,
    baseHealth: 137,
    family: 'caterpie'
  },
  {
    number: '012',
    name: 'Butterfree',
    baseAttack: 167,
    baseDefense: 137,
    baseHealth: 155,
    family: 'caterpie'
  },
  {
    number: '013',
    name: 'Weedle',
    baseAttack: 63,
    baseDefense: 50,
    baseHealth: 120,
    family: 'weedle'
  },
  {
    number: '014',
    name: 'Kakuna',
    baseAttack: 46,
    baseDefense: 75,
    baseHealth: 128,
    family: 'weedle'
  },
  {
    number: '015',
    name: 'Beedrill',
    baseAttack: 169,
    baseDefense: 130,
    baseHealth: 163,
    family: 'weedle'
  },
  {
    number: '015',
    name: 'Beedrill Mega',
    baseAttack: 303,
    baseDefense: 148,
    baseHealth: 163,
    family: 'weedle'
  },
  {
    number: '016',
    name: 'Pidgey',
    baseAttack: 85,
    baseDefense: 73,
    baseHealth: 120,
    family: 'pidgey'
  },
  {
    number: '017',
    name: 'Pidgeotto',
    baseAttack: 117,
    baseDefense: 105,
    baseHealth: 160,
    family: 'pidgey'
  },
  {
    number: '018',
    name: 'Pidgeot',
    baseAttack: 166,
    baseDefense: 154,
    baseHealth: 195,
    family: 'pidgey'
  },
  {
    number: '018',
    name: 'Pidgeot Mega',
    baseAttack: 280,
    baseDefense: 175,
    baseHealth: 195,
    family: 'pidgey'
  },
  {
    number: '019',
    name: 'Rattata',
    baseAttack: 103,
    baseDefense: 70,
    baseHealth: 102,
    family: 'rattata'
  },
  {
    number: '019',
    name: 'Rattata Alola',
    baseAttack: 103,
    baseDefense: 70,
    baseHealth: 102,
    family: 'rattata'
  },
  {
    number: '020',
    name: 'Raticate',
    baseAttack: 161,
    baseDefense: 139,
    baseHealth: 146,
    family: 'rattata'
  },
  {
    number: '020',
    name: 'Raticate Alola',
    baseAttack: 135,
    baseDefense: 154,
    baseHealth: 181,
    family: 'rattata'
  },
  {
    number: '021',
    name: 'Spearow',
    baseAttack: 112,
    baseDefense: 60,
    baseHealth: 120,
    family: 'spearow'
  },
  {
    number: '022',
    name: 'Fearow',
    baseAttack: 182,
    baseDefense: 133,
    baseHealth: 163,
    family: 'spearow'
  },
  {
    number: '023',
    name: 'Ekans',
    baseAttack: 110,
    baseDefense: 97,
    baseHealth: 111,
    family: 'ekans'
  },
  {
    number: '024',
    name: 'Arbok',
    baseAttack: 167,
    baseDefense: 153,
    baseHealth: 155,
    family: 'ekans'
  },
  {
    number: '025',
    name: 'Pikachu',
    baseAttack: 112,
    baseDefense: 96,
    baseHealth: 111,
    family: 'pikachu'
  },
  {
    number: '026',
    name: 'Raichu',
    baseAttack: 193,
    baseDefense: 151,
    baseHealth: 155,
    family: 'pikachu'
  },
  {
    number: '026',
    name: 'Raichu Alola',
    baseAttack: 201,
    baseDefense: 154,
    baseHealth: 155,
    family: 'pikachu'
  },
  {
    number: '027',
    name: 'Sandshrew',
    baseAttack: 126,
    baseDefense: 120,
    baseHealth: 137,
    family: 'sandshrew'
  },
  {
    number: '027',
    name: 'Sandshrew Alola',
    baseAttack: 125,
    baseDefense: 129,
    baseHealth: 137,
    family: 'sandshrew'
  },
  {
    number: '028',
    name: 'Sandslash',
    baseAttack: 182,
    baseDefense: 175,
    baseHealth: 181,
    family: 'sandshrew'
  },
  {
    number: '028',
    name: 'Sandslash Alola',
    baseAttack: 177,
    baseDefense: 195,
    baseHealth: 181,
    family: 'sandshrew'
  },
  {
    number: '029',
    name: 'Nidoran Female',
    baseAttack: 86,
    baseDefense: 89,
    baseHealth: 146,
    family: 'nidoran_female'
  },
  {
    number: '030',
    name: 'Nidorina',
    baseAttack: 117,
    baseDefense: 120,
    baseHealth: 172,
    family: 'nidoran_female'
  },
  {
    number: '031',
    name: 'Nidoqueen',
    baseAttack: 180,
    baseDefense: 173,
    baseHealth: 207,
    family: 'nidoran_female'
  },
  {
    number: '032',
    name: 'Nidoran Male',
    baseAttack: 105,
    baseDefense: 76,
    baseHealth: 130,
    family: 'nidoran_male'
  },
  {
    number: '033',
    name: 'Nidorino',
    baseAttack: 137,
    baseDefense: 111,
    baseHealth: 156,
    family: 'nidoran_male'
  },
  {
    number: '034',
    name: 'Nidoking',
    baseAttack: 204,
    baseDefense: 156,
    baseHealth: 191,
    family: 'nidoran_male'
  },
  {
    number: '035',
    name: 'Clefairy',
    baseAttack: 107,
    baseDefense: 108,
    baseHealth: 172,
    family: 'clefairy'
  },
  {
    number: '036',
    name: 'Clefable',
    baseAttack: 178,
    baseDefense: 162,
    baseHealth: 216,
    family: 'clefairy'
  },
  {
    number: '037',
    name: 'Vulpix',
    baseAttack: 96,
    baseDefense: 109,
    baseHealth: 116,
    family: 'vulpix'
  },
  {
    number: '037',
    name: 'Vulpix Alola',
    baseAttack: 96,
    baseDefense: 109,
    baseHealth: 116,
    family: 'vulpix'
  },
  {
    number: '038',
    name: 'Ninetales',
    baseAttack: 169,
    baseDefense: 190,
    baseHealth: 177,
    family: 'vulpix'
  },
  {
    number: '038',
    name: 'Ninetales Alola',
    baseAttack: 170,
    baseDefense: 193,
    baseHealth: 177,
    family: 'vulpix'
  },
  {
    number: '039',
    name: 'Jigglypuff',
    baseAttack: 80,
    baseDefense: 41,
    baseHealth: 251,
    family: 'jigglypuff'
  },
  {
    number: '040',
    name: 'Wigglytuff',
    baseAttack: 156,
    baseDefense: 90,
    baseHealth: 295,
    family: 'jigglypuff'
  },
  {
    number: '041',
    name: 'Zubat',
    baseAttack: 83,
    baseDefense: 73,
    baseHealth: 120,
    family: 'zubat'
  },
  {
    number: '042',
    name: 'Golbat',
    baseAttack: 161,
    baseDefense: 150,
    baseHealth: 181,
    family: 'zubat'
  },
  {
    number: '043',
    name: 'Oddish',
    baseAttack: 131,
    baseDefense: 112,
    baseHealth: 128,
    family: 'oddish'
  },
  {
    number: '044',
    name: 'Gloom',
    baseAttack: 153,
    baseDefense: 136,
    baseHealth: 155,
    family: 'oddish'
  },
  {
    number: '045',
    name: 'Vileplume',
    baseAttack: 202,
    baseDefense: 167,
    baseHealth: 181,
    family: 'oddish'
  },
  {
    number: '046',
    name: 'Paras',
    baseAttack: 121,
    baseDefense: 99,
    baseHealth: 111,
    family: 'paras'
  },
  {
    number: '047',
    name: 'Parasect',
    baseAttack: 165,
    baseDefense: 146,
    baseHealth: 155,
    family: 'paras'
  },
  {
    number: '048',
    name: 'Venonat',
    baseAttack: 100,
    baseDefense: 100,
    baseHealth: 155,
    family: 'venonat'
  },
  {
    number: '049',
    name: 'Venomoth',
    baseAttack: 179,
    baseDefense: 143,
    baseHealth: 172,
    family: 'venonat'
  },
  {
    number: '050',
    name: 'Diglett',
    baseAttack: 109,
    baseDefense: 78,
    baseHealth: 67,
    family: 'diglett'
  },
  {
    number: '050',
    name: 'Diglett Alola',
    baseAttack: 108,
    baseDefense: 81,
    baseHealth: 67,
    family: 'diglett'
  },
  {
    number: '051',
    name: 'Dugtrio',
    baseAttack: 167,
    baseDefense: 134,
    baseHealth: 111,
    family: 'diglett'
  },
  {
    number: '051',
    name: 'Dugtrio Alola',
    baseAttack: 201,
    baseDefense: 142,
    baseHealth: 111,
    family: 'diglett'
  },
  {
    number: '052',
    name: 'Meowth',
    baseAttack: 92,
    baseDefense: 78,
    baseHealth: 120,
    family: 'meowth'
  },
  {
    number: '052',
    name: 'Meowth Alola',
    baseAttack: 99,
    baseDefense: 78,
    baseHealth: 120,
    family: 'meowth'
  },
  {
    number: '052',
    name: 'Meowth Galar',
    baseAttack: 115,
    baseDefense: 92,
    baseHealth: 137,
    family: 'meowth'
  },
  {
    number: '053',
    name: 'Persian',
    baseAttack: 150,
    baseDefense: 136,
    baseHealth: 163,
    family: 'meowth'
  },
  {
    number: '053',
    name: 'Persian Alola',
    baseAttack: 158,
    baseDefense: 136,
    baseHealth: 163,
    family: 'meowth'
  },
  {
    number: '054',
    name: 'Psyduck',
    baseAttack: 122,
    baseDefense: 95,
    baseHealth: 137,
    family: 'psyduck'
  },
  {
    number: '055',
    name: 'Golduck',
    baseAttack: 191,
    baseDefense: 162,
    baseHealth: 190,
    family: 'psyduck'
  },
  {
    number: '056',
    name: 'Mankey',
    baseAttack: 148,
    baseDefense: 82,
    baseHealth: 120,
    family: 'mankey'
  },
  {
    number: '057',
    name: 'Primeape',
    baseAttack: 207,
    baseDefense: 138,
    baseHealth: 163,
    family: 'mankey'
  },
  {
    number: '058',
    name: 'Growlithe',
    baseAttack: 136,
    baseDefense: 93,
    baseHealth: 146,
    family: 'growlithe'
  },
  {
    number: '059',
    name: 'Arcanine',
    baseAttack: 227,
    baseDefense: 166,
    baseHealth: 207,
    family: 'growlithe'
  },
  {
    number: '060',
    name: 'Poliwag',
    baseAttack: 101,
    baseDefense: 82,
    baseHealth: 120,
    family: 'poliwag'
  },
  {
    number: '061',
    name: 'Poliwhirl',
    baseAttack: 130,
    baseDefense: 123,
    baseHealth: 163,
    family: 'poliwag'
  },
  {
    number: '062',
    name: 'Poliwrath',
    baseAttack: 182,
    baseDefense: 184,
    baseHealth: 207,
    family: 'poliwag'
  },
  {
    number: '063',
    name: 'Abra',
    baseAttack: 195,
    baseDefense: 82,
    baseHealth: 93,
    family: 'abra'
  },
  {
    number: '064',
    name: 'Kadabra',
    baseAttack: 232,
    baseDefense: 117,
    baseHealth: 120,
    family: 'abra'
  },
  {
    number: '065',
    name: 'Alakazam',
    baseAttack: 271,
    baseDefense: 167,
    baseHealth: 146,
    family: 'abra'
  },
  {
    number: '066',
    name: 'Machop',
    baseAttack: 137,
    baseDefense: 82,
    baseHealth: 172,
    family: 'machop'
  },
  {
    number: '067',
    name: 'Machoke',
    baseAttack: 177,
    baseDefense: 125,
    baseHealth: 190,
    family: 'machop'
  },
  {
    number: '068',
    name: 'Machamp',
    baseAttack: 234,
    baseDefense: 159,
    baseHealth: 207,
    family: 'machop'
  },
  {
    number: '069',
    name: 'Bellsprout',
    baseAttack: 139,
    baseDefense: 61,
    baseHealth: 137,
    family: 'bellsprout'
  },
  {
    number: '070',
    name: 'Weepinbell',
    baseAttack: 172,
    baseDefense: 92,
    baseHealth: 163,
    family: 'bellsprout'
  },
  {
    number: '071',
    name: 'Victreebel',
    baseAttack: 207,
    baseDefense: 135,
    baseHealth: 190,
    family: 'bellsprout'
  },
  {
    number: '072',
    name: 'Tentacool',
    baseAttack: 97,
    baseDefense: 149,
    baseHealth: 120,
    family: 'tentacool'
  },
  {
    number: '073',
    name: 'Tentacruel',
    baseAttack: 166,
    baseDefense: 209,
    baseHealth: 190,
    family: 'tentacool'
  },
  {
    number: '074',
    name: 'Geodude',
    baseAttack: 132,
    baseDefense: 132,
    baseHealth: 120,
    family: 'geodude'
  },
  {
    number: '074',
    name: 'Geodude Alola',
    baseAttack: 132,
    baseDefense: 132,
    baseHealth: 120,
    family: 'geodude'
  },
  {
    number: '075',
    name: 'Graveler',
    baseAttack: 164,
    baseDefense: 164,
    baseHealth: 146,
    family: 'geodude'
  },
  {
    number: '075',
    name: 'Graveler Alola',
    baseAttack: 164,
    baseDefense: 164,
    baseHealth: 146,
    family: 'geodude'
  },
  {
    number: '076',
    name: 'Golem',
    baseAttack: 211,
    baseDefense: 198,
    baseHealth: 190,
    family: 'geodude'
  },
  {
    number: '076',
    name: 'Golem Alola',
    baseAttack: 211,
    baseDefense: 198,
    baseHealth: 190,
    family: 'geodude'
  },
  {
    number: '077',
    name: 'Ponyta',
    baseAttack: 170,
    baseDefense: 127,
    baseHealth: 137,
    family: 'ponyta'
  },
  {
    number: '077',
    name: 'Ponyta Galar',
    baseAttack: 170,
    baseDefense: 127,
    baseHealth: 137,
    family: 'ponyta'
  },
  {
    number: '078',
    name: 'Rapidash',
    baseAttack: 207,
    baseDefense: 162,
    baseHealth: 163,
    family: 'ponyta'
  },
  {
    number: '078',
    name: 'Rapidash Galar',
    baseAttack: 207,
    baseDefense: 162,
    baseHealth: 163,
    family: 'ponyta'
  },
  {
    number: '079',
    name: 'Slowpoke',
    baseAttack: 109,
    baseDefense: 98,
    baseHealth: 207,
    family: 'slowpoke'
  },
  {
    number: '080',
    name: 'Slowbro',
    baseAttack: 177,
    baseDefense: 180,
    baseHealth: 216,
    family: 'slowpoke'
  },
  {
    number: '081',
    name: 'Magnemite',
    baseAttack: 165,
    baseDefense: 121,
    baseHealth: 93,
    family: 'magnemite'
  },
  {
    number: '082',
    name: 'Magneton',
    baseAttack: 223,
    baseDefense: 169,
    baseHealth: 137,
    family: 'magnemite'
  },
  {
    number: '083',
    name: 'Farfetchd',
    baseAttack: 124,
    baseDefense: 115,
    baseHealth: 141,
    family: 'farfetchd'
  },
  {
    number: '083',
    name: 'Farfetchd Galar',
    baseAttack: 174,
    baseDefense: 114,
    baseHealth: 141,
    family: 'farfetchd'
  },
  {
    number: '084',
    name: 'Doduo',
    baseAttack: 158,
    baseDefense: 83,
    baseHealth: 111,
    family: 'doduo'
  },
  {
    number: '085',
    name: 'Dodrio',
    baseAttack: 218,
    baseDefense: 140,
    baseHealth: 155,
    family: 'doduo'
  },
  {
    number: '086',
    name: 'Seel',
    baseAttack: 85,
    baseDefense: 121,
    baseHealth: 163,
    family: 'seel'
  },
  {
    number: '087',
    name: 'Dewgong',
    baseAttack: 139,
    baseDefense: 177,
    baseHealth: 207,
    family: 'seel'
  },
  {
    number: '088',
    name: 'Grimer',
    baseAttack: 135,
    baseDefense: 90,
    baseHealth: 190,
    family: 'grimer'
  },
  {
    number: '088',
    name: 'Grimer Alola',
    baseAttack: 135,
    baseDefense: 90,
    baseHealth: 190,
    family: 'grimer'
  },
  {
    number: '089',
    name: 'Muk',
    baseAttack: 190,
    baseDefense: 172,
    baseHealth: 233,
    family: 'grimer'
  },
  {
    number: '089',
    name: 'Muk Alola',
    baseAttack: 190,
    baseDefense: 172,
    baseHealth: 233,
    family: 'grimer'
  },
  {
    number: '090',
    name: 'Shellder',
    baseAttack: 116,
    baseDefense: 134,
    baseHealth: 102,
    family: 'shellder'
  },
  {
    number: '091',
    name: 'Cloyster',
    baseAttack: 186,
    baseDefense: 256,
    baseHealth: 137,
    family: 'shellder'
  },
  {
    number: '092',
    name: 'Gastly',
    baseAttack: 186,
    baseDefense: 67,
    baseHealth: 102,
    family: 'gastly'
  },
  {
    number: '093',
    name: 'Haunter',
    baseAttack: 223,
    baseDefense: 107,
    baseHealth: 128,
    family: 'gastly'
  },
  {
    number: '094',
    name: 'Gengar',
    baseAttack: 261,
    baseDefense: 149,
    baseHealth: 155,
    family: 'gastly'
  },
  {
    number: '094',
    name: 'Gengar Mega',
    baseAttack: 349,
    baseDefense: 199,
    baseHealth: 155,
    family: 'gastly'
  },
  {
    number: '095',
    name: 'Onix',
    baseAttack: 85,
    baseDefense: 232,
    baseHealth: 111,
    family: 'onix'
  },
  {
    number: '096',
    name: 'Drowzee',
    baseAttack: 89,
    baseDefense: 136,
    baseHealth: 155,
    family: 'drowzee'
  },
  {
    number: '097',
    name: 'Hypno',
    baseAttack: 144,
    baseDefense: 193,
    baseHealth: 198,
    family: 'drowzee'
  },
  {
    number: '098',
    name: 'Krabby',
    baseAttack: 181,
    baseDefense: 124,
    baseHealth: 102,
    family: 'krabby'
  },
  {
    number: '099',
    name: 'Kingler',
    baseAttack: 240,
    baseDefense: 181,
    baseHealth: 146,
    family: 'krabby'
  },
  {
    number: '100',
    name: 'Voltorb',
    baseAttack: 109,
    baseDefense: 111,
    baseHealth: 120,
    family: 'voltorb'
  },
  {
    number: '101',
    name: 'Electrode',
    baseAttack: 173,
    baseDefense: 173,
    baseHealth: 155,
    family: 'voltorb'
  },
  {
    number: '102',
    name: 'Exeggcute',
    baseAttack: 107,
    baseDefense: 125,
    baseHealth: 155,
    family: 'exeggcute'
  },
  {
    number: '103',
    name: 'Exeggutor',
    baseAttack: 233,
    baseDefense: 149,
    baseHealth: 216,
    family: 'exeggcute'
  },
  {
    number: '103',
    name: 'Exeggutor Alola',
    baseAttack: 230,
    baseDefense: 153,
    baseHealth: 216,
    family: 'exeggcute'
  },
  {
    number: '104',
    name: 'Cubone',
    baseAttack: 90,
    baseDefense: 144,
    baseHealth: 137,
    family: 'cubone'
  },
  {
    number: '105',
    name: 'Marowak',
    baseAttack: 144,
    baseDefense: 186,
    baseHealth: 155,
    family: 'cubone'
  },
  {
    number: '105',
    name: 'Marowak Alola',
    baseAttack: 144,
    baseDefense: 186,
    baseHealth: 155,
    family: 'cubone'
  },
  {
    number: '106',
    name: 'Hitmonlee',
    baseAttack: 224,
    baseDefense: 181,
    baseHealth: 137,
    family: 'tyrogue'
  },
  {
    number: '107',
    name: 'Hitmonchan',
    baseAttack: 193,
    baseDefense: 197,
    baseHealth: 137,
    family: 'tyrogue'
  },
  {
    number: '108',
    name: 'Lickitung',
    baseAttack: 108,
    baseDefense: 137,
    baseHealth: 207,
    family: 'lickitung'
  },
  {
    number: '109',
    name: 'Koffing',
    baseAttack: 119,
    baseDefense: 141,
    baseHealth: 120,
    family: 'koffing'
  },
  {
    number: '110',
    name: 'Weezing',
    baseAttack: 174,
    baseDefense: 197,
    baseHealth: 163,
    family: 'koffing'
  },
  {
    number: '110',
    name: 'Weezing Galar',
    baseAttack: 174,
    baseDefense: 197,
    baseHealth: 163,
    family: 'koffing'
  },
  {
    number: '111',
    name: 'Rhyhorn',
    baseAttack: 140,
    baseDefense: 127,
    baseHealth: 190,
    family: 'rhyhorn'
  },
  {
    number: '112',
    name: 'Rhydon',
    baseAttack: 222,
    baseDefense: 171,
    baseHealth: 233,
    family: 'rhyhorn'
  },
  {
    number: '113',
    name: 'Chansey',
    baseAttack: 60,
    baseDefense: 128,
    baseHealth: 487,
    family: 'chansey'
  },
  {
    number: '114',
    name: 'Tangela',
    baseAttack: 183,
    baseDefense: 169,
    baseHealth: 163,
    family: 'tangela'
  },
  {
    number: '115',
    name: 'Kangaskhan',
    baseAttack: 181,
    baseDefense: 165,
    baseHealth: 233,
    family: 'kangaskhan'
  },
  {
    number: '116',
    name: 'Horsea',
    baseAttack: 129,
    baseDefense: 103,
    baseHealth: 102,
    family: 'horsea'
  },
  {
    number: '117',
    name: 'Seadra',
    baseAttack: 187,
    baseDefense: 156,
    baseHealth: 146,
    family: 'horsea'
  },
  {
    number: '118',
    name: 'Goldeen',
    baseAttack: 123,
    baseDefense: 110,
    baseHealth: 128,
    family: 'goldeen'
  },
  {
    number: '119',
    name: 'Seaking',
    baseAttack: 175,
    baseDefense: 147,
    baseHealth: 190,
    family: 'goldeen'
  },
  {
    number: '120',
    name: 'Staryu',
    baseAttack: 137,
    baseDefense: 112,
    baseHealth: 102,
    family: 'staryu'
  },
  {
    number: '121',
    name: 'Starmie',
    baseAttack: 210,
    baseDefense: 184,
    baseHealth: 155,
    family: 'staryu'
  },
  {
    number: '122',
    name: 'Mr Mime',
    baseAttack: 192,
    baseDefense: 205,
    baseHealth: 120,
    family: 'mr_mime'
  },
  {
    number: '122',
    name: 'Mr Mime Galar',
    baseAttack: 183,
    baseDefense: 169,
    baseHealth: 137,
    family: 'mr_mime'
  },
  {
    number: '123',
    name: 'Scyther',
    baseAttack: 218,
    baseDefense: 170,
    baseHealth: 172,
    family: 'scyther'
  },
  {
    number: '124',
    name: 'Jynx',
    baseAttack: 223,
    baseDefense: 151,
    baseHealth: 163,
    family: 'jynx'
  },
  {
    number: '125',
    name: 'Electabuzz',
    baseAttack: 198,
    baseDefense: 158,
    baseHealth: 163,
    family: 'electabuzz'
  },
  {
    number: '126',
    name: 'Magmar',
    baseAttack: 206,
    baseDefense: 154,
    baseHealth: 163,
    family: 'magmar'
  },
  {
    number: '127',
    name: 'Pinsir',
    baseAttack: 238,
    baseDefense: 182,
    baseHealth: 163,
    family: 'pinsir'
  },
  {
    number: '128',
    name: 'Tauros',
    baseAttack: 198,
    baseDefense: 183,
    baseHealth: 181,
    family: 'tauros'
  },
  {
    number: '129',
    name: 'Magikarp',
    baseAttack: 29,
    baseDefense: 85,
    baseHealth: 85,
    family: 'magikarp'
  },
  {
    number: '130',
    name: 'Gyarados',
    baseAttack: 237,
    baseDefense: 186,
    baseHealth: 216,
    family: 'magikarp'
  },
  {
    number: '131',
    name: 'Lapras',
    baseAttack: 165,
    baseDefense: 174,
    baseHealth: 277,
    family: 'lapras'
  },
  {
    number: '132',
    name: 'Ditto',
    baseAttack: 91,
    baseDefense: 91,
    baseHealth: 134,
    family: 'ditto'
  },
  {
    number: '133',
    name: 'Eevee',
    baseAttack: 104,
    baseDefense: 114,
    baseHealth: 146,
    family: 'eevee'
  },
  {
    number: '134',
    name: 'Vaporeon',
    baseAttack: 205,
    baseDefense: 161,
    baseHealth: 277,
    family: 'eevee'
  },
  {
    number: '135',
    name: 'Jolteon',
    baseAttack: 232,
    baseDefense: 182,
    baseHealth: 163,
    family: 'eevee'
  },
  {
    number: '136',
    name: 'Flareon',
    baseAttack: 246,
    baseDefense: 179,
    baseHealth: 163,
    family: 'eevee'
  },
  {
    number: '137',
    name: 'Porygon',
    baseAttack: 153,
    baseDefense: 136,
    baseHealth: 163,
    family: 'porygon'
  },
  {
    number: '138',
    name: 'Omanyte',
    baseAttack: 155,
    baseDefense: 153,
    baseHealth: 111,
    family: 'omanyte'
  },
  {
    number: '139',
    name: 'Omastar',
    baseAttack: 207,
    baseDefense: 201,
    baseHealth: 172,
    family: 'omanyte'
  },
  {
    number: '140',
    name: 'Kabuto',
    baseAttack: 148,
    baseDefense: 140,
    baseHealth: 102,
    family: 'kabuto'
  },
  {
    number: '141',
    name: 'Kabutops',
    baseAttack: 220,
    baseDefense: 186,
    baseHealth: 155,
    family: 'kabuto'
  },
  {
    number: '142',
    name: 'Aerodactyl',
    baseAttack: 221,
    baseDefense: 159,
    baseHealth: 190,
    family: 'aerodactyl'
  },
  {
    number: '143',
    name: 'Snorlax',
    baseAttack: 190,
    baseDefense: 169,
    baseHealth: 330,
    family: 'snorlax'
  },
  {
    number: '144',
    name: 'Articuno',
    baseAttack: 192,
    baseDefense: 236,
    baseHealth: 207,
    family: 'articuno'
  },
  {
    number: '145',
    name: 'Zapdos',
    baseAttack: 253,
    baseDefense: 185,
    baseHealth: 207,
    family: 'zapdos'
  },
  {
    number: '146',
    name: 'Moltres',
    baseAttack: 251,
    baseDefense: 181,
    baseHealth: 207,
    family: 'moltres'
  },
  {
    number: '147',
    name: 'Dratini',
    baseAttack: 119,
    baseDefense: 91,
    baseHealth: 121,
    family: 'dratini'
  },
  {
    number: '148',
    name: 'Dragonair',
    baseAttack: 163,
    baseDefense: 135,
    baseHealth: 156,
    family: 'dratini'
  },
  {
    number: '149',
    name: 'Dragonite',
    baseAttack: 263,
    baseDefense: 198,
    baseHealth: 209,
    family: 'dratini'
  },
  {
    number: '150',
    name: 'Mewtwo',
    baseAttack: 300,
    baseDefense: 182,
    baseHealth: 214,
    family: 'mewtwo'
  },
  {
    number: '150',
    name: 'Mewtwo Armored',
    baseAttack: 182,
    baseDefense: 278,
    baseHealth: 214,
    family: 'mewtwo'
  },
  {
    number: '151',
    name: 'Mew',
    baseAttack: 210,
    baseDefense: 210,
    baseHealth: 225,
    family: 'mew'
  },
  {
    number: '152',
    name: 'Chikorita',
    baseAttack: 92,
    baseDefense: 122,
    baseHealth: 128,
    family: 'chikorita'
  },
  {
    number: '153',
    name: 'Bayleef',
    baseAttack: 122,
    baseDefense: 155,
    baseHealth: 155,
    family: 'chikorita'
  },
  {
    number: '154',
    name: 'Meganium',
    baseAttack: 168,
    baseDefense: 202,
    baseHealth: 190,
    family: 'chikorita'
  },
  {
    number: '155',
    name: 'Cyndaquil',
    baseAttack: 116,
    baseDefense: 93,
    baseHealth: 118,
    family: 'cyndaquil'
  },
  {
    number: '156',
    name: 'Quilava',
    baseAttack: 158,
    baseDefense: 126,
    baseHealth: 151,
    family: 'cyndaquil'
  },
  {
    number: '157',
    name: 'Typhlosion',
    baseAttack: 223,
    baseDefense: 173,
    baseHealth: 186,
    family: 'cyndaquil'
  },
  {
    number: '158',
    name: 'Totodile',
    baseAttack: 117,
    baseDefense: 109,
    baseHealth: 137,
    family: 'totodile'
  },
  {
    number: '159',
    name: 'Croconaw',
    baseAttack: 150,
    baseDefense: 142,
    baseHealth: 163,
    family: 'totodile'
  },
  {
    number: '160',
    name: 'Feraligatr',
    baseAttack: 205,
    baseDefense: 188,
    baseHealth: 198,
    family: 'totodile'
  },
  {
    number: '161',
    name: 'Sentret',
    baseAttack: 79,
    baseDefense: 73,
    baseHealth: 111,
    family: 'sentret'
  },
  {
    number: '162',
    name: 'Furret',
    baseAttack: 148,
    baseDefense: 125,
    baseHealth: 198,
    family: 'sentret'
  },
  {
    number: '163',
    name: 'Hoothoot',
    baseAttack: 67,
    baseDefense: 88,
    baseHealth: 155,
    family: 'hoothoot'
  },
  {
    number: '164',
    name: 'Noctowl',
    baseAttack: 145,
    baseDefense: 156,
    baseHealth: 225,
    family: 'hoothoot'
  },
  {
    number: '165',
    name: 'Ledyba',
    baseAttack: 72,
    baseDefense: 118,
    baseHealth: 120,
    family: 'ledyba'
  },
  {
    number: '166',
    name: 'Ledian',
    baseAttack: 107,
    baseDefense: 179,
    baseHealth: 146,
    family: 'ledyba'
  },
  {
    number: '167',
    name: 'Spinarak',
    baseAttack: 105,
    baseDefense: 73,
    baseHealth: 120,
    family: 'spinarak'
  },
  {
    number: '168',
    name: 'Ariados',
    baseAttack: 161,
    baseDefense: 124,
    baseHealth: 172,
    family: 'spinarak'
  },
  {
    number: '169',
    name: 'Crobat',
    baseAttack: 194,
    baseDefense: 178,
    baseHealth: 198,
    family: 'zubat'
  },
  {
    number: '170',
    name: 'Chinchou',
    baseAttack: 106,
    baseDefense: 97,
    baseHealth: 181,
    family: 'chinchou'
  },
  {
    number: '171',
    name: 'Lanturn',
    baseAttack: 146,
    baseDefense: 137,
    baseHealth: 268,
    family: 'chinchou'
  },
  {
    number: '172',
    name: 'Pichu',
    baseAttack: 77,
    baseDefense: 53,
    baseHealth: 85,
    family: 'pikachu'
  },
  {
    number: '173',
    name: 'Cleffa',
    baseAttack: 75,
    baseDefense: 79,
    baseHealth: 137,
    family: 'clefairy'
  },
  {
    number: '174',
    name: 'Igglybuff',
    baseAttack: 69,
    baseDefense: 32,
    baseHealth: 207,
    family: 'jigglypuff'
  },
  {
    number: '175',
    name: 'Togepi',
    baseAttack: 67,
    baseDefense: 116,
    baseHealth: 111,
    family: 'togepi'
  },
  {
    number: '176',
    name: 'Togetic',
    baseAttack: 139,
    baseDefense: 181,
    baseHealth: 146,
    family: 'togepi'
  },
  {
    number: '177',
    name: 'Natu',
    baseAttack: 134,
    baseDefense: 89,
    baseHealth: 120,
    family: 'natu'
  },
  {
    number: '178',
    name: 'Xatu',
    baseAttack: 192,
    baseDefense: 146,
    baseHealth: 163,
    family: 'natu'
  },
  {
    number: '179',
    name: 'Mareep',
    baseAttack: 114,
    baseDefense: 79,
    baseHealth: 146,
    family: 'mareep'
  },
  {
    number: '180',
    name: 'Flaaffy',
    baseAttack: 145,
    baseDefense: 109,
    baseHealth: 172,
    family: 'mareep'
  },
  {
    number: '181',
    name: 'Ampharos',
    baseAttack: 211,
    baseDefense: 169,
    baseHealth: 207,
    family: 'mareep'
  },
  {
    number: '182',
    name: 'Bellossom',
    baseAttack: 169,
    baseDefense: 186,
    baseHealth: 181,
    family: 'oddish'
  },
  {
    number: '183',
    name: 'Marill',
    baseAttack: 37,
    baseDefense: 93,
    baseHealth: 172,
    family: 'marill'
  },
  {
    number: '184',
    name: 'Azumarill',
    baseAttack: 112,
    baseDefense: 152,
    baseHealth: 225,
    family: 'marill'
  },
  {
    number: '185',
    name: 'Sudowoodo',
    baseAttack: 167,
    baseDefense: 176,
    baseHealth: 172,
    family: 'sudowoodo'
  },
  {
    number: '186',
    name: 'Politoed',
    baseAttack: 174,
    baseDefense: 179,
    baseHealth: 207,
    family: 'poliwag'
  },
  {
    number: '187',
    name: 'Hoppip',
    baseAttack: 67,
    baseDefense: 94,
    baseHealth: 111,
    family: 'hoppip'
  },
  {
    number: '188',
    name: 'Skiploom',
    baseAttack: 91,
    baseDefense: 120,
    baseHealth: 146,
    family: 'hoppip'
  },
  {
    number: '189',
    name: 'Jumpluff',
    baseAttack: 118,
    baseDefense: 183,
    baseHealth: 181,
    family: 'hoppip'
  },
  {
    number: '190',
    name: 'Aipom',
    baseAttack: 136,
    baseDefense: 112,
    baseHealth: 146,
    family: 'aipom'
  },
  {
    number: '191',
    name: 'Sunkern',
    baseAttack: 55,
    baseDefense: 55,
    baseHealth: 102,
    family: 'sunkern'
  },
  {
    number: '192',
    name: 'Sunflora',
    baseAttack: 185,
    baseDefense: 135,
    baseHealth: 181,
    family: 'sunkern'
  },
  {
    number: '193',
    name: 'Yanma',
    baseAttack: 154,
    baseDefense: 94,
    baseHealth: 163,
    family: 'yanma'
  },
  {
    number: '194',
    name: 'Wooper',
    baseAttack: 75,
    baseDefense: 66,
    baseHealth: 146,
    family: 'wooper'
  },
  {
    number: '195',
    name: 'Quagsire',
    baseAttack: 152,
    baseDefense: 143,
    baseHealth: 216,
    family: 'wooper'
  },
  {
    number: '196',
    name: 'Espeon',
    baseAttack: 261,
    baseDefense: 175,
    baseHealth: 163,
    family: 'eevee'
  },
  {
    number: '197',
    name: 'Umbreon',
    baseAttack: 126,
    baseDefense: 240,
    baseHealth: 216,
    family: 'eevee'
  },
  {
    number: '198',
    name: 'Murkrow',
    baseAttack: 175,
    baseDefense: 87,
    baseHealth: 155,
    family: 'murkrow'
  },
  {
    number: '199',
    name: 'Slowking',
    baseAttack: 177,
    baseDefense: 180,
    baseHealth: 216,
    family: 'slowpoke'
  },
  {
    number: '200',
    name: 'Misdreavus',
    baseAttack: 167,
    baseDefense: 154,
    baseHealth: 155,
    family: 'misdreavus'
  },
  {
    number: '201',
    name: 'Unown',
    baseAttack: 136,
    baseDefense: 91,
    baseHealth: 134,
    family: 'unown'
  },
  {
    number: '202',
    name: 'Wobbuffet',
    baseAttack: 60,
    baseDefense: 106,
    baseHealth: 382,
    family: 'wobbuffet'
  },
  {
    number: '203',
    name: 'Girafarig',
    baseAttack: 182,
    baseDefense: 133,
    baseHealth: 172,
    family: 'girafarig'
  },
  {
    number: '204',
    name: 'Pineco',
    baseAttack: 108,
    baseDefense: 122,
    baseHealth: 137,
    family: 'pineco'
  },
  {
    number: '205',
    name: 'Forretress',
    baseAttack: 161,
    baseDefense: 205,
    baseHealth: 181,
    family: 'pineco'
  },
  {
    number: '206',
    name: 'Dunsparce',
    baseAttack: 131,
    baseDefense: 128,
    baseHealth: 225,
    family: 'dunsparce'
  },
  {
    number: '207',
    name: 'Gligar',
    baseAttack: 143,
    baseDefense: 184,
    baseHealth: 163,
    family: 'gligar'
  },
  {
    number: '208',
    name: 'Steelix',
    baseAttack: 148,
    baseDefense: 272,
    baseHealth: 181,
    family: 'onix'
  },
  {
    number: '209',
    name: 'Snubbull',
    baseAttack: 137,
    baseDefense: 85,
    baseHealth: 155,
    family: 'snubbull'
  },
  {
    number: '210',
    name: 'Granbull',
    baseAttack: 212,
    baseDefense: 131,
    baseHealth: 207,
    family: 'snubbull'
  },
  {
    number: '211',
    name: 'Qwilfish',
    baseAttack: 184,
    baseDefense: 138,
    baseHealth: 163,
    family: 'qwilfish'
  },
  {
    number: '212',
    name: 'Scizor',
    baseAttack: 236,
    baseDefense: 181,
    baseHealth: 172,
    family: 'scyther'
  },
  {
    number: '213',
    name: 'Shuckle',
    baseAttack: 17,
    baseDefense: 396,
    baseHealth: 85,
    family: 'shuckle'
  },
  {
    number: '214',
    name: 'Heracross',
    baseAttack: 234,
    baseDefense: 179,
    baseHealth: 190,
    family: 'heracross'
  },
  {
    number: '215',
    name: 'Sneasel',
    baseAttack: 189,
    baseDefense: 146,
    baseHealth: 146,
    family: 'sneasel'
  },
  {
    number: '216',
    name: 'Teddiursa',
    baseAttack: 142,
    baseDefense: 93,
    baseHealth: 155,
    family: 'teddiursa'
  },
  {
    number: '217',
    name: 'Ursaring',
    baseAttack: 236,
    baseDefense: 144,
    baseHealth: 207,
    family: 'teddiursa'
  },
  {
    number: '218',
    name: 'Slugma',
    baseAttack: 118,
    baseDefense: 71,
    baseHealth: 120,
    family: 'slugma'
  },
  {
    number: '219',
    name: 'Magcargo',
    baseAttack: 139,
    baseDefense: 191,
    baseHealth: 137,
    family: 'slugma'
  },
  {
    number: '220',
    name: 'Swinub',
    baseAttack: 90,
    baseDefense: 69,
    baseHealth: 137,
    family: 'swinub'
  },
  {
    number: '221',
    name: 'Piloswine',
    baseAttack: 181,
    baseDefense: 138,
    baseHealth: 225,
    family: 'swinub'
  },
  {
    number: '222',
    name: 'Corsola',
    baseAttack: 118,
    baseDefense: 156,
    baseHealth: 146,
    family: 'corsola'
  },
  {
    number: '223',
    name: 'Remoraid',
    baseAttack: 127,
    baseDefense: 69,
    baseHealth: 111,
    family: 'remoraid'
  },
  {
    number: '224',
    name: 'Octillery',
    baseAttack: 197,
    baseDefense: 141,
    baseHealth: 181,
    family: 'remoraid'
  },
  {
    number: '225',
    name: 'Delibird',
    baseAttack: 128,
    baseDefense: 90,
    baseHealth: 128,
    family: 'delibird'
  },
  {
    number: '226',
    name: 'Mantine',
    baseAttack: 148,
    baseDefense: 226,
    baseHealth: 163,
    family: 'mantine'
  },
  {
    number: '227',
    name: 'Skarmory',
    baseAttack: 148,
    baseDefense: 226,
    baseHealth: 163,
    family: 'skarmory'
  },
  {
    number: '228',
    name: 'Houndour',
    baseAttack: 152,
    baseDefense: 83,
    baseHealth: 128,
    family: 'houndour'
  },
  {
    number: '229',
    name: 'Houndoom',
    baseAttack: 224,
    baseDefense: 144,
    baseHealth: 181,
    family: 'houndour'
  },
  {
    number: '229',
    name: 'Houndoom Mega',
    baseAttack: 289,
    baseDefense: 194,
    baseHealth: 181,
    family: 'houndour'
  },
  {
    number: '230',
    name: 'Kingdra',
    baseAttack: 194,
    baseDefense: 194,
    baseHealth: 181,
    family: 'horsea'
  },
  {
    number: '231',
    name: 'Phanpy',
    baseAttack: 107,
    baseDefense: 98,
    baseHealth: 207,
    family: 'phanpy'
  },
  {
    number: '232',
    name: 'Donphan',
    baseAttack: 214,
    baseDefense: 185,
    baseHealth: 207,
    family: 'phanpy'
  },
  {
    number: '233',
    name: 'Porygon2',
    baseAttack: 198,
    baseDefense: 180,
    baseHealth: 198,
    family: 'porygon'
  },
  {
    number: '234',
    name: 'Stantler',
    baseAttack: 192,
    baseDefense: 131,
    baseHealth: 177,
    family: 'stantler'
  },
  {
    number: '235',
    name: 'Smeargle',
    baseAttack: 40,
    baseDefense: 83,
    baseHealth: 146,
    family: 'smeargle'
  },
  {
    number: '236',
    name: 'Tyrogue',
    baseAttack: 64,
    baseDefense: 64,
    baseHealth: 111,
    family: 'tyrogue'
  },
  {
    number: '237',
    name: 'Hitmontop',
    baseAttack: 173,
    baseDefense: 207,
    baseHealth: 137,
    family: 'tyrogue'
  },
  {
    number: '238',
    name: 'Smoochum',
    baseAttack: 153,
    baseDefense: 91,
    baseHealth: 128,
    family: 'jynx'
  },
  {
    number: '239',
    name: 'Elekid',
    baseAttack: 135,
    baseDefense: 101,
    baseHealth: 128,
    family: 'electabuzz'
  },
  {
    number: '240',
    name: 'Magby',
    baseAttack: 151,
    baseDefense: 99,
    baseHealth: 128,
    family: 'magmar'
  },
  {
    number: '241',
    name: 'Miltank',
    baseAttack: 157,
    baseDefense: 193,
    baseHealth: 216,
    family: 'miltank'
  },
  {
    number: '242',
    name: 'Blissey',
    baseAttack: 129,
    baseDefense: 169,
    baseHealth: 496,
    family: 'chansey'
  },
  {
    number: '243',
    name: 'Raikou',
    baseAttack: 241,
    baseDefense: 195,
    baseHealth: 207,
    family: 'raikou'
  },
  {
    number: '244',
    name: 'Entei',
    baseAttack: 235,
    baseDefense: 171,
    baseHealth: 251,
    family: 'entei'
  },
  {
    number: '245',
    name: 'Suicune',
    baseAttack: 180,
    baseDefense: 235,
    baseHealth: 225,
    family: 'suicune'
  },
  {
    number: '246',
    name: 'Larvitar',
    baseAttack: 115,
    baseDefense: 93,
    baseHealth: 137,
    family: 'larvitar'
  },
  {
    number: '247',
    name: 'Pupitar',
    baseAttack: 155,
    baseDefense: 133,
    baseHealth: 172,
    family: 'larvitar'
  },
  {
    number: '248',
    name: 'Tyranitar',
    baseAttack: 251,
    baseDefense: 207,
    baseHealth: 225,
    family: 'larvitar'
  },
  {
    number: '249',
    name: 'Lugia',
    baseAttack: 193,
    baseDefense: 310,
    baseHealth: 235,
    family: 'lugia'
  },
  {
    number: '250',
    name: 'Ho-Oh',
    baseAttack: 239,
    baseDefense: 244,
    baseHealth: 214,
    family: 'ho_oh'
  },
  {
    number: '251',
    name: 'Celebi',
    baseAttack: 210,
    baseDefense: 210,
    baseHealth: 225,
    family: 'celebi'
  },
  {
    number: '252',
    name: 'Treecko',
    baseAttack: 124,
    baseDefense: 94,
    baseHealth: 120,
    family: 'treecko'
  },
  {
    number: '253',
    name: 'Grovyle',
    baseAttack: 172,
    baseDefense: 120,
    baseHealth: 137,
    family: 'treecko'
  },
  {
    number: '254',
    name: 'Sceptile',
    baseAttack: 223,
    baseDefense: 169,
    baseHealth: 172,
    family: 'treecko'
  },
  {
    number: '255',
    name: 'Torchic',
    baseAttack: 130,
    baseDefense: 87,
    baseHealth: 128,
    family: 'torchic'
  },
  {
    number: '256',
    name: 'Combusken',
    baseAttack: 163,
    baseDefense: 115,
    baseHealth: 155,
    family: 'torchic'
  },
  {
    number: '257',
    name: 'Blaziken',
    baseAttack: 240,
    baseDefense: 141,
    baseHealth: 190,
    family: 'torchic'
  },
  {
    number: '258',
    name: 'Mudkip',
    baseAttack: 126,
    baseDefense: 93,
    baseHealth: 137,
    family: 'mudkip'
  },
  {
    number: '259',
    name: 'Marshtomp',
    baseAttack: 156,
    baseDefense: 133,
    baseHealth: 172,
    family: 'mudkip'
  },
  {
    number: '260',
    name: 'Swampert',
    baseAttack: 208,
    baseDefense: 175,
    baseHealth: 225,
    family: 'mudkip'
  },
  {
    number: '261',
    name: 'Poochyena',
    baseAttack: 96,
    baseDefense: 61,
    baseHealth: 111,
    family: 'poochyena'
  },
  {
    number: '262',
    name: 'Mightyena',
    baseAttack: 171,
    baseDefense: 132,
    baseHealth: 172,
    family: 'poochyena'
  },
  {
    number: '263',
    name: 'Zigzagoon',
    baseAttack: 58,
    baseDefense: 80,
    baseHealth: 116,
    family: 'zigzagoon'
  },
  {
    number: '263',
    name: 'Zigzagoon Galar',
    baseAttack: 58,
    baseDefense: 80,
    baseHealth: 116,
    family: 'zigzagoon'
  },
  {
    number: '264',
    name: 'Linoone',
    baseAttack: 142,
    baseDefense: 128,
    baseHealth: 186,
    family: 'zigzagoon'
  },
  {
    number: '264',
    name: 'Linoone Galar',
    baseAttack: 142,
    baseDefense: 128,
    baseHealth: 186,
    family: 'zigzagoon'
  },
  {
    number: '265',
    name: 'Wurmple',
    baseAttack: 75,
    baseDefense: 59,
    baseHealth: 128,
    family: 'wurmple'
  },
  {
    number: '266',
    name: 'Silcoon',
    baseAttack: 60,
    baseDefense: 77,
    baseHealth: 137,
    family: 'wurmple'
  },
  {
    number: '267',
    name: 'Beautifly',
    baseAttack: 189,
    baseDefense: 98,
    baseHealth: 155,
    family: 'wurmple'
  },
  {
    number: '268',
    name: 'Cascoon',
    baseAttack: 60,
    baseDefense: 77,
    baseHealth: 137,
    family: 'wurmple'
  },
  {
    number: '269',
    name: 'Dustox',
    baseAttack: 98,
    baseDefense: 162,
    baseHealth: 155,
    family: 'wurmple'
  },
  {
    number: '270',
    name: 'Lotad',
    baseAttack: 71,
    baseDefense: 77,
    baseHealth: 120,
    family: 'lotad'
  },
  {
    number: '271',
    name: 'Lombre',
    baseAttack: 112,
    baseDefense: 119,
    baseHealth: 155,
    family: 'lotad'
  },
  {
    number: '272',
    name: 'Ludicolo',
    baseAttack: 173,
    baseDefense: 176,
    baseHealth: 190,
    family: 'lotad'
  },
  {
    number: '273',
    name: 'Seedot',
    baseAttack: 71,
    baseDefense: 77,
    baseHealth: 120,
    family: 'seedot'
  },
  {
    number: '274',
    name: 'Nuzleaf',
    baseAttack: 134,
    baseDefense: 78,
    baseHealth: 172,
    family: 'seedot'
  },
  {
    number: '275',
    name: 'Shiftry',
    baseAttack: 200,
    baseDefense: 121,
    baseHealth: 207,
    family: 'seedot'
  },
  {
    number: '276',
    name: 'Taillow',
    baseAttack: 106,
    baseDefense: 61,
    baseHealth: 120,
    family: 'taillow'
  },
  {
    number: '277',
    name: 'Swellow',
    baseAttack: 185,
    baseDefense: 124,
    baseHealth: 155,
    family: 'taillow'
  },
  {
    number: '278',
    name: 'Wingull',
    baseAttack: 106,
    baseDefense: 61,
    baseHealth: 120,
    family: 'wingull'
  },
  {
    number: '279',
    name: 'Pelipper',
    baseAttack: 175,
    baseDefense: 174,
    baseHealth: 155,
    family: 'wingull'
  },
  {
    number: '280',
    name: 'Ralts',
    baseAttack: 79,
    baseDefense: 59,
    baseHealth: 99,
    family: 'ralts'
  },
  {
    number: '281',
    name: 'Kirlia',
    baseAttack: 117,
    baseDefense: 90,
    baseHealth: 116,
    family: 'ralts'
  },
  {
    number: '282',
    name: 'Gardevoir',
    baseAttack: 237,
    baseDefense: 195,
    baseHealth: 169,
    family: 'ralts'
  },
  {
    number: '283',
    name: 'Surskit',
    baseAttack: 93,
    baseDefense: 87,
    baseHealth: 120,
    family: 'surskit'
  },
  {
    number: '284',
    name: 'Masquerain',
    baseAttack: 192,
    baseDefense: 150,
    baseHealth: 172,
    family: 'surskit'
  },
  {
    number: '285',
    name: 'Shroomish',
    baseAttack: 74,
    baseDefense: 110,
    baseHealth: 155,
    family: 'shroomish'
  },
  {
    number: '286',
    name: 'Breloom',
    baseAttack: 241,
    baseDefense: 144,
    baseHealth: 155,
    family: 'shroomish'
  },
  {
    number: '287',
    name: 'Slakoth',
    baseAttack: 104,
    baseDefense: 92,
    baseHealth: 155,
    family: 'slakoth'
  },
  {
    number: '288',
    name: 'Vigoroth',
    baseAttack: 159,
    baseDefense: 145,
    baseHealth: 190,
    family: 'slakoth'
  },
  {
    number: '289',
    name: 'Slaking',
    baseAttack: 290,
    baseDefense: 166,
    baseHealth: 284,
    family: 'slakoth'
  },
  {
    number: '290',
    name: 'Nincada',
    baseAttack: 80,
    baseDefense: 126,
    baseHealth: 104,
    family: 'nincada'
  },
  {
    number: '291',
    name: 'Ninjask',
    baseAttack: 199,
    baseDefense: 112,
    baseHealth: 156,
    family: 'nincada'
  },
  {
    number: '292',
    name: 'Shedinja',
    baseAttack: 153,
    baseDefense: 73,
    baseHealth: 1,
    family: 'nincada'
  },
  {
    number: '293',
    name: 'Whismur',
    baseAttack: 92,
    baseDefense: 42,
    baseHealth: 162,
    family: 'whismur'
  },
  {
    number: '294',
    name: 'Loudred',
    baseAttack: 134,
    baseDefense: 81,
    baseHealth: 197,
    family: 'whismur'
  },
  {
    number: '295',
    name: 'Exploud',
    baseAttack: 179,
    baseDefense: 137,
    baseHealth: 232,
    family: 'whismur'
  },
  {
    number: '296',
    name: 'Makuhita',
    baseAttack: 99,
    baseDefense: 54,
    baseHealth: 176,
    family: 'makuhita'
  },
  {
    number: '297',
    name: 'Hariyama',
    baseAttack: 209,
    baseDefense: 114,
    baseHealth: 302,
    family: 'makuhita'
  },
  {
    number: '298',
    name: 'Azurill',
    baseAttack: 36,
    baseDefense: 71,
    baseHealth: 137,
    family: 'marill'
  },
  {
    number: '299',
    name: 'Nosepass',
    baseAttack: 82,
    baseDefense: 215,
    baseHealth: 102,
    family: 'nosepass'
  },
  {
    number: '300',
    name: 'Skitty',
    baseAttack: 84,
    baseDefense: 79,
    baseHealth: 137,
    family: 'skitty'
  },
  {
    number: '301',
    name: 'Delcatty',
    baseAttack: 132,
    baseDefense: 127,
    baseHealth: 172,
    family: 'skitty'
  },
  {
    number: '302',
    name: 'Sableye',
    baseAttack: 141,
    baseDefense: 136,
    baseHealth: 137,
    family: 'sableye'
  },
  {
    number: '303',
    name: 'Mawile',
    baseAttack: 155,
    baseDefense: 141,
    baseHealth: 137,
    family: 'mawile'
  },
  {
    number: '304',
    name: 'Aron',
    baseAttack: 121,
    baseDefense: 141,
    baseHealth: 137,
    family: 'aron'
  },
  {
    number: '305',
    name: 'Lairon',
    baseAttack: 158,
    baseDefense: 198,
    baseHealth: 155,
    family: 'aron'
  },
  {
    number: '306',
    name: 'Aggron',
    baseAttack: 198,
    baseDefense: 257,
    baseHealth: 172,
    family: 'aron'
  },
  {
    number: '307',
    name: 'Meditite',
    baseAttack: 78,
    baseDefense: 107,
    baseHealth: 102,
    family: 'meditite'
  },
  {
    number: '308',
    name: 'Medicham',
    baseAttack: 121,
    baseDefense: 152,
    baseHealth: 155,
    family: 'meditite'
  },
  {
    number: '309',
    name: 'Electrike',
    baseAttack: 123,
    baseDefense: 78,
    baseHealth: 120,
    family: 'electrike'
  },
  {
    number: '310',
    name: 'Manectric',
    baseAttack: 215,
    baseDefense: 127,
    baseHealth: 172,
    family: 'electrike'
  },
  {
    number: '311',
    name: 'Plusle',
    baseAttack: 167,
    baseDefense: 129,
    baseHealth: 155,
    family: 'plusle'
  },
  {
    number: '312',
    name: 'Minun',
    baseAttack: 147,
    baseDefense: 150,
    baseHealth: 155,
    family: 'minun'
  },
  {
    number: '313',
    name: 'Volbeat',
    baseAttack: 143,
    baseDefense: 166,
    baseHealth: 163,
    family: 'volbeat'
  },
  {
    number: '314',
    name: 'Illumise',
    baseAttack: 143,
    baseDefense: 166,
    baseHealth: 163,
    family: 'illumise'
  },
  {
    number: '315',
    name: 'Roselia',
    baseAttack: 186,
    baseDefense: 131,
    baseHealth: 137,
    family: 'roselia'
  },
  {
    number: '316',
    name: 'Gulpin',
    baseAttack: 80,
    baseDefense: 99,
    baseHealth: 172,
    family: 'gulpin'
  },
  {
    number: '317',
    name: 'Swalot',
    baseAttack: 140,
    baseDefense: 159,
    baseHealth: 225,
    family: 'gulpin'
  },
  {
    number: '318',
    name: 'Carvanha',
    baseAttack: 171,
    baseDefense: 39,
    baseHealth: 128,
    family: 'carvanha'
  },
  {
    number: '319',
    name: 'Sharpedo',
    baseAttack: 243,
    baseDefense: 83,
    baseHealth: 172,
    family: 'carvanha'
  },
  {
    number: '320',
    name: 'Wailmer',
    baseAttack: 136,
    baseDefense: 68,
    baseHealth: 277,
    family: 'wailmer'
  },
  {
    number: '321',
    name: 'Wailord',
    baseAttack: 175,
    baseDefense: 87,
    baseHealth: 347,
    family: 'wailmer'
  },
  {
    number: '322',
    name: 'Numel',
    baseAttack: 119,
    baseDefense: 79,
    baseHealth: 155,
    family: 'numel'
  },
  {
    number: '323',
    name: 'Camerupt',
    baseAttack: 194,
    baseDefense: 136,
    baseHealth: 172,
    family: 'numel'
  },
  {
    number: '324',
    name: 'Torkoal',
    baseAttack: 151,
    baseDefense: 203,
    baseHealth: 172,
    family: 'torkoal'
  },
  {
    number: '325',
    name: 'Spoink',
    baseAttack: 125,
    baseDefense: 122,
    baseHealth: 155,
    family: 'spoink'
  },
  {
    number: '326',
    name: 'Grumpig',
    baseAttack: 171,
    baseDefense: 188,
    baseHealth: 190,
    family: 'spoink'
  },
  {
    number: '327',
    name: 'Spinda',
    baseAttack: 116,
    baseDefense: 116,
    baseHealth: 155,
    family: 'spinda'
  },
  {
    number: '328',
    name: 'Trapinch',
    baseAttack: 162,
    baseDefense: 78,
    baseHealth: 128,
    family: 'trapinch'
  },
  {
    number: '329',
    name: 'Vibrava',
    baseAttack: 134,
    baseDefense: 99,
    baseHealth: 137,
    family: 'trapinch'
  },
  {
    number: '330',
    name: 'Flygon',
    baseAttack: 205,
    baseDefense: 168,
    baseHealth: 190,
    family: 'trapinch'
  },
  {
    number: '331',
    name: 'Cacnea',
    baseAttack: 156,
    baseDefense: 74,
    baseHealth: 137,
    family: 'cacnea'
  },
  {
    number: '332',
    name: 'Cacturne',
    baseAttack: 221,
    baseDefense: 115,
    baseHealth: 172,
    family: 'cacnea'
  },
  {
    number: '333',
    name: 'Swablu',
    baseAttack: 76,
    baseDefense: 132,
    baseHealth: 128,
    family: 'swablu'
  },
  {
    number: '334',
    name: 'Altaria',
    baseAttack: 141,
    baseDefense: 201,
    baseHealth: 181,
    family: 'swablu'
  },
  {
    number: '335',
    name: 'Zangoose',
    baseAttack: 222,
    baseDefense: 124,
    baseHealth: 177,
    family: 'zangoose'
  },
  {
    number: '336',
    name: 'Seviper',
    baseAttack: 196,
    baseDefense: 118,
    baseHealth: 177,
    family: 'seviper'
  },
  {
    number: '337',
    name: 'Lunatone',
    baseAttack: 178,
    baseDefense: 153,
    baseHealth: 207,
    family: 'lunatone'
  },
  {
    number: '338',
    name: 'Solrock',
    baseAttack: 178,
    baseDefense: 153,
    baseHealth: 207,
    family: 'solrock'
  },
  {
    number: '339',
    name: 'Barboach',
    baseAttack: 93,
    baseDefense: 82,
    baseHealth: 137,
    family: 'barboach'
  },
  {
    number: '340',
    name: 'Whiscash',
    baseAttack: 151,
    baseDefense: 141,
    baseHealth: 242,
    family: 'barboach'
  },
  {
    number: '341',
    name: 'Corphish',
    baseAttack: 141,
    baseDefense: 99,
    baseHealth: 125,
    family: 'corphish'
  },
  {
    number: '342',
    name: 'Crawdaunt',
    baseAttack: 224,
    baseDefense: 142,
    baseHealth: 160,
    family: 'corphish'
  },
  {
    number: '343',
    name: 'Baltoy',
    baseAttack: 77,
    baseDefense: 124,
    baseHealth: 120,
    family: 'baltoy'
  },
  {
    number: '344',
    name: 'Claydol',
    baseAttack: 140,
    baseDefense: 229,
    baseHealth: 155,
    family: 'baltoy'
  },
  {
    number: '345',
    name: 'Lileep',
    baseAttack: 105,
    baseDefense: 150,
    baseHealth: 165,
    family: 'lileep'
  },
  {
    number: '346',
    name: 'Cradily',
    baseAttack: 152,
    baseDefense: 194,
    baseHealth: 200,
    family: 'lileep'
  },
  {
    number: '347',
    name: 'Anorith',
    baseAttack: 176,
    baseDefense: 100,
    baseHealth: 128,
    family: 'anorith'
  },
  {
    number: '348',
    name: 'Armaldo',
    baseAttack: 222,
    baseDefense: 174,
    baseHealth: 181,
    family: 'anorith'
  },
  {
    number: '349',
    name: 'Feebas',
    baseAttack: 29,
    baseDefense: 85,
    baseHealth: 85,
    family: 'feebas'
  },
  {
    number: '350',
    name: 'Milotic',
    baseAttack: 192,
    baseDefense: 219,
    baseHealth: 216,
    family: 'feebas'
  },
  {
    number: '351',
    name: 'Castform',
    baseAttack: 139,
    baseDefense: 139,
    baseHealth: 172,
    family: 'castform'
  },
  {
    number: '352',
    name: 'Kecleon',
    baseAttack: 161,
    baseDefense: 189,
    baseHealth: 155,
    family: 'kecleon'
  },
  {
    number: '353',
    name: 'Shuppet',
    baseAttack: 138,
    baseDefense: 65,
    baseHealth: 127,
    family: 'shuppet'
  },
  {
    number: '354',
    name: 'Banette',
    baseAttack: 218,
    baseDefense: 126,
    baseHealth: 162,
    family: 'shuppet'
  },
  {
    number: '355',
    name: 'Duskull',
    baseAttack: 70,
    baseDefense: 162,
    baseHealth: 85,
    family: 'duskull'
  },
  {
    number: '356',
    name: 'Dusclops',
    baseAttack: 124,
    baseDefense: 234,
    baseHealth: 120,
    family: 'duskull'
  },
  {
    number: '357',
    name: 'Tropius',
    baseAttack: 136,
    baseDefense: 163,
    baseHealth: 223,
    family: 'tropius'
  },
  {
    number: '358',
    name: 'Chimecho',
    baseAttack: 175,
    baseDefense: 170,
    baseHealth: 181,
    family: 'chimecho'
  },
  {
    number: '359',
    name: 'Absol',
    baseAttack: 246,
    baseDefense: 120,
    baseHealth: 163,
    family: 'absol'
  },
  {
    number: '360',
    name: 'Wynaut',
    baseAttack: 41,
    baseDefense: 86,
    baseHealth: 216,
    family: 'wobbuffet'
  },
  {
    number: '361',
    name: 'Snorunt',
    baseAttack: 95,
    baseDefense: 95,
    baseHealth: 137,
    family: 'snorunt'
  },
  {
    number: '362',
    name: 'Glalie',
    baseAttack: 162,
    baseDefense: 162,
    baseHealth: 190,
    family: 'snorunt'
  },
  {
    number: '363',
    name: 'Spheal',
    baseAttack: 95,
    baseDefense: 90,
    baseHealth: 172,
    family: 'spheal'
  },
  {
    number: '364',
    name: 'Sealeo',
    baseAttack: 137,
    baseDefense: 132,
    baseHealth: 207,
    family: 'spheal'
  },
  {
    number: '365',
    name: 'Walrein',
    baseAttack: 182,
    baseDefense: 176,
    baseHealth: 242,
    family: 'spheal'
  },
  {
    number: '366',
    name: 'Clamperl',
    baseAttack: 133,
    baseDefense: 135,
    baseHealth: 111,
    family: 'clamperl'
  },
  {
    number: '367',
    name: 'Huntail',
    baseAttack: 197,
    baseDefense: 179,
    baseHealth: 146,
    family: 'clamperl'
  },
  {
    number: '368',
    name: 'Gorebyss',
    baseAttack: 211,
    baseDefense: 179,
    baseHealth: 146,
    family: 'clamperl'
  },
  {
    number: '369',
    name: 'Relicanth',
    baseAttack: 162,
    baseDefense: 203,
    baseHealth: 225,
    family: 'relicanth'
  },
  {
    number: '370',
    name: 'Luvdisc',
    baseAttack: 81,
    baseDefense: 128,
    baseHealth: 125,
    family: 'luvdisc'
  },
  {
    number: '371',
    name: 'Bagon',
    baseAttack: 134,
    baseDefense: 93,
    baseHealth: 128,
    family: 'bagon'
  },
  {
    number: '372',
    name: 'Shelgon',
    baseAttack: 172,
    baseDefense: 155,
    baseHealth: 163,
    family: 'bagon'
  },
  {
    number: '373',
    name: 'Salamence',
    baseAttack: 277,
    baseDefense: 168,
    baseHealth: 216,
    family: 'bagon'
  },
  {
    number: '374',
    name: 'Beldum',
    baseAttack: 96,
    baseDefense: 132,
    baseHealth: 120,
    family: 'beldum'
  },
  {
    number: '375',
    name: 'Metang',
    baseAttack: 138,
    baseDefense: 176,
    baseHealth: 155,
    family: 'beldum'
  },
  {
    number: '376',
    name: 'Metagross',
    baseAttack: 257,
    baseDefense: 228,
    baseHealth: 190,
    family: 'beldum'
  },
  {
    number: '377',
    name: 'Regirock',
    baseAttack: 179,
    baseDefense: 309,
    baseHealth: 190,
    family: 'regirock'
  },
  {
    number: '378',
    name: 'Regice',
    baseAttack: 179,
    baseDefense: 309,
    baseHealth: 190,
    family: 'regice'
  },
  {
    number: '379',
    name: 'Registeel',
    baseAttack: 143,
    baseDefense: 285,
    baseHealth: 190,
    family: 'registeel'
  },
  {
    number: '380',
    name: 'Latias',
    baseAttack: 228,
    baseDefense: 246,
    baseHealth: 190,
    family: 'latias'
  },
  {
    number: '381',
    name: 'Latios',
    baseAttack: 268,
    baseDefense: 212,
    baseHealth: 190,
    family: 'latios'
  },
  {
    number: '382',
    name: 'Kyogre',
    baseAttack: 270,
    baseDefense: 228,
    baseHealth: 205,
    family: 'kyogre'
  },
  {
    number: '383',
    name: 'Groudon',
    baseAttack: 270,
    baseDefense: 228,
    baseHealth: 205,
    family: 'groudon'
  },
  {
    number: '384',
    name: 'Rayquaza',
    baseAttack: 284,
    baseDefense: 170,
    baseHealth: 213,
    family: 'rayquaza'
  },
  {
    number: '385',
    name: 'Jirachi',
    baseAttack: 210,
    baseDefense: 210,
    baseHealth: 225,
    family: 'jirachi'
  },
  {
    number: '386',
    name: 'Deoxys',
    baseAttack: 345,
    baseDefense: 115,
    baseHealth: 137,
    family: 'deoxys'
  },
  {
    number: '386',
    name: 'Deoxys Attack',
    baseAttack: 414,
    baseDefense: 46,
    baseHealth: 137,
    family: 'deoxys'
  },
  {
    number: '386',
    name: 'Deoxys Defense',
    baseAttack: 144,
    baseDefense: 330,
    baseHealth: 137,
    family: 'deoxys'
  },
  {
    number: '386',
    name: 'Deoxys Normal',
    baseAttack: 345,
    baseDefense: 115,
    baseHealth: 137,
    family: 'deoxys'
  },
  {
    number: '386',
    name: 'Deoxys Speed',
    baseAttack: 230,
    baseDefense: 218,
    baseHealth: 137,
    family: 'deoxys'
  },
  {
    number: '387',
    name: 'Turtwig',
    baseAttack: 119,
    baseDefense: 110,
    baseHealth: 146,
    family: 'turtwig'
  },
  {
    number: '388',
    name: 'Grotle',
    baseAttack: 157,
    baseDefense: 143,
    baseHealth: 181,
    family: 'turtwig'
  },
  {
    number: '389',
    name: 'Torterra',
    baseAttack: 202,
    baseDefense: 188,
    baseHealth: 216,
    family: 'turtwig'
  },
  {
    number: '390',
    name: 'Chimchar',
    baseAttack: 113,
    baseDefense: 86,
    baseHealth: 127,
    family: 'chimchar'
  },
  {
    number: '391',
    name: 'Monferno',
    baseAttack: 158,
    baseDefense: 105,
    baseHealth: 162,
    family: 'chimchar'
  },
  {
    number: '392',
    name: 'Infernape',
    baseAttack: 222,
    baseDefense: 151,
    baseHealth: 183,
    family: 'chimchar'
  },
  {
    number: '393',
    name: 'Piplup',
    baseAttack: 112,
    baseDefense: 102,
    baseHealth: 142,
    family: 'piplup'
  },
  {
    number: '394',
    name: 'Prinplup',
    baseAttack: 150,
    baseDefense: 139,
    baseHealth: 162,
    family: 'piplup'
  },
  {
    number: '395',
    name: 'Empoleon',
    baseAttack: 210,
    baseDefense: 186,
    baseHealth: 197,
    family: 'piplup'
  },
  {
    number: '396',
    name: 'Starly',
    baseAttack: 101,
    baseDefense: 58,
    baseHealth: 120,
    family: 'starly'
  },
  {
    number: '397',
    name: 'Staravia',
    baseAttack: 142,
    baseDefense: 94,
    baseHealth: 146,
    family: 'starly'
  },
  {
    number: '398',
    name: 'Staraptor',
    baseAttack: 234,
    baseDefense: 140,
    baseHealth: 198,
    family: 'starly'
  },
  {
    number: '399',
    name: 'Bidoof',
    baseAttack: 80,
    baseDefense: 73,
    baseHealth: 153,
    family: 'bidoof'
  },
  {
    number: '400',
    name: 'Bibarel',
    baseAttack: 162,
    baseDefense: 119,
    baseHealth: 188,
    family: 'bidoof'
  },
  {
    number: '401',
    name: 'Kricketot',
    baseAttack: 45,
    baseDefense: 74,
    baseHealth: 114,
    family: 'kricketot'
  },
  {
    number: '402',
    name: 'Kricketune',
    baseAttack: 160,
    baseDefense: 100,
    baseHealth: 184,
    family: 'kricketot'
  },
  {
    number: '403',
    name: 'Shinx',
    baseAttack: 117,
    baseDefense: 64,
    baseHealth: 128,
    family: 'shinx'
  },
  {
    number: '404',
    name: 'Luxio',
    baseAttack: 159,
    baseDefense: 95,
    baseHealth: 155,
    family: 'shinx'
  },
  {
    number: '405',
    name: 'Luxray',
    baseAttack: 232,
    baseDefense: 156,
    baseHealth: 190,
    family: 'shinx'
  },
  {
    number: '406',
    name: 'Budew',
    baseAttack: 91,
    baseDefense: 109,
    baseHealth: 120,
    family: 'roselia'
  },
  {
    number: '407',
    name: 'Roserade',
    baseAttack: 243,
    baseDefense: 185,
    baseHealth: 155,
    family: 'roselia'
  },
  {
    number: '408',
    name: 'Cranidos',
    baseAttack: 218,
    baseDefense: 71,
    baseHealth: 167,
    family: 'cranidos'
  },
  {
    number: '409',
    name: 'Rampardos',
    baseAttack: 295,
    baseDefense: 109,
    baseHealth: 219,
    family: 'cranidos'
  },
  {
    number: '410',
    name: 'Shieldon',
    baseAttack: 76,
    baseDefense: 195,
    baseHealth: 102,
    family: 'shieldon'
  },
  {
    number: '411',
    name: 'Bastiodon',
    baseAttack: 94,
    baseDefense: 286,
    baseHealth: 155,
    family: 'shieldon'
  },
  {
    number: '412',
    name: 'Burmy',
    baseAttack: 53,
    baseDefense: 83,
    baseHealth: 120,
    family: 'burmy'
  },
  {
    number: '413',
    name: 'Wormadam',
    baseAttack: 141,
    baseDefense: 180,
    baseHealth: 155,
    family: 'burmy'
  },
  {
    number: '414',
    name: 'Mothim',
    baseAttack: 185,
    baseDefense: 98,
    baseHealth: 172,
    family: 'burmy'
  },
  {
    number: '415',
    name: 'Combee',
    baseAttack: 59,
    baseDefense: 83,
    baseHealth: 102,
    family: 'combee'
  },
  {
    number: '416',
    name: 'Vespiquen',
    baseAttack: 149,
    baseDefense: 190,
    baseHealth: 172,
    family: 'combee'
  },
  {
    number: '417',
    name: 'Pachirisu',
    baseAttack: 94,
    baseDefense: 172,
    baseHealth: 155,
    family: 'pachirisu'
  },
  {
    number: '418',
    name: 'Buizel',
    baseAttack: 132,
    baseDefense: 67,
    baseHealth: 146,
    family: 'buizel'
  },
  {
    number: '419',
    name: 'Floatzel',
    baseAttack: 221,
    baseDefense: 114,
    baseHealth: 198,
    family: 'buizel'
  },
  {
    number: '420',
    name: 'Cherubi',
    baseAttack: 108,
    baseDefense: 92,
    baseHealth: 128,
    family: 'cherubi'
  },
  {
    number: '421',
    name: 'Cherrim',
    baseAttack: 170,
    baseDefense: 153,
    baseHealth: 172,
    family: 'cherubi'
  },
  {
    number: '422',
    name: 'Shellos',
    baseAttack: 103,
    baseDefense: 105,
    baseHealth: 183,
    family: 'shellos'
  },
  {
    number: '423',
    name: 'Gastrodon',
    baseAttack: 169,
    baseDefense: 143,
    baseHealth: 244,
    family: 'shellos'
  },
  {
    number: '424',
    name: 'Ambipom',
    baseAttack: 205,
    baseDefense: 143,
    baseHealth: 181,
    family: 'aipom'
  },
  {
    number: '425',
    name: 'Drifloon',
    baseAttack: 117,
    baseDefense: 80,
    baseHealth: 207,
    family: 'drifloon'
  },
  {
    number: '426',
    name: 'Drifblim',
    baseAttack: 180,
    baseDefense: 102,
    baseHealth: 312,
    family: 'drifloon'
  },
  {
    number: '427',
    name: 'Buneary',
    baseAttack: 130,
    baseDefense: 105,
    baseHealth: 146,
    family: 'buneary'
  },
  {
    number: '428',
    name: 'Lopunny',
    baseAttack: 156,
    baseDefense: 194,
    baseHealth: 163,
    family: 'buneary'
  },
  {
    number: '429',
    name: 'Mismagius',
    baseAttack: 211,
    baseDefense: 187,
    baseHealth: 155,
    family: 'misdreavus'
  },
  {
    number: '430',
    name: 'Honchkrow',
    baseAttack: 243,
    baseDefense: 103,
    baseHealth: 225,
    family: 'murkrow'
  },
  {
    number: '431',
    name: 'Glameow',
    baseAttack: 109,
    baseDefense: 82,
    baseHealth: 135,
    family: 'glameow'
  },
  {
    number: '432',
    name: 'Purugly',
    baseAttack: 172,
    baseDefense: 133,
    baseHealth: 174,
    family: 'glameow'
  },
  {
    number: '433',
    name: 'Chingling',
    baseAttack: 114,
    baseDefense: 94,
    baseHealth: 128,
    family: 'chimecho'
  },
  {
    number: '434',
    name: 'Stunky',
    baseAttack: 121,
    baseDefense: 90,
    baseHealth: 160,
    family: 'stunky'
  },
  {
    number: '435',
    name: 'Skuntank',
    baseAttack: 184,
    baseDefense: 132,
    baseHealth: 230,
    family: 'stunky'
  },
  {
    number: '436',
    name: 'Bronzor',
    baseAttack: 43,
    baseDefense: 154,
    baseHealth: 149,
    family: 'bronzor'
  },
  {
    number: '437',
    name: 'Bronzong',
    baseAttack: 161,
    baseDefense: 213,
    baseHealth: 167,
    family: 'bronzor'
  },
  {
    number: '438',
    name: 'Bonsly',
    baseAttack: 124,
    baseDefense: 133,
    baseHealth: 137,
    family: 'sudowoodo'
  },
  {
    number: '439',
    name: 'Mime Jr',
    baseAttack: 125,
    baseDefense: 142,
    baseHealth: 85,
    family: 'mr_mime'
  },
  {
    number: '440',
    name: 'Happiny',
    baseAttack: 25,
    baseDefense: 77,
    baseHealth: 225,
    family: 'chansey'
  },
  {
    number: '441',
    name: 'Chatot',
    baseAttack: 183,
    baseDefense: 91,
    baseHealth: 183,
    family: 'chatot'
  },
  {
    number: '442',
    name: 'Spiritomb',
    baseAttack: 169,
    baseDefense: 199,
    baseHealth: 137,
    family: 'spiritomb'
  },
  {
    number: '443',
    name: 'Gible',
    baseAttack: 124,
    baseDefense: 84,
    baseHealth: 151,
    family: 'gible'
  },
  {
    number: '444',
    name: 'Gabite',
    baseAttack: 172,
    baseDefense: 125,
    baseHealth: 169,
    family: 'gible'
  },
  {
    number: '445',
    name: 'Garchomp',
    baseAttack: 261,
    baseDefense: 193,
    baseHealth: 239,
    family: 'gible'
  },
  {
    number: '446',
    name: 'Munchlax',
    baseAttack: 137,
    baseDefense: 117,
    baseHealth: 286,
    family: 'snorlax'
  },
  {
    number: '447',
    name: 'Riolu',
    baseAttack: 127,
    baseDefense: 78,
    baseHealth: 120,
    family: 'lucario'
  },
  {
    number: '448',
    name: 'Lucario',
    baseAttack: 236,
    baseDefense: 144,
    baseHealth: 172,
    family: 'lucario'
  },
  {
    number: '449',
    name: 'Hippopotas',
    baseAttack: 124,
    baseDefense: 118,
    baseHealth: 169,
    family: 'hippopotas'
  },
  {
    number: '450',
    name: 'Hippowdon',
    baseAttack: 201,
    baseDefense: 191,
    baseHealth: 239,
    family: 'hippopotas'
  },
  {
    number: '451',
    name: 'Skorupi',
    baseAttack: 93,
    baseDefense: 151,
    baseHealth: 120,
    family: 'skorupi'
  },
  {
    number: '452',
    name: 'Drapion',
    baseAttack: 180,
    baseDefense: 202,
    baseHealth: 172,
    family: 'skorupi'
  },
  {
    number: '453',
    name: 'Croagunk',
    baseAttack: 116,
    baseDefense: 76,
    baseHealth: 134,
    family: 'croagunk'
  },
  {
    number: '454',
    name: 'Toxicroak',
    baseAttack: 211,
    baseDefense: 133,
    baseHealth: 195,
    family: 'croagunk'
  },
  {
    number: '455',
    name: 'Carnivine',
    baseAttack: 187,
    baseDefense: 136,
    baseHealth: 179,
    family: 'carnivine'
  },
  {
    number: '456',
    name: 'Finneon',
    baseAttack: 96,
    baseDefense: 116,
    baseHealth: 135,
    family: 'finneon'
  },
  {
    number: '457',
    name: 'Lumineon',
    baseAttack: 142,
    baseDefense: 170,
    baseHealth: 170,
    family: 'finneon'
  },
  {
    number: '458',
    name: 'Mantyke',
    baseAttack: 105,
    baseDefense: 179,
    baseHealth: 128,
    family: 'mantine'
  },
  {
    number: '459',
    name: 'Snover',
    baseAttack: 115,
    baseDefense: 105,
    baseHealth: 155,
    family: 'snover'
  },
  {
    number: '460',
    name: 'Abomasnow',
    baseAttack: 178,
    baseDefense: 158,
    baseHealth: 207,
    family: 'snover'
  },
  {
    number: '460',
    name: 'Abomasnow Mega',
    baseAttack: 240,
    baseDefense: 191,
    baseHealth: 207,
    family: 'snover'
  },
  {
    number: '461',
    name: 'Weavile',
    baseAttack: 243,
    baseDefense: 171,
    baseHealth: 172,
    family: 'sneasel'
  },
  {
    number: '462',
    name: 'Magnezone',
    baseAttack: 238,
    baseDefense: 205,
    baseHealth: 172,
    family: 'magnemite'
  },
  {
    number: '463',
    name: 'Lickilicky',
    baseAttack: 161,
    baseDefense: 181,
    baseHealth: 242,
    family: 'lickitung'
  },
  {
    number: '464',
    name: 'Rhyperior',
    baseAttack: 241,
    baseDefense: 190,
    baseHealth: 251,
    family: 'rhyhorn'
  },
  {
    number: '465',
    name: 'Tangrowth',
    baseAttack: 207,
    baseDefense: 184,
    baseHealth: 225,
    family: 'tangela'
  },
  {
    number: '466',
    name: 'Electivire',
    baseAttack: 249,
    baseDefense: 163,
    baseHealth: 181,
    family: 'electabuzz'
  },
  {
    number: '467',
    name: 'Magmortar',
    baseAttack: 247,
    baseDefense: 172,
    baseHealth: 181,
    family: 'magmar'
  },
  {
    number: '468',
    name: 'Togekiss',
    baseAttack: 225,
    baseDefense: 217,
    baseHealth: 198,
    family: 'togepi'
  },
  {
    number: '469',
    name: 'Yanmega',
    baseAttack: 231,
    baseDefense: 156,
    baseHealth: 200,
    family: 'yanma'
  },
  {
    number: '470',
    name: 'Leafeon',
    baseAttack: 216,
    baseDefense: 219,
    baseHealth: 163,
    family: 'eevee'
  },
  {
    number: '471',
    name: 'Glaceon',
    baseAttack: 238,
    baseDefense: 205,
    baseHealth: 163,
    family: 'eevee'
  },
  {
    number: '472',
    name: 'Gliscor',
    baseAttack: 185,
    baseDefense: 222,
    baseHealth: 181,
    family: 'gligar'
  },
  {
    number: '473',
    name: 'Mamoswine',
    baseAttack: 247,
    baseDefense: 146,
    baseHealth: 242,
    family: 'swinub'
  },
  {
    number: '474',
    name: 'Porygon Z',
    baseAttack: 264,
    baseDefense: 150,
    baseHealth: 198,
    family: 'porygon'
  },
  {
    number: '475',
    name: 'Gallade',
    baseAttack: 237,
    baseDefense: 195,
    baseHealth: 169,
    family: 'ralts'
  },
  {
    number: '476',
    name: 'Probopass',
    baseAttack: 135,
    baseDefense: 275,
    baseHealth: 155,
    family: 'nosepass'
  },
  {
    number: '477',
    name: 'Dusknoir',
    baseAttack: 180,
    baseDefense: 254,
    baseHealth: 128,
    family: 'duskull'
  },
  {
    number: '478',
    name: 'Froslass',
    baseAttack: 171,
    baseDefense: 150,
    baseHealth: 172,
    family: 'snorunt'
  },
  {
    number: '479',
    name: 'Rotom',
    baseAttack: 185,
    baseDefense: 159,
    baseHealth: 137,
    family: 'rotom'
  },
  {
    number: '480',
    name: 'Uxie',
    baseAttack: 156,
    baseDefense: 270,
    baseHealth: 181,
    family: 'uxie'
  },
  {
    number: '481',
    name: 'Mesprit',
    baseAttack: 212,
    baseDefense: 212,
    baseHealth: 190,
    family: 'mesprit'
  },
  {
    number: '482',
    name: 'Azelf',
    baseAttack: 270,
    baseDefense: 151,
    baseHealth: 181,
    family: 'azelf'
  },
  {
    number: '483',
    name: 'Dialga',
    baseAttack: 275,
    baseDefense: 211,
    baseHealth: 205,
    family: 'dialga'
  },
  {
    number: '484',
    name: 'Palkia',
    baseAttack: 280,
    baseDefense: 215,
    baseHealth: 189,
    family: 'palkia'
  },
  {
    number: '485',
    name: 'Heatran',
    baseAttack: 251,
    baseDefense: 213,
    baseHealth: 209,
    family: 'heatran'
  },
  {
    number: '486',
    name: 'Regigigas',
    baseAttack: 287,
    baseDefense: 210,
    baseHealth: 221,
    family: 'regigigas'
  },
  {
    number: '487',
    name: 'Giratina',
    baseAttack: 187,
    baseDefense: 225,
    baseHealth: 284,
    family: 'giratina'
  },
  {
    number: '487',
    name: 'Giratina Origin',
    baseAttack: 225,
    baseDefense: 187,
    baseHealth: 284,
    family: 'giratina'
  },
  {
    number: '488',
    name: 'Cresselia',
    baseAttack: 152,
    baseDefense: 258,
    baseHealth: 260,
    family: 'cresselia'
  },
  {
    number: '489',
    name: 'Phione',
    baseAttack: 162,
    baseDefense: 162,
    baseHealth: 190,
    family: 'phione'
  },
  {
    number: '490',
    name: 'Manaphy',
    baseAttack: 210,
    baseDefense: 210,
    baseHealth: 225,
    family: 'manaphy'
  },
  {
    number: '491',
    name: 'Darkrai',
    baseAttack: 285,
    baseDefense: 198,
    baseHealth: 172,
    family: 'darkrai'
  },
  {
    number: '492',
    name: 'Shaymin',
    baseAttack: 210,
    baseDefense: 210,
    baseHealth: 225,
    family: 'shaymin'
  },
  {
    number: '493',
    name: 'Arceus',
    baseAttack: 238,
    baseDefense: 238,
    baseHealth: 237,
    family: 'arceus'
  },
  {
    number: '494',
    name: 'Victini',
    baseAttack: 210,
    baseDefense: 210,
    baseHealth: 225,
    family: 'victini'
  },
  {
    number: '495',
    name: 'Snivy',
    baseAttack: 88,
    baseDefense: 107,
    baseHealth: 128,
    family: 'snivy'
  },
  {
    number: '496',
    name: 'Servine',
    baseAttack: 122,
    baseDefense: 152,
    baseHealth: 155,
    family: 'snivy'
  },
  {
    number: '497',
    name: 'Serperior',
    baseAttack: 161,
    baseDefense: 204,
    baseHealth: 181,
    family: 'snivy'
  },
  {
    number: '498',
    name: 'Tepig',
    baseAttack: 115,
    baseDefense: 85,
    baseHealth: 163,
    family: 'tepig'
  },
  {
    number: '499',
    name: 'Pignite',
    baseAttack: 173,
    baseDefense: 106,
    baseHealth: 207,
    family: 'tepig'
  },
  {
    number: '500',
    name: 'Emboar',
    baseAttack: 235,
    baseDefense: 127,
    baseHealth: 242,
    family: 'tepig'
  },
  {
    number: '501',
    name: 'Oshawott',
    baseAttack: 117,
    baseDefense: 85,
    baseHealth: 146,
    family: 'oshawott'
  },
  {
    number: '502',
    name: 'Dewott',
    baseAttack: 159,
    baseDefense: 116,
    baseHealth: 181,
    family: 'oshawott'
  },
  {
    number: '503',
    name: 'Samurott',
    baseAttack: 212,
    baseDefense: 157,
    baseHealth: 216,
    family: 'oshawott'
  },
  {
    number: '504',
    name: 'Patrat',
    baseAttack: 98,
    baseDefense: 73,
    baseHealth: 128,
    family: 'patrat'
  },
  {
    number: '505',
    name: 'Watchog',
    baseAttack: 165,
    baseDefense: 139,
    baseHealth: 155,
    family: 'patrat'
  },
  {
    number: '506',
    name: 'Lillipup',
    baseAttack: 107,
    baseDefense: 86,
    baseHealth: 128,
    family: 'lillipup'
  },
  {
    number: '507',
    name: 'Herdier',
    baseAttack: 145,
    baseDefense: 126,
    baseHealth: 163,
    family: 'lillipup'
  },
  {
    number: '508',
    name: 'Stoutland',
    baseAttack: 206,
    baseDefense: 182,
    baseHealth: 198,
    family: 'lillipup'
  },
  {
    number: '509',
    name: 'Purrloin',
    baseAttack: 98,
    baseDefense: 73,
    baseHealth: 121,
    family: 'purrloin'
  },
  {
    number: '510',
    name: 'Liepard',
    baseAttack: 187,
    baseDefense: 106,
    baseHealth: 162,
    family: 'purrloin'
  },
  {
    number: '511',
    name: 'Pansage',
    baseAttack: 104,
    baseDefense: 94,
    baseHealth: 137,
    family: 'pansage'
  },
  {
    number: '512',
    name: 'Simisage',
    baseAttack: 206,
    baseDefense: 133,
    baseHealth: 181,
    family: 'pansage'
  },
  {
    number: '513',
    name: 'Pansear',
    baseAttack: 104,
    baseDefense: 94,
    baseHealth: 137,
    family: 'pansear'
  },
  {
    number: '514',
    name: 'Simisear',
    baseAttack: 206,
    baseDefense: 133,
    baseHealth: 181,
    family: 'pansear'
  },
  {
    number: '515',
    name: 'Panpour',
    baseAttack: 104,
    baseDefense: 94,
    baseHealth: 137,
    family: 'panpour'
  },
  {
    number: '516',
    name: 'Simipour',
    baseAttack: 206,
    baseDefense: 133,
    baseHealth: 181,
    family: 'panpour'
  },
  {
    number: '517',
    name: 'Munna',
    baseAttack: 111,
    baseDefense: 92,
    baseHealth: 183,
    family: 'munna'
  },
  {
    number: '518',
    name: 'Musharna',
    baseAttack: 183,
    baseDefense: 166,
    baseHealth: 253,
    family: 'munna'
  },
  {
    number: '519',
    name: 'Pidove',
    baseAttack: 98,
    baseDefense: 80,
    baseHealth: 137,
    family: 'pidove'
  },
  {
    number: '520',
    name: 'Tranquill',
    baseAttack: 144,
    baseDefense: 107,
    baseHealth: 158,
    family: 'pidove'
  },
  {
    number: '521',
    name: 'Unfezant',
    baseAttack: 226,
    baseDefense: 146,
    baseHealth: 190,
    family: 'pidove'
  },
  {
    number: '522',
    name: 'Blitzle',
    baseAttack: 118,
    baseDefense: 64,
    baseHealth: 128,
    family: 'blitzle'
  },
  {
    number: '523',
    name: 'Zebstrika',
    baseAttack: 211,
    baseDefense: 136,
    baseHealth: 181,
    family: 'blitzle'
  },
  {
    number: '524',
    name: 'Roggenrola',
    baseAttack: 121,
    baseDefense: 110,
    baseHealth: 146,
    family: 'roggenrola'
  },
  {
    number: '525',
    name: 'Boldore',
    baseAttack: 174,
    baseDefense: 143,
    baseHealth: 172,
    family: 'roggenrola'
  },
  {
    number: '526',
    name: 'Gigalith',
    baseAttack: 226,
    baseDefense: 201,
    baseHealth: 198,
    family: 'roggenrola'
  },
  {
    number: '527',
    name: 'Woobat',
    baseAttack: 107,
    baseDefense: 85,
    baseHealth: 163,
    family: 'woobat'
  },
  {
    number: '528',
    name: 'Swoobat',
    baseAttack: 161,
    baseDefense: 119,
    baseHealth: 167,
    family: 'woobat'
  },
  {
    number: '529',
    name: 'Drilbur',
    baseAttack: 154,
    baseDefense: 85,
    baseHealth: 155,
    family: 'drilbur'
  },
  {
    number: '530',
    name: 'Excadrill',
    baseAttack: 255,
    baseDefense: 129,
    baseHealth: 242,
    family: 'drilbur'
  },
  {
    number: '531',
    name: 'Audino',
    baseAttack: 114,
    baseDefense: 163,
    baseHealth: 230,
    family: 'audino'
  },
  {
    number: '532',
    name: 'Timburr',
    baseAttack: 134,
    baseDefense: 87,
    baseHealth: 181,
    family: 'timburr'
  },
  {
    number: '533',
    name: 'Gurdurr',
    baseAttack: 180,
    baseDefense: 134,
    baseHealth: 198,
    family: 'timburr'
  },
  {
    number: '534',
    name: 'Conkeldurr',
    baseAttack: 243,
    baseDefense: 158,
    baseHealth: 233,
    family: 'timburr'
  },
  {
    number: '535',
    name: 'Tympole',
    baseAttack: 98,
    baseDefense: 78,
    baseHealth: 137,
    family: 'tympole'
  },
  {
    number: '536',
    name: 'Palpitoad',
    baseAttack: 128,
    baseDefense: 109,
    baseHealth: 181,
    family: 'tympole'
  },
  {
    number: '537',
    name: 'Seismitoad',
    baseAttack: 188,
    baseDefense: 150,
    baseHealth: 233,
    family: 'tympole'
  },
  {
    number: '538',
    name: 'Throh',
    baseAttack: 172,
    baseDefense: 160,
    baseHealth: 260,
    family: 'throh'
  },
  {
    number: '539',
    name: 'Sawk',
    baseAttack: 231,
    baseDefense: 153,
    baseHealth: 181,
    family: 'sawk'
  },
  {
    number: '540',
    name: 'Sewaddle',
    baseAttack: 96,
    baseDefense: 124,
    baseHealth: 128,
    family: 'sewaddle'
  },
  {
    number: '541',
    name: 'Swadloon',
    baseAttack: 115,
    baseDefense: 162,
    baseHealth: 146,
    family: 'sewaddle'
  },
  {
    number: '542',
    name: 'Leavanny',
    baseAttack: 205,
    baseDefense: 165,
    baseHealth: 181,
    family: 'sewaddle'
  },
  {
    number: '543',
    name: 'Venipede',
    baseAttack: 83,
    baseDefense: 99,
    baseHealth: 102,
    family: 'venipede'
  },
  {
    number: '544',
    name: 'Whirlipede',
    baseAttack: 100,
    baseDefense: 173,
    baseHealth: 120,
    family: 'venipede'
  },
  {
    number: '545',
    name: 'Scolipede',
    baseAttack: 203,
    baseDefense: 175,
    baseHealth: 155,
    family: 'venipede'
  },
  {
    number: '546',
    name: 'Cottonee',
    baseAttack: 71,
    baseDefense: 111,
    baseHealth: 120,
    family: 'cottonee'
  },
  {
    number: '547',
    name: 'Whimsicott',
    baseAttack: 164,
    baseDefense: 176,
    baseHealth: 155,
    family: 'cottonee'
  },
  {
    number: '548',
    name: 'Petilil',
    baseAttack: 119,
    baseDefense: 91,
    baseHealth: 128,
    family: 'petilil'
  },
  {
    number: '549',
    name: 'Lilligant',
    baseAttack: 214,
    baseDefense: 155,
    baseHealth: 172,
    family: 'petilil'
  },
  {
    number: '550',
    name: 'Basculin',
    baseAttack: 189,
    baseDefense: 129,
    baseHealth: 172,
    family: 'basculin'
  },
  {
    number: '551',
    name: 'Sandile',
    baseAttack: 132,
    baseDefense: 69,
    baseHealth: 137,
    family: 'sandile'
  },
  {
    number: '552',
    name: 'Krokorok',
    baseAttack: 155,
    baseDefense: 90,
    baseHealth: 155,
    family: 'sandile'
  },
  {
    number: '553',
    name: 'Krookodile',
    baseAttack: 229,
    baseDefense: 158,
    baseHealth: 216,
    family: 'sandile'
  },
  {
    number: '554',
    name: 'Darumaka',
    baseAttack: 153,
    baseDefense: 86,
    baseHealth: 172,
    family: 'darumaka'
  },
  {
    number: '554',
    name: 'Darumaka Galar',
    baseAttack: 153,
    baseDefense: 86,
    baseHealth: 172,
    family: 'darumaka'
  },
  {
    number: '555',
    name: 'Darmanitan',
    baseAttack: 263,
    baseDefense: 114,
    baseHealth: 233,
    family: 'darumaka'
  },
  {
    number: '555',
    name: 'Darmanitan Galar',
    baseAttack: 263,
    baseDefense: 114,
    baseHealth: 233,
    family: 'darumaka'
  },
  {
    number: '555',
    name: 'Darmanitan Galar',
    baseAttack: 323,
    baseDefense: 123,
    baseHealth: 233,
    family: 'darumaka'
  },
  {
    number: '556',
    name: 'Maractus',
    baseAttack: 201,
    baseDefense: 130,
    baseHealth: 181,
    family: 'maractus'
  },
  {
    number: '557',
    name: 'Dwebble',
    baseAttack: 118,
    baseDefense: 128,
    baseHealth: 137,
    family: 'dwebble'
  },
  {
    number: '558',
    name: 'Crustle',
    baseAttack: 188,
    baseDefense: 200,
    baseHealth: 172,
    family: 'dwebble'
  },
  {
    number: '559',
    name: 'Scraggy',
    baseAttack: 132,
    baseDefense: 132,
    baseHealth: 137,
    family: 'scraggy'
  },
  {
    number: '560',
    name: 'Scrafty',
    baseAttack: 163,
    baseDefense: 222,
    baseHealth: 163,
    family: 'scraggy'
  },
  {
    number: '561',
    name: 'Sigilyph',
    baseAttack: 204,
    baseDefense: 167,
    baseHealth: 176,
    family: 'sigilyph'
  },
  {
    number: '562',
    name: 'Yamask',
    baseAttack: 95,
    baseDefense: 141,
    baseHealth: 116,
    family: 'yamask'
  },
  {
    number: '562',
    name: 'Yamask Galar',
    baseAttack: 95,
    baseDefense: 141,
    baseHealth: 116,
    family: 'yamask'
  },
  {
    number: '563',
    name: 'Cofagrigus',
    baseAttack: 163,
    baseDefense: 237,
    baseHealth: 151,
    family: 'yamask'
  },
  {
    number: '564',
    name: 'Tirtouga',
    baseAttack: 134,
    baseDefense: 146,
    baseHealth: 144,
    family: 'tirtouga'
  },
  {
    number: '565',
    name: 'Carracosta',
    baseAttack: 192,
    baseDefense: 197,
    baseHealth: 179,
    family: 'tirtouga'
  },
  {
    number: '566',
    name: 'Archen',
    baseAttack: 213,
    baseDefense: 89,
    baseHealth: 146,
    family: 'archen'
  },
  {
    number: '567',
    name: 'Archeops',
    baseAttack: 292,
    baseDefense: 139,
    baseHealth: 181,
    family: 'archen'
  },
  {
    number: '568',
    name: 'Trubbish',
    baseAttack: 96,
    baseDefense: 122,
    baseHealth: 137,
    family: 'trubbish'
  },
  {
    number: '569',
    name: 'Garbodor',
    baseAttack: 181,
    baseDefense: 164,
    baseHealth: 190,
    family: 'trubbish'
  },
  {
    number: '570',
    name: 'Zorua',
    baseAttack: 153,
    baseDefense: 78,
    baseHealth: 120,
    family: 'zorua'
  },
  {
    number: '571',
    name: 'Zoroark',
    baseAttack: 250,
    baseDefense: 127,
    baseHealth: 155,
    family: 'zorua'
  },
  {
    number: '572',
    name: 'Minccino',
    baseAttack: 98,
    baseDefense: 80,
    baseHealth: 146,
    family: 'minccino'
  },
  {
    number: '573',
    name: 'Cinccino',
    baseAttack: 198,
    baseDefense: 130,
    baseHealth: 181,
    family: 'minccino'
  },
  {
    number: '574',
    name: 'Gothita',
    baseAttack: 98,
    baseDefense: 112,
    baseHealth: 128,
    family: 'gothita'
  },
  {
    number: '575',
    name: 'Gothorita',
    baseAttack: 137,
    baseDefense: 153,
    baseHealth: 155,
    family: 'gothita'
  },
  {
    number: '576',
    name: 'Gothitelle',
    baseAttack: 176,
    baseDefense: 205,
    baseHealth: 172,
    family: 'gothita'
  },
  {
    number: '577',
    name: 'Solosis',
    baseAttack: 170,
    baseDefense: 83,
    baseHealth: 128,
    family: 'solosis'
  },
  {
    number: '578',
    name: 'Duosion',
    baseAttack: 208,
    baseDefense: 103,
    baseHealth: 163,
    family: 'solosis'
  },
  {
    number: '579',
    name: 'Reuniclus',
    baseAttack: 214,
    baseDefense: 148,
    baseHealth: 242,
    family: 'solosis'
  },
  {
    number: '580',
    name: 'Ducklett',
    baseAttack: 84,
    baseDefense: 96,
    baseHealth: 158,
    family: 'ducklett'
  },
  {
    number: '581',
    name: 'Swanna',
    baseAttack: 182,
    baseDefense: 132,
    baseHealth: 181,
    family: 'ducklett'
  },
  {
    number: '582',
    name: 'Vanillite',
    baseAttack: 118,
    baseDefense: 106,
    baseHealth: 113,
    family: 'vanillite'
  },
  {
    number: '583',
    name: 'Vanillish',
    baseAttack: 151,
    baseDefense: 138,
    baseHealth: 139,
    family: 'vanillite'
  },
  {
    number: '584',
    name: 'Vanilluxe',
    baseAttack: 218,
    baseDefense: 184,
    baseHealth: 174,
    family: 'vanillite'
  },
  {
    number: '585',
    name: 'Deerling',
    baseAttack: 115,
    baseDefense: 100,
    baseHealth: 155,
    family: 'deerling'
  },
  {
    number: '586',
    name: 'Sawsbuck',
    baseAttack: 198,
    baseDefense: 146,
    baseHealth: 190,
    family: 'deerling'
  },
  {
    number: '587',
    name: 'Emolga',
    baseAttack: 158,
    baseDefense: 127,
    baseHealth: 146,
    family: 'emolga'
  },
  {
    number: '588',
    name: 'Karrablast',
    baseAttack: 137,
    baseDefense: 87,
    baseHealth: 137,
    family: 'karrablast'
  },
  {
    number: '589',
    name: 'Escavalier',
    baseAttack: 223,
    baseDefense: 187,
    baseHealth: 172,
    family: 'karrablast'
  },
  {
    number: '590',
    name: 'Foongus',
    baseAttack: 97,
    baseDefense: 91,
    baseHealth: 170,
    family: 'foongus'
  },
  {
    number: '591',
    name: 'Amoonguss',
    baseAttack: 155,
    baseDefense: 139,
    baseHealth: 249,
    family: 'foongus'
  },
  {
    number: '592',
    name: 'Frillish',
    baseAttack: 115,
    baseDefense: 134,
    baseHealth: 146,
    family: 'frillish'
  },
  {
    number: '593',
    name: 'Jellicent',
    baseAttack: 159,
    baseDefense: 178,
    baseHealth: 225,
    family: 'frillish'
  },
  {
    number: '594',
    name: 'Alomomola',
    baseAttack: 138,
    baseDefense: 131,
    baseHealth: 338,
    family: 'alomomola'
  },
  {
    number: '595',
    name: 'Joltik',
    baseAttack: 110,
    baseDefense: 98,
    baseHealth: 137,
    family: 'joltik'
  },
  {
    number: '596',
    name: 'Galvantula',
    baseAttack: 201,
    baseDefense: 128,
    baseHealth: 172,
    family: 'joltik'
  },
  {
    number: '597',
    name: 'Ferroseed',
    baseAttack: 82,
    baseDefense: 155,
    baseHealth: 127,
    family: 'ferroseed'
  },
  {
    number: '598',
    name: 'Ferrothorn',
    baseAttack: 158,
    baseDefense: 223,
    baseHealth: 179,
    family: 'ferroseed'
  },
  {
    number: '599',
    name: 'Klink',
    baseAttack: 98,
    baseDefense: 121,
    baseHealth: 120,
    family: 'klink'
  },
  {
    number: '600',
    name: 'Klang',
    baseAttack: 150,
    baseDefense: 174,
    baseHealth: 155,
    family: 'klink'
  },
  {
    number: '601',
    name: 'Klinklang',
    baseAttack: 199,
    baseDefense: 214,
    baseHealth: 155,
    family: 'klink'
  },
  {
    number: '602',
    name: 'Tynamo',
    baseAttack: 105,
    baseDefense: 78,
    baseHealth: 111,
    family: 'tynamo'
  },
  {
    number: '603',
    name: 'Eelektrik',
    baseAttack: 156,
    baseDefense: 130,
    baseHealth: 163,
    family: 'tynamo'
  },
  {
    number: '604',
    name: 'Eelektross',
    baseAttack: 217,
    baseDefense: 152,
    baseHealth: 198,
    family: 'tynamo'
  },
  {
    number: '605',
    name: 'Elgyem',
    baseAttack: 148,
    baseDefense: 100,
    baseHealth: 146,
    family: 'elgyem'
  },
  {
    number: '606',
    name: 'Beheeyem',
    baseAttack: 221,
    baseDefense: 163,
    baseHealth: 181,
    family: 'elgyem'
  },
  {
    number: '607',
    name: 'Litwick',
    baseAttack: 108,
    baseDefense: 98,
    baseHealth: 137,
    family: 'litwick'
  },
  {
    number: '608',
    name: 'Lampent',
    baseAttack: 169,
    baseDefense: 115,
    baseHealth: 155,
    family: 'litwick'
  },
  {
    number: '609',
    name: 'Chandelure',
    baseAttack: 271,
    baseDefense: 182,
    baseHealth: 155,
    family: 'litwick'
  },
  {
    number: '610',
    name: 'Axew',
    baseAttack: 154,
    baseDefense: 101,
    baseHealth: 130,
    family: 'axew'
  },
  {
    number: '611',
    name: 'Fraxure',
    baseAttack: 212,
    baseDefense: 123,
    baseHealth: 165,
    family: 'axew'
  },
  {
    number: '612',
    name: 'Haxorus',
    baseAttack: 284,
    baseDefense: 172,
    baseHealth: 183,
    family: 'axew'
  },
  {
    number: '613',
    name: 'Cubchoo',
    baseAttack: 128,
    baseDefense: 74,
    baseHealth: 146,
    family: 'cubchoo'
  },
  {
    number: '614',
    name: 'Beartic',
    baseAttack: 233,
    baseDefense: 152,
    baseHealth: 216,
    family: 'cubchoo'
  },
  {
    number: '615',
    name: 'Cryogonal',
    baseAttack: 190,
    baseDefense: 218,
    baseHealth: 190,
    family: 'cryogonal'
  },
  {
    number: '616',
    name: 'Shelmet',
    baseAttack: 72,
    baseDefense: 140,
    baseHealth: 137,
    family: 'shelmet'
  },
  {
    number: '617',
    name: 'Accelgor',
    baseAttack: 220,
    baseDefense: 120,
    baseHealth: 190,
    family: 'shelmet'
  },
  {
    number: '618',
    name: 'Stunfisk',
    baseAttack: 144,
    baseDefense: 171,
    baseHealth: 240,
    family: 'stunfisk'
  },
  {
    number: '618',
    name: 'Stunfisk Galar',
    baseAttack: 144,
    baseDefense: 171,
    baseHealth: 240,
    family: 'stunfisk'
  },
  {
    number: '619',
    name: 'Mienfoo',
    baseAttack: 160,
    baseDefense: 98,
    baseHealth: 128,
    family: 'mienfoo'
  },
  {
    number: '620',
    name: 'Mienshao',
    baseAttack: 258,
    baseDefense: 127,
    baseHealth: 163,
    family: 'mienfoo'
  },
  {
    number: '621',
    name: 'Druddigon',
    baseAttack: 213,
    baseDefense: 170,
    baseHealth: 184,
    family: 'druddigon'
  },
  {
    number: '622',
    name: 'Golett',
    baseAttack: 127,
    baseDefense: 92,
    baseHealth: 153,
    family: 'golett'
  },
  {
    number: '623',
    name: 'Golurk',
    baseAttack: 222,
    baseDefense: 154,
    baseHealth: 205,
    family: 'golett'
  },
  {
    number: '624',
    name: 'Pawniard',
    baseAttack: 154,
    baseDefense: 114,
    baseHealth: 128,
    family: 'pawniard'
  },
  {
    number: '625',
    name: 'Bisharp',
    baseAttack: 232,
    baseDefense: 176,
    baseHealth: 163,
    family: 'pawniard'
  },
  {
    number: '626',
    name: 'Bouffalant',
    baseAttack: 195,
    baseDefense: 182,
    baseHealth: 216,
    family: 'bouffalant'
  },
  {
    number: '627',
    name: 'Rufflet',
    baseAttack: 150,
    baseDefense: 97,
    baseHealth: 172,
    family: 'rufflet'
  },
  {
    number: '628',
    name: 'Braviary',
    baseAttack: 232,
    baseDefense: 152,
    baseHealth: 225,
    family: 'rufflet'
  },
  {
    number: '629',
    name: 'Vullaby',
    baseAttack: 105,
    baseDefense: 139,
    baseHealth: 172,
    family: 'vullaby'
  },
  {
    number: '630',
    name: 'Mandibuzz',
    baseAttack: 129,
    baseDefense: 205,
    baseHealth: 242,
    family: 'vullaby'
  },
  {
    number: '631',
    name: 'Heatmor',
    baseAttack: 204,
    baseDefense: 129,
    baseHealth: 198,
    family: 'heatmor'
  },
  {
    number: '632',
    name: 'Durant',
    baseAttack: 217,
    baseDefense: 188,
    baseHealth: 151,
    family: 'durant'
  },
  {
    number: '633',
    name: 'Deino',
    baseAttack: 116,
    baseDefense: 93,
    baseHealth: 141,
    family: 'deino'
  },
  {
    number: '634',
    name: 'Zweilous',
    baseAttack: 159,
    baseDefense: 135,
    baseHealth: 176,
    family: 'deino'
  },
  {
    number: '635',
    name: 'Hydreigon',
    baseAttack: 256,
    baseDefense: 188,
    baseHealth: 211,
    family: 'deino'
  },
  {
    number: '636',
    name: 'Larvesta',
    baseAttack: 156,
    baseDefense: 107,
    baseHealth: 146,
    family: 'larvesta'
  },
  {
    number: '637',
    name: 'Volcarona',
    baseAttack: 264,
    baseDefense: 189,
    baseHealth: 198,
    family: 'larvesta'
  },
  {
    number: '638',
    name: 'Cobalion',
    baseAttack: 192,
    baseDefense: 229,
    baseHealth: 209,
    family: 'cobalion'
  },
  {
    number: '639',
    name: 'Terrakion',
    baseAttack: 260,
    baseDefense: 192,
    baseHealth: 209,
    family: 'terrakion'
  },
  {
    number: '640',
    name: 'Virizion',
    baseAttack: 192,
    baseDefense: 229,
    baseHealth: 209,
    family: 'virizion'
  },
  {
    number: '641',
    name: 'Tornadus',
    baseAttack: 266,
    baseDefense: 164,
    baseHealth: 188,
    family: 'tornadus'
  },
  {
    number: '642',
    name: 'Thundurus',
    baseAttack: 266,
    baseDefense: 164,
    baseHealth: 188,
    family: 'thundurus'
  },
  {
    number: '643',
    name: 'Reshiram',
    baseAttack: 275,
    baseDefense: 211,
    baseHealth: 205,
    family: 'reshiram'
  },
  {
    number: '644',
    name: 'Zekrom',
    baseAttack: 275,
    baseDefense: 211,
    baseHealth: 205,
    family: 'zekrom'
  },
  {
    number: '645',
    name: 'Landorus',
    baseAttack: 261,
    baseDefense: 182,
    baseHealth: 205,
    family: 'landorus'
  },
  {
    number: '646',
    name: 'Kyurem',
    baseAttack: 246,
    baseDefense: 170,
    baseHealth: 245,
    family: 'kyurem'
  },
  {
    number: '647',
    name: 'Keldeo',
    baseAttack: 260,
    baseDefense: 192,
    baseHealth: 209,
    family: 'keldeo'
  },
  {
    number: '648',
    name: 'Meloetta',
    baseAttack: 250,
    baseDefense: 225,
    baseHealth: 225,
    family: 'meloetta'
  },
  {
    number: '649',
    name: 'Genesect',
    baseAttack: 252,
    baseDefense: 199,
    baseHealth: 174,
    family: 'genesect'
  },
  {
    number: '650',
    name: 'Chespin',
    baseAttack: 110,
    baseDefense: 106,
    baseHealth: 148,
    family: 'chespin'
  },
  {
    number: '651',
    name: 'Quilladin',
    baseAttack: 146,
    baseDefense: 156,
    baseHealth: 156,
    family: 'chespin'
  },
  {
    number: '652',
    name: 'Chesnaught',
    baseAttack: 201,
    baseDefense: 204,
    baseHealth: 204,
    family: 'chespin'
  },
  {
    number: '653',
    name: 'Fennekin',
    baseAttack: 116,
    baseDefense: 102,
    baseHealth: 120,
    family: 'fennekin'
  },
  {
    number: '654',
    name: 'Braixen',
    baseAttack: 171,
    baseDefense: 130,
    baseHealth: 153,
    family: 'fennekin'
  },
  {
    number: '655',
    name: 'Delphox',
    baseAttack: 230,
    baseDefense: 189,
    baseHealth: 181,
    family: 'fennekin'
  },
  {
    number: '656',
    name: 'Froakie',
    baseAttack: 122,
    baseDefense: 84,
    baseHealth: 121,
    family: 'froakie'
  },
  {
    number: '657',
    name: 'Frogadier',
    baseAttack: 168,
    baseDefense: 114,
    baseHealth: 144,
    family: 'froakie'
  },
  {
    number: '658',
    name: 'Greninja',
    baseAttack: 223,
    baseDefense: 152,
    baseHealth: 176,
    family: 'froakie'
  },
  {
    number: '659',
    name: 'Bunnelby',
    baseAttack: 68,
    baseDefense: 72,
    baseHealth: 116,
    family: 'bunnelby'
  },
  {
    number: '660',
    name: 'Diggersby',
    baseAttack: 112,
    baseDefense: 155,
    baseHealth: 198,
    family: 'bunnelby'
  },
  {
    number: '661',
    name: 'Fletchling',
    baseAttack: 95,
    baseDefense: 80,
    baseHealth: 128,
    family: 'fletchling'
  },
  {
    number: '662',
    name: 'Fletchinder',
    baseAttack: 145,
    baseDefense: 110,
    baseHealth: 158,
    family: 'fletchling'
  },
  {
    number: '663',
    name: 'Talonflame',
    baseAttack: 176,
    baseDefense: 155,
    baseHealth: 186,
    family: 'fletchling'
  },
  {
    number: '664',
    name: 'Scatterbug',
    baseAttack: 63,
    baseDefense: 63,
    baseHealth: 116,
    family: 'scatterbug'
  },
  {
    number: '665',
    name: 'Spewpa',
    baseAttack: 48,
    baseDefense: 89,
    baseHealth: 128,
    family: 'scatterbug'
  },
  {
    number: '666',
    name: 'Vivillon',
    baseAttack: 176,
    baseDefense: 103,
    baseHealth: 190,
    family: 'scatterbug'
  },
  {
    number: '667',
    name: 'Litleo',
    baseAttack: 139,
    baseDefense: 112,
    baseHealth: 158,
    family: 'litleo'
  },
  {
    number: '668',
    name: 'Pyroar',
    baseAttack: 221,
    baseDefense: 149,
    baseHealth: 200,
    family: 'litleo'
  },
  {
    number: '669',
    name: 'Flabebe',
    baseAttack: 108,
    baseDefense: 120,
    baseHealth: 127,
    family: 'flabebe'
  },
  {
    number: '670',
    name: 'Floette',
    baseAttack: 136,
    baseDefense: 151,
    baseHealth: 144,
    family: 'flabebe'
  },
  {
    number: '671',
    name: 'Florges',
    baseAttack: 212,
    baseDefense: 244,
    baseHealth: 186,
    family: 'flabebe'
  },
  {
    number: '672',
    name: 'Skiddo',
    baseAttack: 123,
    baseDefense: 102,
    baseHealth: 165,
    family: 'skiddo'
  },
  {
    number: '673',
    name: 'Gogoat',
    baseAttack: 196,
    baseDefense: 146,
    baseHealth: 265,
    family: 'skiddo'
  },
  {
    number: '674',
    name: 'Pancham',
    baseAttack: 145,
    baseDefense: 107,
    baseHealth: 167,
    family: 'pancham'
  },
  {
    number: '675',
    name: 'Pangoro',
    baseAttack: 226,
    baseDefense: 146,
    baseHealth: 216,
    family: 'pancham'
  },
  {
    number: '676',
    name: 'Furfrou',
    baseAttack: 164,
    baseDefense: 167,
    baseHealth: 181,
    family: 'furfrou'
  },
  {
    number: '677',
    name: 'Espurr',
    baseAttack: 120,
    baseDefense: 114,
    baseHealth: 158,
    family: 'espurr'
  },
  {
    number: '678',
    name: 'Meowstic',
    baseAttack: 166,
    baseDefense: 167,
    baseHealth: 179,
    family: 'espurr'
  },
  {
    number: '682',
    name: 'Spritzee',
    baseAttack: 110,
    baseDefense: 113,
    baseHealth: 186,
    family: 'spritzee'
  },
  {
    number: '683',
    name: 'Aromatisse',
    baseAttack: 173,
    baseDefense: 150,
    baseHealth: 226,
    family: 'spritzee'
  },
  {
    number: '684',
    name: 'Swirlix',
    baseAttack: 109,
    baseDefense: 119,
    baseHealth: 158,
    family: 'swirlix'
  },
  {
    number: '685',
    name: 'Slurpuff',
    baseAttack: 168,
    baseDefense: 163,
    baseHealth: 193,
    family: 'swirlix'
  },
  {
    number: '686',
    name: 'Inkay',
    baseAttack: 98,
    baseDefense: 95,
    baseHealth: 142,
    family: 'inkay'
  },
  {
    number: '687',
    name: 'Malamar',
    baseAttack: 177,
    baseDefense: 165,
    baseHealth: 200,
    family: 'inkay'
  },
  {
    number: '688',
    name: 'Binacle',
    baseAttack: 96,
    baseDefense: 120,
    baseHealth: 123,
    family: 'binacle'
  },
  {
    number: '689',
    name: 'Barbaracle',
    baseAttack: 194,
    baseDefense: 205,
    baseHealth: 176,
    family: 'binacle'
  },
  {
    number: '690',
    name: 'Skrelp',
    baseAttack: 109,
    baseDefense: 109,
    baseHealth: 137,
    family: 'skrelp'
  },
  {
    number: '691',
    name: 'Dragalge',
    baseAttack: 177,
    baseDefense: 207,
    baseHealth: 163,
    family: 'skrelp'
  },
  {
    number: '692',
    name: 'Clauncher',
    baseAttack: 108,
    baseDefense: 117,
    baseHealth: 137,
    family: 'clauncher'
  },
  {
    number: '693',
    name: 'Clawitzer',
    baseAttack: 221,
    baseDefense: 171,
    baseHealth: 174,
    family: 'clauncher'
  },
  {
    number: '694',
    name: 'Helioptile',
    baseAttack: 115,
    baseDefense: 78,
    baseHealth: 127,
    family: 'helioptile'
  },
  {
    number: '695',
    name: 'Heliolisk',
    baseAttack: 219,
    baseDefense: 168,
    baseHealth: 158,
    family: 'helioptile'
  },
  {
    number: '696',
    name: 'Tyrunt',
    baseAttack: 158,
    baseDefense: 123,
    baseHealth: 151,
    family: 'tyrunt'
  },
  {
    number: '697',
    name: 'Tyrantrum',
    baseAttack: 227,
    baseDefense: 191,
    baseHealth: 193,
    family: 'tyrunt'
  },
  {
    number: '698',
    name: 'Amaura',
    baseAttack: 124,
    baseDefense: 109,
    baseHealth: 184,
    family: 'amaura'
  },
  {
    number: '699',
    name: 'Aurorus',
    baseAttack: 186,
    baseDefense: 163,
    baseHealth: 265,
    family: 'amaura'
  },
  {
    number: '700',
    name: 'Sylveon',
    baseAttack: 203,
    baseDefense: 205,
    baseHealth: 216,
    family: 'eevee'
  },
  {
    number: '701',
    name: 'Hawlucha',
    baseAttack: 195,
    baseDefense: 153,
    baseHealth: 186,
    family: 'hawlucha'
  },
  {
    number: '702',
    name: 'Dedenne',
    baseAttack: 164,
    baseDefense: 134,
    baseHealth: 167,
    family: 'dedenne'
  },
  {
    number: '703',
    name: 'Carbink',
    baseAttack: 95,
    baseDefense: 285,
    baseHealth: 137,
    family: 'carbink'
  },
  {
    number: '704',
    name: 'Goomy',
    baseAttack: 101,
    baseDefense: 112,
    baseHealth: 128,
    family: 'goomy'
  },
  {
    number: '705',
    name: 'Sliggoo',
    baseAttack: 159,
    baseDefense: 176,
    baseHealth: 169,
    family: 'goomy'
  },
  {
    number: '706',
    name: 'Goodra',
    baseAttack: 220,
    baseDefense: 242,
    baseHealth: 207,
    family: 'goomy'
  },
  {
    number: '707',
    name: 'Klefki',
    baseAttack: 160,
    baseDefense: 179,
    baseHealth: 149,
    family: 'klefki'
  },
  {
    number: '708',
    name: 'Phantump',
    baseAttack: 125,
    baseDefense: 103,
    baseHealth: 125,
    family: 'phantump'
  },
  {
    number: '709',
    name: 'Trevenant',
    baseAttack: 201,
    baseDefense: 154,
    baseHealth: 198,
    family: 'phantump'
  },
  {
    number: '712',
    name: 'Bergmite',
    baseAttack: 117,
    baseDefense: 120,
    baseHealth: 146,
    family: 'bergmite'
  },
  {
    number: '713',
    name: 'Avalugg',
    baseAttack: 196,
    baseDefense: 240,
    baseHealth: 216,
    family: 'bergmite'
  },
  {
    number: '714',
    name: 'Noibat',
    baseAttack: 83,
    baseDefense: 73,
    baseHealth: 120,
    family: 'noibat'
  },
  {
    number: '715',
    name: 'Noivern',
    baseAttack: 205,
    baseDefense: 175,
    baseHealth: 198,
    family: 'noibat'
  },
  {
    number: '716',
    name: 'Xerneas',
    baseAttack: 275,
    baseDefense: 203,
    baseHealth: 270,
    family: 'xerneas'
  },
  {
    number: '717',
    name: 'Yveltal',
    baseAttack: 275,
    baseDefense: 203,
    baseHealth: 270,
    family: 'yveltal'
  },
  {
    number: '808',
    name: 'Meltan',
    baseAttack: 118,
    baseDefense: 99,
    baseHealth: 130,
    family: 'meltan'
  },
  {
    number: '809',
    name: 'Melmetal',
    baseAttack: 226,
    baseDefense: 190,
    baseHealth: 264,
    family: 'meltan'
  },
  {
    number: '862',
    name: 'Obstagoon',
    baseAttack: 180,
    baseDefense: 194,
    baseHealth: 212,
    family: 'zigzagoon'
  },
  {
    number: '863',
    name: 'Perrserker',
    baseAttack: 195,
    baseDefense: 162,
    baseHealth: 172,
    family: 'meowth'
  },
  {
    number: '865',
    name: 'Sirfetchd',
    baseAttack: 248,
    baseDefense: 176,
    baseHealth: 158,
    family: 'farfetchd'
  },
  {
    number: '866',
    name: 'Mr Rime',
    baseAttack: 212,
    baseDefense: 179,
    baseHealth: 190,
    family: 'mr_mime'
  },
  {
    number: '867',
    name: 'Runerigus',
    baseAttack: 163,
    baseDefense: 237,
    baseHealth: 151,
    family: 'yamask'
  }
];

export function getByName({ name }: PokedexSearchRequest): PokedexEntry {
  const entry = pokedex.find(pokemon => pokemon.name === name);
  if (!entry) {
    throw new Error('Could not find entry.');
  }
  return entry;
}

export const getByFamily = ({ name }: PokedexSearchRequest): PokedexEntry[] => pokedex.filter(pokemon => pokemon.name === name);

export default pokedex;