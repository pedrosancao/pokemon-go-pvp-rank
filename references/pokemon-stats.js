const pokedex = [
  {
    "id": 1,
    "name": "Bulbasaur",
    "at": 118,
    "df": 111,
    "st": 128
  },
  {
    "id": 2,
    "name": "Ivysaur",
    "at": 151,
    "df": 143,
    "st": 155
  },
  {
    "id": 3,
    "name": "Venusaur Mega Venusaur",
    "at": 241,
    "df": 246,
    "st": 190
  },
  {
    "id": 3,
    "name": "Venusaur",
    "at": 198,
    "df": 189,
    "st": 190
  },
  {
    "id": 4,
    "name": "Charmander",
    "at": 116,
    "df": 93,
    "st": 118
  },
  {
    "id": 5,
    "name": "Charmeleon",
    "at": 158,
    "df": 126,
    "st": 151
  },
  {
    "id": 6,
    "name": "Charizard Mega Charizard Y",
    "at": 319,
    "df": 212,
    "st": 186
  },
  {
    "id": 6,
    "name": "Charizard Mega Charizard X",
    "at": 273,
    "df": 213,
    "st": 186
  },
  {
    "id": 6,
    "name": "Charizard",
    "at": 223,
    "df": 173,
    "st": 186
  },
  {
    "id": 7,
    "name": "Squirtle",
    "at": 94,
    "df": 121,
    "st": 127
  },
  {
    "id": 8,
    "name": "Wartortle",
    "at": 126,
    "df": 155,
    "st": 153
  },
  {
    "id": 9,
    "name": "Blastoise Mega Blastoise",
    "at": 264,
    "df": 237,
    "st": 188
  },
  {
    "id": 9,
    "name": "Blastoise",
    "at": 171,
    "df": 207,
    "st": 188
  },
  {
    "id": 10,
    "name": "Caterpie",
    "at": 55,
    "df": 55,
    "st": 128
  },
  {
    "id": 11,
    "name": "Metapod",
    "at": 45,
    "df": 80,
    "st": 137
  },
  {
    "id": 12,
    "name": "Butterfree",
    "at": 167,
    "df": 137,
    "st": 155
  },
  {
    "id": 13,
    "name": "Weedle",
    "at": 63,
    "df": 50,
    "st": 120
  },
  {
    "id": 14,
    "name": "Kakuna",
    "at": 46,
    "df": 75,
    "st": 128
  },
  {
    "id": 15,
    "name": "Beedrill Mega Beedrill",
    "at": 303,
    "df": 148,
    "st": 163
  },
  {
    "id": 15,
    "name": "Beedrill",
    "at": 169,
    "df": 130,
    "st": 163
  },
  {
    "id": 16,
    "name": "Pidgey",
    "at": 85,
    "df": 73,
    "st": 120
  },
  {
    "id": 17,
    "name": "Pidgeotto",
    "at": 117,
    "df": 105,
    "st": 160
  },
  {
    "id": 18,
    "name": "Pidgeot Mega Pidgeot",
    "at": 280,
    "df": 175,
    "st": 195
  },
  {
    "id": 18,
    "name": "Pidgeot",
    "at": 166,
    "df": 154,
    "st": 195
  },
  {
    "id": 19,
    "name": "Rattata Alola Form",
    "at": 103,
    "df": 70,
    "st": 102
  },
  {
    "id": 19,
    "name": "Rattata",
    "at": 103,
    "df": 70,
    "st": 102
  },
  {
    "id": 20,
    "name": "Raticate Alola Form",
    "at": 135,
    "df": 154,
    "st": 181
  },
  {
    "id": 20,
    "name": "Raticate",
    "at": 161,
    "df": 139,
    "st": 146
  },
  {
    "id": 21,
    "name": "Spearow",
    "at": 112,
    "df": 60,
    "st": 120
  },
  {
    "id": 22,
    "name": "Fearow",
    "at": 182,
    "df": 133,
    "st": 163
  },
  {
    "id": 23,
    "name": "Ekans",
    "at": 110,
    "df": 97,
    "st": 111
  },
  {
    "id": 24,
    "name": "Arbok",
    "at": 167,
    "df": 153,
    "st": 155
  },
  {
    "id": 25,
    "name": "Pikachu",
    "at": 112,
    "df": 96,
    "st": 111
  },
  {
    "id": 26,
    "name": "Raichu Alola Form",
    "at": 201,
    "df": 154,
    "st": 155
  },
  {
    "id": 26,
    "name": "Raichu",
    "at": 193,
    "df": 151,
    "st": 155
  },
  {
    "id": 27,
    "name": "Sandshrew Alola Form",
    "at": 125,
    "df": 129,
    "st": 137
  },
  {
    "id": 27,
    "name": "Sandshrew",
    "at": 126,
    "df": 120,
    "st": 137
  },
  {
    "id": 28,
    "name": "Sandslash Alola Form",
    "at": 177,
    "df": 195,
    "st": 181
  },
  {
    "id": 28,
    "name": "Sandslash",
    "at": 182,
    "df": 175,
    "st": 181
  },
  {
    "id": 29,
    "name": "Nidoranâ™€",
    "at": 86,
    "df": 89,
    "st": 146
  },
  {
    "id": 30,
    "name": "Nidorina",
    "at": 117,
    "df": 120,
    "st": 172
  },
  {
    "id": 31,
    "name": "Nidoqueen",
    "at": 180,
    "df": 173,
    "st": 207
  },
  {
    "id": 32,
    "name": "Nidoranâ™‚",
    "at": 105,
    "df": 76,
    "st": 130
  },
  {
    "id": 33,
    "name": "Nidorino",
    "at": 137,
    "df": 111,
    "st": 156
  },
  {
    "id": 34,
    "name": "Nidoking",
    "at": 204,
    "df": 156,
    "st": 191
  },
  {
    "id": 35,
    "name": "Clefairy",
    "at": 107,
    "df": 108,
    "st": 172
  },
  {
    "id": 36,
    "name": "Clefable",
    "at": 178,
    "df": 162,
    "st": 216
  },
  {
    "id": 37,
    "name": "Vulpix Alola Form",
    "at": 96,
    "df": 109,
    "st": 116
  },
  {
    "id": 37,
    "name": "Vulpix",
    "at": 96,
    "df": 109,
    "st": 116
  },
  {
    "id": 38,
    "name": "Ninetales Alola Form",
    "at": 170,
    "df": 193,
    "st": 177
  },
  {
    "id": 38,
    "name": "Ninetales",
    "at": 169,
    "df": 190,
    "st": 177
  },
  {
    "id": 39,
    "name": "Jigglypuff",
    "at": 80,
    "df": 41,
    "st": 251
  },
  {
    "id": 40,
    "name": "Wigglytuff",
    "at": 156,
    "df": 90,
    "st": 295
  },
  {
    "id": 41,
    "name": "Zubat",
    "at": 83,
    "df": 73,
    "st": 120
  },
  {
    "id": 42,
    "name": "Golbat",
    "at": 161,
    "df": 150,
    "st": 181
  },
  {
    "id": 43,
    "name": "Oddish",
    "at": 131,
    "df": 112,
    "st": 128
  },
  {
    "id": 44,
    "name": "Gloom",
    "at": 153,
    "df": 136,
    "st": 155
  },
  {
    "id": 45,
    "name": "Vileplume",
    "at": 202,
    "df": 167,
    "st": 181
  },
  {
    "id": 46,
    "name": "Paras",
    "at": 121,
    "df": 99,
    "st": 111
  },
  {
    "id": 47,
    "name": "Parasect",
    "at": 165,
    "df": 146,
    "st": 155
  },
  {
    "id": 48,
    "name": "Venonat",
    "at": 100,
    "df": 100,
    "st": 155
  },
  {
    "id": 49,
    "name": "Venomoth",
    "at": 179,
    "df": 143,
    "st": 172
  },
  {
    "id": 50,
    "name": "Diglett Alola Form",
    "at": 109,
    "df": 82,
    "st": 67
  },
  {
    "id": 50,
    "name": "Diglett",
    "at": 109,
    "df": 78,
    "st": 67
  },
  {
    "id": 51,
    "name": "Dugtrio Alola Form",
    "at": 201,
    "df": 142,
    "st": 111
  },
  {
    "id": 51,
    "name": "Dugtrio",
    "at": 167,
    "df": 136,
    "st": 111
  },
  {
    "id": 52,
    "name": "Meowth Alola Form",
    "at": 99,
    "df": 78,
    "st": 120
  },
  {
    "id": 52,
    "name": "Meowth",
    "at": 92,
    "df": 78,
    "st": 120
  },
  {
    "id": 52,
    "name": "Meowth Galarian Form",
    "at": 115,
    "df": 92,
    "st": 137
  },
  {
    "id": 53,
    "name": "Persian Alola Form",
    "at": 158,
    "df": 136,
    "st": 163
  },
  {
    "id": 53,
    "name": "Persian",
    "at": 150,
    "df": 136,
    "st": 163
  },
  {
    "id": 54,
    "name": "Psyduck",
    "at": 122,
    "df": 95,
    "st": 137
  },
  {
    "id": 55,
    "name": "Golduck",
    "at": 191,
    "df": 162,
    "st": 190
  },
  {
    "id": 56,
    "name": "Mankey",
    "at": 148,
    "df": 82,
    "st": 120
  },
  {
    "id": 57,
    "name": "Primeape",
    "at": 207,
    "df": 138,
    "st": 163
  },
  {
    "id": 58,
    "name": "Growlithe",
    "at": 136,
    "df": 93,
    "st": 146
  },
  {
    "id": 59,
    "name": "Arcanine",
    "at": 227,
    "df": 166,
    "st": 207
  },
  {
    "id": 60,
    "name": "Poliwag",
    "at": 101,
    "df": 82,
    "st": 120
  },
  {
    "id": 61,
    "name": "Poliwhirl",
    "at": 130,
    "df": 123,
    "st": 163
  },
  {
    "id": 62,
    "name": "Poliwrath",
    "at": 182,
    "df": 184,
    "st": 207
  },
  {
    "id": 63,
    "name": "Abra",
    "at": 195,
    "df": 82,
    "st": 93
  },
  {
    "id": 64,
    "name": "Kadabra",
    "at": 232,
    "df": 117,
    "st": 120
  },
  {
    "id": 65,
    "name": "Alakazam Mega Alakazam",
    "at": 367,
    "df": 207,
    "st": 146
  },
  {
    "id": 65,
    "name": "Alakazam",
    "at": 271,
    "df": 167,
    "st": 146
  },
  {
    "id": 66,
    "name": "Machop",
    "at": 137,
    "df": 82,
    "st": 172
  },
  {
    "id": 67,
    "name": "Machoke",
    "at": 177,
    "df": 125,
    "st": 190
  },
  {
    "id": 68,
    "name": "Machamp",
    "at": 234,
    "df": 159,
    "st": 207
  },
  {
    "id": 69,
    "name": "Bellsprout",
    "at": 139,
    "df": 61,
    "st": 137
  },
  {
    "id": 70,
    "name": "Weepinbell",
    "at": 172,
    "df": 92,
    "st": 163
  },
  {
    "id": 71,
    "name": "Victreebel",
    "at": 207,
    "df": 135,
    "st": 190
  },
  {
    "id": 72,
    "name": "Tentacool",
    "at": 97,
    "df": 149,
    "st": 120
  },
  {
    "id": 73,
    "name": "Tentacruel",
    "at": 166,
    "df": 209,
    "st": 190
  },
  {
    "id": 74,
    "name": "Geodude Alola Form",
    "at": 132,
    "df": 132,
    "st": 120
  },
  {
    "id": 74,
    "name": "Geodude",
    "at": 132,
    "df": 132,
    "st": 120
  },
  {
    "id": 75,
    "name": "Graveler Alola Form",
    "at": 164,
    "df": 164,
    "st": 146
  },
  {
    "id": 75,
    "name": "Graveler",
    "at": 164,
    "df": 164,
    "st": 146
  },
  {
    "id": 76,
    "name": "Golem Alola Form",
    "at": 211,
    "df": 198,
    "st": 190
  },
  {
    "id": 76,
    "name": "Golem",
    "at": 211,
    "df": 198,
    "st": 190
  },
  {
    "id": 77,
    "name": "Ponyta",
    "at": 170,
    "df": 127,
    "st": 137
  },
  {
    "id": 78,
    "name": "Rapidash",
    "at": 207,
    "df": 162,
    "st": 163
  },
  {
    "id": 79,
    "name": "Slowpoke",
    "at": 109,
    "df": 98,
    "st": 207
  },
  {
    "id": 80,
    "name": "Slowbro Mega Slowbro",
    "at": 224,
    "df": 259,
    "st": 216
  },
  {
    "id": 80,
    "name": "Slowbro",
    "at": 177,
    "df": 180,
    "st": 216
  },
  {
    "id": 81,
    "name": "Magnemite",
    "at": 165,
    "df": 121,
    "st": 93
  },
  {
    "id": 82,
    "name": "Magneton",
    "at": 223,
    "df": 169,
    "st": 137
  },
  {
    "id": 83,
    "name": "Farfetch'd",
    "at": 124,
    "df": 115,
    "st": 141
  },
  {
    "id": 83,
    "name": "Farfetch'd Galarian Form",
    "at": 174,
    "df": 114,
    "st": 141
  },
  {
    "id": 84,
    "name": "Doduo",
    "at": 158,
    "df": 83,
    "st": 111
  },
  {
    "id": 85,
    "name": "Dodrio",
    "at": 218,
    "df": 140,
    "st": 155
  },
  {
    "id": 86,
    "name": "Seel",
    "at": 85,
    "df": 121,
    "st": 163
  },
  {
    "id": 87,
    "name": "Dewgong",
    "at": 139,
    "df": 177,
    "st": 207
  },
  {
    "id": 88,
    "name": "Grimer Alola Form",
    "at": 135,
    "df": 90,
    "st": 190
  },
  {
    "id": 88,
    "name": "Grimer",
    "at": 135,
    "df": 90,
    "st": 190
  },
  {
    "id": 89,
    "name": "Muk Alola Form",
    "at": 190,
    "df": 172,
    "st": 233
  },
  {
    "id": 89,
    "name": "Muk",
    "at": 190,
    "df": 172,
    "st": 233
  },
  {
    "id": 90,
    "name": "Shellder",
    "at": 116,
    "df": 134,
    "st": 102
  },
  {
    "id": 91,
    "name": "Cloyster",
    "at": 186,
    "df": 256,
    "st": 137
  },
  {
    "id": 92,
    "name": "Gastly",
    "at": 186,
    "df": 67,
    "st": 102
  },
  {
    "id": 93,
    "name": "Haunter",
    "at": 223,
    "df": 107,
    "st": 128
  },
  {
    "id": 94,
    "name": "Gengar Mega Gengar",
    "at": 349,
    "df": 199,
    "st": 155
  },
  {
    "id": 94,
    "name": "Gengar",
    "at": 261,
    "df": 149,
    "st": 155
  },
  {
    "id": 95,
    "name": "Onix",
    "at": 85,
    "df": 232,
    "st": 111
  },
  {
    "id": 96,
    "name": "Drowzee",
    "at": 89,
    "df": 136,
    "st": 155
  },
  {
    "id": 97,
    "name": "Hypno",
    "at": 144,
    "df": 193,
    "st": 198
  },
  {
    "id": 98,
    "name": "Krabby",
    "at": 181,
    "df": 124,
    "st": 102
  },
  {
    "id": 99,
    "name": "Kingler",
    "at": 240,
    "df": 181,
    "st": 146
  },
  {
    "id": 100,
    "name": "Voltorb",
    "at": 109,
    "df": 111,
    "st": 120
  },
  {
    "id": 101,
    "name": "Electrode",
    "at": 173,
    "df": 173,
    "st": 155
  },
  {
    "id": 102,
    "name": "Exeggcute",
    "at": 107,
    "df": 125,
    "st": 155
  },
  {
    "id": 103,
    "name": "Exeggutor Alola Form",
    "at": 230,
    "df": 153,
    "st": 216
  },
  {
    "id": 103,
    "name": "Exeggutor",
    "at": 233,
    "df": 149,
    "st": 216
  },
  {
    "id": 104,
    "name": "Cubone",
    "at": 90,
    "df": 144,
    "st": 137
  },
  {
    "id": 105,
    "name": "Marowak Alola Form",
    "at": 144,
    "df": 186,
    "st": 155
  },
  {
    "id": 105,
    "name": "Marowak",
    "at": 144,
    "df": 186,
    "st": 155
  },
  {
    "id": 106,
    "name": "Hitmonlee",
    "at": 224,
    "df": 181,
    "st": 137
  },
  {
    "id": 107,
    "name": "Hitmonchan",
    "at": 193,
    "df": 197,
    "st": 137
  },
  {
    "id": 108,
    "name": "Lickitung",
    "at": 108,
    "df": 137,
    "st": 207
  },
  {
    "id": 109,
    "name": "Koffing",
    "at": 119,
    "df": 141,
    "st": 120
  },
  {
    "id": 110,
    "name": "Weezing",
    "at": 174,
    "df": 197,
    "st": 163
  },
  {
    "id": 110,
    "name": "Weezing Galarian Form",
    "at": 174,
    "df": 197,
    "st": 163
  },
  {
    "id": 111,
    "name": "Rhyhorn",
    "at": 140,
    "df": 127,
    "st": 190
  },
  {
    "id": 112,
    "name": "Rhydon",
    "at": 222,
    "df": 171,
    "st": 233
  },
  {
    "id": 113,
    "name": "Chansey",
    "at": 60,
    "df": 128,
    "st": 487
  },
  {
    "id": 114,
    "name": "Tangela",
    "at": 183,
    "df": 169,
    "st": 163
  },
  {
    "id": 115,
    "name": "Kangaskhan Mega Kangaskhan",
    "at": 246,
    "df": 210,
    "st": 233
  },
  {
    "id": 115,
    "name": "Kangaskhan",
    "at": 181,
    "df": 165,
    "st": 233
  },
  {
    "id": 116,
    "name": "Horsea",
    "at": 129,
    "df": 103,
    "st": 102
  },
  {
    "id": 117,
    "name": "Seadra",
    "at": 187,
    "df": 156,
    "st": 146
  },
  {
    "id": 118,
    "name": "Goldeen",
    "at": 123,
    "df": 110,
    "st": 128
  },
  {
    "id": 119,
    "name": "Seaking",
    "at": 175,
    "df": 147,
    "st": 190
  },
  {
    "id": 120,
    "name": "Staryu",
    "at": 137,
    "df": 112,
    "st": 102
  },
  {
    "id": 121,
    "name": "Starmie",
    "at": 210,
    "df": 184,
    "st": 155
  },
  {
    "id": 122,
    "name": "Mr. Mime",
    "at": 192,
    "df": 205,
    "st": 120
  },
  {
    "id": 123,
    "name": "Scyther",
    "at": 218,
    "df": 170,
    "st": 172
  },
  {
    "id": 124,
    "name": "Jynx",
    "at": 223,
    "df": 151,
    "st": 163
  },
  {
    "id": 125,
    "name": "Electabuzz",
    "at": 198,
    "df": 158,
    "st": 163
  },
  {
    "id": 126,
    "name": "Magmar",
    "at": 206,
    "df": 154,
    "st": 163
  },
  {
    "id": 127,
    "name": "Pinsir Mega Pinsir",
    "at": 305,
    "df": 231,
    "st": 163
  },
  {
    "id": 127,
    "name": "Pinsir",
    "at": 238,
    "df": 182,
    "st": 163
  },
  {
    "id": 128,
    "name": "Tauros",
    "at": 198,
    "df": 183,
    "st": 181
  },
  {
    "id": 129,
    "name": "Magikarp",
    "at": 29,
    "df": 85,
    "st": 85
  },
  {
    "id": 130,
    "name": "Gyarados Mega Gyarados",
    "at": 292,
    "df": 247,
    "st": 216
  },
  {
    "id": 130,
    "name": "Gyarados",
    "at": 237,
    "df": 186,
    "st": 216
  },
  {
    "id": 131,
    "name": "Lapras",
    "at": 165,
    "df": 174,
    "st": 277
  },
  {
    "id": 132,
    "name": "Ditto",
    "at": 91,
    "df": 91,
    "st": 134
  },
  {
    "id": 133,
    "name": "Eevee",
    "at": 104,
    "df": 114,
    "st": 146
  },
  {
    "id": 134,
    "name": "Vaporeon",
    "at": 205,
    "df": 161,
    "st": 277
  },
  {
    "id": 135,
    "name": "Jolteon",
    "at": 232,
    "df": 182,
    "st": 163
  },
  {
    "id": 136,
    "name": "Flareon",
    "at": 246,
    "df": 179,
    "st": 163
  },
  {
    "id": 137,
    "name": "Porygon",
    "at": 153,
    "df": 136,
    "st": 163
  },
  {
    "id": 138,
    "name": "Omanyte",
    "at": 155,
    "df": 153,
    "st": 111
  },
  {
    "id": 139,
    "name": "Omastar",
    "at": 207,
    "df": 201,
    "st": 172
  },
  {
    "id": 140,
    "name": "Kabuto",
    "at": 148,
    "df": 140,
    "st": 102
  },
  {
    "id": 141,
    "name": "Kabutops",
    "at": 220,
    "df": 186,
    "st": 155
  },
  {
    "id": 142,
    "name": "Aerodactyl Mega Aerodactyl",
    "at": 292,
    "df": 210,
    "st": 190
  },
  {
    "id": 142,
    "name": "Aerodactyl",
    "at": 221,
    "df": 159,
    "st": 190
  },
  {
    "id": 143,
    "name": "Snorlax",
    "at": 190,
    "df": 169,
    "st": 330
  },
  {
    "id": 144,
    "name": "Articuno",
    "at": 192,
    "df": 236,
    "st": 207
  },
  {
    "id": 145,
    "name": "Zapdos",
    "at": 253,
    "df": 185,
    "st": 207
  },
  {
    "id": 146,
    "name": "Moltres",
    "at": 251,
    "df": 181,
    "st": 207
  },
  {
    "id": 147,
    "name": "Dratini",
    "at": 119,
    "df": 91,
    "st": 121
  },
  {
    "id": 148,
    "name": "Dragonair",
    "at": 163,
    "df": 135,
    "st": 156
  },
  {
    "id": 149,
    "name": "Dragonite",
    "at": 263,
    "df": 198,
    "st": 209
  },
  {
    "id": 150,
    "name": "Mewtwo Mega Mewtwo Y",
    "at": 426,
    "df": 229,
    "st": 235
  },
  {
    "id": 150,
    "name": "Mewtwo Mega Mewtwo X",
    "at": 412,
    "df": 222,
    "st": 235
  },
  {
    "id": 150,
    "name": "Mewtwo",
    "at": 300,
    "df": 182,
    "st": 214
  },
  {
    "id": 151,
    "name": "Mew",
    "at": 210,
    "df": 210,
    "st": 225
  },
  {
    "id": 152,
    "name": "Chikorita",
    "at": 92,
    "df": 122,
    "st": 128
  },
  {
    "id": 153,
    "name": "Bayleef",
    "at": 122,
    "df": 155,
    "st": 155
  },
  {
    "id": 154,
    "name": "Meganium",
    "at": 168,
    "df": 202,
    "st": 190
  },
  {
    "id": 155,
    "name": "Cyndaquil",
    "at": 116,
    "df": 93,
    "st": 118
  },
  {
    "id": 156,
    "name": "Quilava",
    "at": 158,
    "df": 126,
    "st": 151
  },
  {
    "id": 157,
    "name": "Typhlosion",
    "at": 223,
    "df": 173,
    "st": 186
  },
  {
    "id": 158,
    "name": "Totodile",
    "at": 117,
    "df": 109,
    "st": 137
  },
  {
    "id": 159,
    "name": "Croconaw",
    "at": 150,
    "df": 142,
    "st": 163
  },
  {
    "id": 160,
    "name": "Feraligatr",
    "at": 205,
    "df": 188,
    "st": 198
  },
  {
    "id": 161,
    "name": "Sentret",
    "at": 79,
    "df": 73,
    "st": 111
  },
  {
    "id": 162,
    "name": "Furret",
    "at": 148,
    "df": 125,
    "st": 198
  },
  {
    "id": 163,
    "name": "Hoothoot",
    "at": 67,
    "df": 88,
    "st": 155
  },
  {
    "id": 164,
    "name": "Noctowl",
    "at": 145,
    "df": 156,
    "st": 225
  },
  {
    "id": 165,
    "name": "Ledyba",
    "at": 72,
    "df": 118,
    "st": 120
  },
  {
    "id": 166,
    "name": "Ledian",
    "at": 107,
    "df": 179,
    "st": 146
  },
  {
    "id": 167,
    "name": "Spinarak",
    "at": 105,
    "df": 73,
    "st": 120
  },
  {
    "id": 168,
    "name": "Ariados",
    "at": 161,
    "df": 124,
    "st": 172
  },
  {
    "id": 169,
    "name": "Crobat",
    "at": 194,
    "df": 178,
    "st": 198
  },
  {
    "id": 170,
    "name": "Chinchou",
    "at": 106,
    "df": 97,
    "st": 181
  },
  {
    "id": 171,
    "name": "Lanturn",
    "at": 146,
    "df": 137,
    "st": 268
  },
  {
    "id": 172,
    "name": "Pichu",
    "at": 77,
    "df": 53,
    "st": 85
  },
  {
    "id": 173,
    "name": "Cleffa",
    "at": 75,
    "df": 79,
    "st": 137
  },
  {
    "id": 174,
    "name": "Igglybuff",
    "at": 69,
    "df": 32,
    "st": 207
  },
  {
    "id": 175,
    "name": "Togepi",
    "at": 67,
    "df": 116,
    "st": 111
  },
  {
    "id": 176,
    "name": "Togetic",
    "at": 139,
    "df": 181,
    "st": 146
  },
  {
    "id": 177,
    "name": "Natu",
    "at": 134,
    "df": 89,
    "st": 120
  },
  {
    "id": 178,
    "name": "Xatu",
    "at": 192,
    "df": 146,
    "st": 163
  },
  {
    "id": 179,
    "name": "Mareep",
    "at": 114,
    "df": 79,
    "st": 146
  },
  {
    "id": 180,
    "name": "Flaaffy",
    "at": 145,
    "df": 109,
    "st": 172
  },
  {
    "id": 181,
    "name": "Ampharos Mega Ampharos",
    "at": 294,
    "df": 203,
    "st": 207
  },
  {
    "id": 181,
    "name": "Ampharos",
    "at": 211,
    "df": 169,
    "st": 207
  },
  {
    "id": 182,
    "name": "Bellossom",
    "at": 169,
    "df": 186,
    "st": 181
  },
  {
    "id": 183,
    "name": "Marill",
    "at": 37,
    "df": 93,
    "st": 172
  },
  {
    "id": 184,
    "name": "Azumarill",
    "at": 112,
    "df": 152,
    "st": 225
  },
  {
    "id": 185,
    "name": "Sudowoodo",
    "at": 167,
    "df": 176,
    "st": 172
  },
  {
    "id": 186,
    "name": "Politoed",
    "at": 174,
    "df": 179,
    "st": 207
  },
  {
    "id": 187,
    "name": "Hoppip",
    "at": 67,
    "df": 94,
    "st": 111
  },
  {
    "id": 188,
    "name": "Skiploom",
    "at": 91,
    "df": 120,
    "st": 146
  },
  {
    "id": 189,
    "name": "Jumpluff",
    "at": 118,
    "df": 183,
    "st": 181
  },
  {
    "id": 190,
    "name": "Aipom",
    "at": 136,
    "df": 112,
    "st": 146
  },
  {
    "id": 191,
    "name": "Sunkern",
    "at": 55,
    "df": 55,
    "st": 102
  },
  {
    "id": 192,
    "name": "Sunflora",
    "at": 185,
    "df": 135,
    "st": 181
  },
  {
    "id": 193,
    "name": "Yanma",
    "at": 154,
    "df": 94,
    "st": 163
  },
  {
    "id": 194,
    "name": "Wooper",
    "at": 75,
    "df": 66,
    "st": 146
  },
  {
    "id": 195,
    "name": "Quagsire",
    "at": 152,
    "df": 143,
    "st": 216
  },
  {
    "id": 196,
    "name": "Espeon",
    "at": 261,
    "df": 175,
    "st": 163
  },
  {
    "id": 197,
    "name": "Umbreon",
    "at": 126,
    "df": 240,
    "st": 216
  },
  {
    "id": 198,
    "name": "Murkrow",
    "at": 175,
    "df": 87,
    "st": 155
  },
  {
    "id": 199,
    "name": "Slowking",
    "at": 177,
    "df": 180,
    "st": 216
  },
  {
    "id": 200,
    "name": "Misdreavus",
    "at": 167,
    "df": 154,
    "st": 155
  },
  {
    "id": 201,
    "name": "Unown",
    "at": 136,
    "df": 91,
    "st": 134
  },
  {
    "id": 202,
    "name": "Wobbuffet",
    "at": 60,
    "df": 106,
    "st": 382
  },
  {
    "id": 203,
    "name": "Girafarig",
    "at": 182,
    "df": 133,
    "st": 172
  },
  {
    "id": 204,
    "name": "Pineco",
    "at": 108,
    "df": 122,
    "st": 137
  },
  {
    "id": 205,
    "name": "Forretress",
    "at": 161,
    "df": 205,
    "st": 181
  },
  {
    "id": 206,
    "name": "Dunsparce",
    "at": 131,
    "df": 128,
    "st": 225
  },
  {
    "id": 207,
    "name": "Gligar",
    "at": 143,
    "df": 184,
    "st": 163
  },
  {
    "id": 208,
    "name": "Steelix Mega Steelix",
    "at": 212,
    "df": 327,
    "st": 181
  },
  {
    "id": 208,
    "name": "Steelix",
    "at": 148,
    "df": 272,
    "st": 181
  },
  {
    "id": 209,
    "name": "Snubbull",
    "at": 137,
    "df": 85,
    "st": 155
  },
  {
    "id": 210,
    "name": "Granbull",
    "at": 212,
    "df": 131,
    "st": 207
  },
  {
    "id": 211,
    "name": "Qwilfish",
    "at": 184,
    "df": 138,
    "st": 163
  },
  {
    "id": 212,
    "name": "Scizor Mega Scizor",
    "at": 279,
    "df": 250,
    "st": 172
  },
  {
    "id": 212,
    "name": "Scizor",
    "at": 236,
    "df": 181,
    "st": 172
  },
  {
    "id": 213,
    "name": "Shuckle",
    "at": 17,
    "df": 396,
    "st": 85
  },
  {
    "id": 214,
    "name": "Heracross Mega Heracross",
    "at": 334,
    "df": 223,
    "st": 190
  },
  {
    "id": 214,
    "name": "Heracross",
    "at": 234,
    "df": 179,
    "st": 190
  },
  {
    "id": 215,
    "name": "Sneasel",
    "at": 189,
    "df": 146,
    "st": 146
  },
  {
    "id": 216,
    "name": "Teddiursa",
    "at": 142,
    "df": 93,
    "st": 155
  },
  {
    "id": 217,
    "name": "Ursaring",
    "at": 236,
    "df": 144,
    "st": 207
  },
  {
    "id": 218,
    "name": "Slugma",
    "at": 118,
    "df": 71,
    "st": 120
  },
  {
    "id": 219,
    "name": "Magcargo",
    "at": 139,
    "df": 191,
    "st": 137
  },
  {
    "id": 220,
    "name": "Swinub",
    "at": 90,
    "df": 69,
    "st": 137
  },
  {
    "id": 221,
    "name": "Piloswine",
    "at": 181,
    "df": 138,
    "st": 225
  },
  {
    "id": 222,
    "name": "Corsola",
    "at": 118,
    "df": 156,
    "st": 146
  },
  {
    "id": 223,
    "name": "Remoraid",
    "at": 127,
    "df": 69,
    "st": 111
  },
  {
    "id": 224,
    "name": "Octillery",
    "at": 197,
    "df": 141,
    "st": 181
  },
  {
    "id": 225,
    "name": "Delibird",
    "at": 128,
    "df": 90,
    "st": 128
  },
  {
    "id": 226,
    "name": "Mantine",
    "at": 148,
    "df": 226,
    "st": 163
  },
  {
    "id": 227,
    "name": "Skarmory",
    "at": 148,
    "df": 226,
    "st": 163
  },
  {
    "id": 228,
    "name": "Houndour",
    "at": 152,
    "df": 83,
    "st": 128
  },
  {
    "id": 229,
    "name": "Houndoom Mega Houndoom",
    "at": 289,
    "df": 194,
    "st": 181
  },
  {
    "id": 229,
    "name": "Houndoom",
    "at": 224,
    "df": 144,
    "st": 181
  },
  {
    "id": 230,
    "name": "Kingdra",
    "at": 194,
    "df": 194,
    "st": 181
  },
  {
    "id": 231,
    "name": "Phanpy",
    "at": 107,
    "df": 98,
    "st": 207
  },
  {
    "id": 232,
    "name": "Donphan",
    "at": 214,
    "df": 185,
    "st": 207
  },
  {
    "id": 233,
    "name": "Porygon2",
    "at": 198,
    "df": 180,
    "st": 198
  },
  {
    "id": 234,
    "name": "Stantler",
    "at": 192,
    "df": 131,
    "st": 177
  },
  {
    "id": 235,
    "name": "Smeargle",
    "at": 40,
    "df": 83,
    "st": 146
  },
  {
    "id": 236,
    "name": "Tyrogue",
    "at": 64,
    "df": 64,
    "st": 111
  },
  {
    "id": 237,
    "name": "Hitmontop",
    "at": 173,
    "df": 207,
    "st": 137
  },
  {
    "id": 238,
    "name": "Smoochum",
    "at": 153,
    "df": 91,
    "st": 128
  },
  {
    "id": 239,
    "name": "Elekid",
    "at": 135,
    "df": 101,
    "st": 128
  },
  {
    "id": 240,
    "name": "Magby",
    "at": 151,
    "df": 99,
    "st": 128
  },
  {
    "id": 241,
    "name": "Miltank",
    "at": 157,
    "df": 193,
    "st": 216
  },
  {
    "id": 242,
    "name": "Blissey",
    "at": 129,
    "df": 169,
    "st": 496
  },
  {
    "id": 243,
    "name": "Raikou",
    "at": 241,
    "df": 195,
    "st": 207
  },
  {
    "id": 244,
    "name": "Entei",
    "at": 235,
    "df": 171,
    "st": 251
  },
  {
    "id": 245,
    "name": "Suicune",
    "at": 180,
    "df": 235,
    "st": 225
  },
  {
    "id": 246,
    "name": "Larvitar",
    "at": 115,
    "df": 93,
    "st": 137
  },
  {
    "id": 247,
    "name": "Pupitar",
    "at": 155,
    "df": 133,
    "st": 172
  },
  {
    "id": 248,
    "name": "Tyranitar Mega Tyranitar",
    "at": 309,
    "df": 276,
    "st": 225
  },
  {
    "id": 248,
    "name": "Tyranitar",
    "at": 251,
    "df": 207,
    "st": 225
  },
  {
    "id": 249,
    "name": "Lugia",
    "at": 193,
    "df": 310,
    "st": 235
  },
  {
    "id": 250,
    "name": "Ho-Oh",
    "at": 239,
    "df": 244,
    "st": 214
  },
  {
    "id": 251,
    "name": "Celebi",
    "at": 210,
    "df": 210,
    "st": 225
  },
  {
    "id": 252,
    "name": "Treecko",
    "at": 124,
    "df": 94,
    "st": 120
  },
  {
    "id": 253,
    "name": "Grovyle",
    "at": 172,
    "df": 120,
    "st": 137
  },
  {
    "id": 254,
    "name": "Sceptile Mega Sceptile",
    "at": 320,
    "df": 186,
    "st": 172
  },
  {
    "id": 254,
    "name": "Sceptile",
    "at": 223,
    "df": 169,
    "st": 172
  },
  {
    "id": 255,
    "name": "Torchic",
    "at": 130,
    "df": 87,
    "st": 128
  },
  {
    "id": 256,
    "name": "Combusken",
    "at": 163,
    "df": 115,
    "st": 155
  },
  {
    "id": 257,
    "name": "Blaziken Mega Blaziken",
    "at": 329,
    "df": 168,
    "st": 190
  },
  {
    "id": 257,
    "name": "Blaziken",
    "at": 240,
    "df": 141,
    "st": 190
  },
  {
    "id": 258,
    "name": "Mudkip",
    "at": 126,
    "df": 93,
    "st": 137
  },
  {
    "id": 259,
    "name": "Marshtomp",
    "at": 156,
    "df": 133,
    "st": 172
  },
  {
    "id": 260,
    "name": "Swampert Mega Swampert",
    "at": 283,
    "df": 218,
    "st": 225
  },
  {
    "id": 260,
    "name": "Swampert",
    "at": 208,
    "df": 175,
    "st": 225
  },
  {
    "id": 261,
    "name": "Poochyena",
    "at": 96,
    "df": 61,
    "st": 111
  },
  {
    "id": 262,
    "name": "Mightyena",
    "at": 171,
    "df": 132,
    "st": 172
  },
  {
    "id": 263,
    "name": "Zigzagoon",
    "at": 58,
    "df": 80,
    "st": 116
  },
  {
    "id": 263,
    "name": "Zigzagoon Galarian Form",
    "at": 58,
    "df": 80,
    "st": 116
  },
  {
    "id": 264,
    "name": "Linoone",
    "at": 142,
    "df": 128,
    "st": 186
  },
  {
    "id": 264,
    "name": "Linoone Galarian Form",
    "at": 142,
    "df": 128,
    "st": 186
  },
  {
    "id": 265,
    "name": "Wurmple",
    "at": 75,
    "df": 59,
    "st": 128
  },
  {
    "id": 266,
    "name": "Silcoon",
    "at": 60,
    "df": 77,
    "st": 137
  },
  {
    "id": 267,
    "name": "Beautifly",
    "at": 189,
    "df": 98,
    "st": 155
  },
  {
    "id": 268,
    "name": "Cascoon",
    "at": 60,
    "df": 77,
    "st": 137
  },
  {
    "id": 269,
    "name": "Dustox",
    "at": 98,
    "df": 162,
    "st": 155
  },
  {
    "id": 270,
    "name": "Lotad",
    "at": 71,
    "df": 77,
    "st": 120
  },
  {
    "id": 271,
    "name": "Lombre",
    "at": 112,
    "df": 119,
    "st": 155
  },
  {
    "id": 272,
    "name": "Ludicolo",
    "at": 173,
    "df": 176,
    "st": 190
  },
  {
    "id": 273,
    "name": "Seedot",
    "at": 71,
    "df": 77,
    "st": 120
  },
  {
    "id": 274,
    "name": "Nuzleaf",
    "at": 134,
    "df": 78,
    "st": 172
  },
  {
    "id": 275,
    "name": "Shiftry",
    "at": 200,
    "df": 121,
    "st": 207
  },
  {
    "id": 276,
    "name": "Taillow",
    "at": 106,
    "df": 61,
    "st": 120
  },
  {
    "id": 277,
    "name": "Swellow",
    "at": 185,
    "df": 124,
    "st": 155
  },
  {
    "id": 278,
    "name": "Wingull",
    "at": 106,
    "df": 61,
    "st": 120
  },
  {
    "id": 279,
    "name": "Pelipper",
    "at": 175,
    "df": 174,
    "st": 155
  },
  {
    "id": 280,
    "name": "Ralts",
    "at": 79,
    "df": 59,
    "st": 99
  },
  {
    "id": 281,
    "name": "Kirlia",
    "at": 117,
    "df": 90,
    "st": 116
  },
  {
    "id": 282,
    "name": "Gardevoir Mega Gardevoir",
    "at": 326,
    "df": 229,
    "st": 169
  },
  {
    "id": 282,
    "name": "Gardevoir",
    "at": 237,
    "df": 195,
    "st": 169
  },
  {
    "id": 283,
    "name": "Surskit",
    "at": 93,
    "df": 87,
    "st": 120
  },
  {
    "id": 284,
    "name": "Masquerain",
    "at": 192,
    "df": 150,
    "st": 172
  },
  {
    "id": 285,
    "name": "Shroomish",
    "at": 74,
    "df": 110,
    "st": 155
  },
  {
    "id": 286,
    "name": "Breloom",
    "at": 241,
    "df": 144,
    "st": 155
  },
  {
    "id": 287,
    "name": "Slakoth",
    "at": 104,
    "df": 92,
    "st": 155
  },
  {
    "id": 288,
    "name": "Vigoroth",
    "at": 159,
    "df": 145,
    "st": 190
  },
  {
    "id": 289,
    "name": "Slaking",
    "at": 290,
    "df": 166,
    "st": 284
  },
  {
    "id": 290,
    "name": "Nincada",
    "at": 80,
    "df": 126,
    "st": 104
  },
  {
    "id": 291,
    "name": "Ninjask",
    "at": 199,
    "df": 112,
    "st": 156
  },
  {
    "id": 292,
    "name": "Shedinja",
    "at": 153,
    "df": 73,
    "st": 1
  },
  {
    "id": 293,
    "name": "Whismur",
    "at": 92,
    "df": 42,
    "st": 162
  },
  {
    "id": 294,
    "name": "Loudred",
    "at": 134,
    "df": 81,
    "st": 197
  },
  {
    "id": 295,
    "name": "Exploud",
    "at": 179,
    "df": 137,
    "st": 232
  },
  {
    "id": 296,
    "name": "Makuhita",
    "at": 99,
    "df": 54,
    "st": 176
  },
  {
    "id": 297,
    "name": "Hariyama",
    "at": 209,
    "df": 114,
    "st": 302
  },
  {
    "id": 298,
    "name": "Azurill",
    "at": 36,
    "df": 71,
    "st": 137
  },
  {
    "id": 299,
    "name": "Nosepass",
    "at": 82,
    "df": 215,
    "st": 102
  },
  {
    "id": 300,
    "name": "Skitty",
    "at": 84,
    "df": 79,
    "st": 137
  },
  {
    "id": 301,
    "name": "Delcatty",
    "at": 132,
    "df": 127,
    "st": 172
  },
  {
    "id": 302,
    "name": "Sableye Mega Sableye",
    "at": 151,
    "df": 216,
    "st": 137
  },
  {
    "id": 302,
    "name": "Sableye",
    "at": 141,
    "df": 136,
    "st": 137
  },
  {
    "id": 303,
    "name": "Mawile Mega Mawile",
    "at": 188,
    "df": 217,
    "st": 137
  },
  {
    "id": 303,
    "name": "Mawile",
    "at": 155,
    "df": 141,
    "st": 137
  },
  {
    "id": 304,
    "name": "Aron",
    "at": 121,
    "df": 141,
    "st": 137
  },
  {
    "id": 305,
    "name": "Lairon",
    "at": 158,
    "df": 198,
    "st": 155
  },
  {
    "id": 306,
    "name": "Aggron Mega Aggron",
    "at": 247,
    "df": 331,
    "st": 172
  },
  {
    "id": 306,
    "name": "Aggron",
    "at": 198,
    "df": 257,
    "st": 172
  },
  {
    "id": 307,
    "name": "Meditite",
    "at": 78,
    "df": 107,
    "st": 102
  },
  {
    "id": 308,
    "name": "Medicham Mega Medicham",
    "at": 205,
    "df": 179,
    "st": 155
  },
  {
    "id": 308,
    "name": "Medicham",
    "at": 121,
    "df": 152,
    "st": 155
  },
  {
    "id": 309,
    "name": "Electrike",
    "at": 123,
    "df": 78,
    "st": 120
  },
  {
    "id": 310,
    "name": "Manectric Mega Manectric",
    "at": 286,
    "df": 179,
    "st": 172
  },
  {
    "id": 310,
    "name": "Manectric",
    "at": 215,
    "df": 127,
    "st": 172
  },
  {
    "id": 311,
    "name": "Plusle",
    "at": 167,
    "df": 129,
    "st": 155
  },
  {
    "id": 312,
    "name": "Minun",
    "at": 147,
    "df": 150,
    "st": 155
  },
  {
    "id": 313,
    "name": "Volbeat",
    "at": 143,
    "df": 166,
    "st": 163
  },
  {
    "id": 314,
    "name": "Illumise",
    "at": 143,
    "df": 166,
    "st": 163
  },
  {
    "id": 315,
    "name": "Roselia",
    "at": 186,
    "df": 131,
    "st": 137
  },
  {
    "id": 316,
    "name": "Gulpin",
    "at": 80,
    "df": 99,
    "st": 172
  },
  {
    "id": 317,
    "name": "Swalot",
    "at": 140,
    "df": 159,
    "st": 225
  },
  {
    "id": 318,
    "name": "Carvanha",
    "at": 171,
    "df": 39,
    "st": 128
  },
  {
    "id": 319,
    "name": "Sharpedo Mega Sharpedo",
    "at": 289,
    "df": 144,
    "st": 172
  },
  {
    "id": 319,
    "name": "Sharpedo",
    "at": 243,
    "df": 83,
    "st": 172
  },
  {
    "id": 320,
    "name": "Wailmer",
    "at": 136,
    "df": 68,
    "st": 277
  },
  {
    "id": 321,
    "name": "Wailord",
    "at": 175,
    "df": 87,
    "st": 347
  },
  {
    "id": 322,
    "name": "Numel",
    "at": 119,
    "df": 79,
    "st": 155
  },
  {
    "id": 323,
    "name": "Camerupt Mega Camerupt",
    "at": 253,
    "df": 183,
    "st": 172
  },
  {
    "id": 323,
    "name": "Camerupt",
    "at": 194,
    "df": 136,
    "st": 172
  },
  {
    "id": 324,
    "name": "Torkoal",
    "at": 151,
    "df": 203,
    "st": 172
  },
  {
    "id": 325,
    "name": "Spoink",
    "at": 125,
    "df": 122,
    "st": 155
  },
  {
    "id": 326,
    "name": "Grumpig",
    "at": 171,
    "df": 188,
    "st": 190
  },
  {
    "id": 327,
    "name": "Spinda",
    "at": 116,
    "df": 116,
    "st": 155
  },
  {
    "id": 328,
    "name": "Trapinch",
    "at": 162,
    "df": 78,
    "st": 128
  },
  {
    "id": 329,
    "name": "Vibrava",
    "at": 134,
    "df": 99,
    "st": 137
  },
  {
    "id": 330,
    "name": "Flygon",
    "at": 205,
    "df": 168,
    "st": 190
  },
  {
    "id": 331,
    "name": "Cacnea",
    "at": 156,
    "df": 74,
    "st": 137
  },
  {
    "id": 332,
    "name": "Cacturne",
    "at": 221,
    "df": 115,
    "st": 172
  },
  {
    "id": 333,
    "name": "Swablu",
    "at": 76,
    "df": 132,
    "st": 128
  },
  {
    "id": 334,
    "name": "Altaria Mega Altaria",
    "at": 222,
    "df": 218,
    "st": 181
  },
  {
    "id": 334,
    "name": "Altaria",
    "at": 141,
    "df": 201,
    "st": 181
  },
  {
    "id": 335,
    "name": "Zangoose",
    "at": 222,
    "df": 124,
    "st": 177
  },
  {
    "id": 336,
    "name": "Seviper",
    "at": 196,
    "df": 118,
    "st": 177
  },
  {
    "id": 337,
    "name": "Lunatone",
    "at": 178,
    "df": 153,
    "st": 207
  },
  {
    "id": 338,
    "name": "Solrock",
    "at": 178,
    "df": 153,
    "st": 207
  },
  {
    "id": 339,
    "name": "Barboach",
    "at": 93,
    "df": 82,
    "st": 137
  },
  {
    "id": 340,
    "name": "Whiscash",
    "at": 151,
    "df": 141,
    "st": 242
  },
  {
    "id": 341,
    "name": "Corphish",
    "at": 141,
    "df": 99,
    "st": 125
  },
  {
    "id": 342,
    "name": "Crawdaunt",
    "at": 224,
    "df": 142,
    "st": 160
  },
  {
    "id": 343,
    "name": "Baltoy",
    "at": 77,
    "df": 124,
    "st": 120
  },
  {
    "id": 344,
    "name": "Claydol",
    "at": 140,
    "df": 229,
    "st": 155
  },
  {
    "id": 345,
    "name": "Lileep",
    "at": 105,
    "df": 150,
    "st": 165
  },
  {
    "id": 346,
    "name": "Cradily",
    "at": 152,
    "df": 194,
    "st": 200
  },
  {
    "id": 347,
    "name": "Anorith",
    "at": 176,
    "df": 100,
    "st": 128
  },
  {
    "id": 348,
    "name": "Armaldo",
    "at": 222,
    "df": 174,
    "st": 181
  },
  {
    "id": 349,
    "name": "Feebas",
    "at": 29,
    "df": 85,
    "st": 85
  },
  {
    "id": 350,
    "name": "Milotic",
    "at": 192,
    "df": 219,
    "st": 216
  },
  {
    "id": 351,
    "name": "Castform Sunny Form",
    "at": 139,
    "df": 139,
    "st": 172
  },
  {
    "id": 351,
    "name": "Castform Snowy Form",
    "at": 139,
    "df": 139,
    "st": 172
  },
  {
    "id": 351,
    "name": "Castform Rainy Form",
    "at": 139,
    "df": 139,
    "st": 172
  },
  {
    "id": 351,
    "name": "Castform",
    "at": 139,
    "df": 139,
    "st": 172
  },
  {
    "id": 352,
    "name": "Kecleon",
    "at": 161,
    "df": 189,
    "st": 155
  },
  {
    "id": 353,
    "name": "Shuppet",
    "at": 138,
    "df": 65,
    "st": 127
  },
  {
    "id": 354,
    "name": "Banette Mega Banette",
    "at": 312,
    "df": 160,
    "st": 162
  },
  {
    "id": 354,
    "name": "Banette",
    "at": 218,
    "df": 126,
    "st": 162
  },
  {
    "id": 355,
    "name": "Duskull",
    "at": 70,
    "df": 162,
    "st": 85
  },
  {
    "id": 356,
    "name": "Dusclops",
    "at": 124,
    "df": 234,
    "st": 120
  },
  {
    "id": 357,
    "name": "Tropius",
    "at": 136,
    "df": 163,
    "st": 223
  },
  {
    "id": 358,
    "name": "Chimecho",
    "at": 175,
    "df": 170,
    "st": 181
  },
  {
    "id": 359,
    "name": "Absol Mega Absol",
    "at": 314,
    "df": 130,
    "st": 163
  },
  {
    "id": 359,
    "name": "Absol",
    "at": 246,
    "df": 120,
    "st": 163
  },
  {
    "id": 360,
    "name": "Wynaut",
    "at": 41,
    "df": 86,
    "st": 216
  },
  {
    "id": 361,
    "name": "Snorunt",
    "at": 95,
    "df": 95,
    "st": 137
  },
  {
    "id": 362,
    "name": "Glalie Mega Glalie",
    "at": 252,
    "df": 168,
    "st": 190
  },
  {
    "id": 362,
    "name": "Glalie",
    "at": 162,
    "df": 162,
    "st": 190
  },
  {
    "id": 363,
    "name": "Spheal",
    "at": 95,
    "df": 90,
    "st": 172
  },
  {
    "id": 364,
    "name": "Sealeo",
    "at": 137,
    "df": 132,
    "st": 207
  },
  {
    "id": 365,
    "name": "Walrein",
    "at": 182,
    "df": 176,
    "st": 242
  },
  {
    "id": 366,
    "name": "Clamperl",
    "at": 133,
    "df": 135,
    "st": 111
  },
  {
    "id": 367,
    "name": "Huntail",
    "at": 197,
    "df": 179,
    "st": 146
  },
  {
    "id": 368,
    "name": "Gorebyss",
    "at": 211,
    "df": 179,
    "st": 146
  },
  {
    "id": 369,
    "name": "Relicanth",
    "at": 162,
    "df": 203,
    "st": 225
  },
  {
    "id": 370,
    "name": "Luvdisc",
    "at": 81,
    "df": 128,
    "st": 125
  },
  {
    "id": 371,
    "name": "Bagon",
    "at": 134,
    "df": 93,
    "st": 128
  },
  {
    "id": 372,
    "name": "Shelgon",
    "at": 172,
    "df": 155,
    "st": 163
  },
  {
    "id": 373,
    "name": "Salamence Mega Salamence",
    "at": 310,
    "df": 251,
    "st": 216
  },
  {
    "id": 373,
    "name": "Salamence",
    "at": 277,
    "df": 168,
    "st": 216
  },
  {
    "id": 374,
    "name": "Beldum",
    "at": 96,
    "df": 132,
    "st": 120
  },
  {
    "id": 375,
    "name": "Metang",
    "at": 138,
    "df": 176,
    "st": 155
  },
  {
    "id": 376,
    "name": "Metagross Mega Metagross",
    "at": 300,
    "df": 289,
    "st": 190
  },
  {
    "id": 376,
    "name": "Metagross",
    "at": 257,
    "df": 228,
    "st": 190
  },
  {
    "id": 377,
    "name": "Regirock",
    "at": 179,
    "df": 309,
    "st": 190
  },
  {
    "id": 378,
    "name": "Regice",
    "at": 179,
    "df": 309,
    "st": 190
  },
  {
    "id": 379,
    "name": "Registeel",
    "at": 143,
    "df": 285,
    "st": 190
  },
  {
    "id": 380,
    "name": "Latias Mega Latias",
    "at": 289,
    "df": 297,
    "st": 190
  },
  {
    "id": 380,
    "name": "Latias",
    "at": 228,
    "df": 246,
    "st": 190
  },
  {
    "id": 381,
    "name": "Latios Mega Latios",
    "at": 335,
    "df": 241,
    "st": 190
  },
  {
    "id": 381,
    "name": "Latios",
    "at": 268,
    "df": 212,
    "st": 190
  },
  {
    "id": 382,
    "name": "Kyogre Primal Reversion",
    "at": 364,
    "df": 276,
    "st": 225
  },
  {
    "id": 382,
    "name": "Kyogre",
    "at": 270,
    "df": 228,
    "st": 205
  },
  {
    "id": 383,
    "name": "Groudon Primal Reversion",
    "at": 364,
    "df": 276,
    "st": 225
  },
  {
    "id": 383,
    "name": "Groudon",
    "at": 270,
    "df": 228,
    "st": 205
  },
  {
    "id": 384,
    "name": "Rayquaza Mega Rayquaza",
    "at": 389,
    "df": 216,
    "st": 233
  },
  {
    "id": 384,
    "name": "Rayquaza",
    "at": 284,
    "df": 170,
    "st": 213
  },
  {
    "id": 385,
    "name": "Jirachi",
    "at": 210,
    "df": 210,
    "st": 225
  },
  {
    "id": 386,
    "name": "Deoxys Speed Forme",
    "at": 230,
    "df": 218,
    "st": 137
  },
  {
    "id": 386,
    "name": "Deoxys Defense Forme",
    "at": 144,
    "df": 330,
    "st": 137
  },
  {
    "id": 386,
    "name": "Deoxys Attack Forme",
    "at": 414,
    "df": 46,
    "st": 137
  },
  {
    "id": 386,
    "name": "Deoxys",
    "at": 345,
    "df": 115,
    "st": 137
  },
  {
    "id": 387,
    "name": "Turtwig",
    "at": 119,
    "df": 110,
    "st": 146
  },
  {
    "id": 388,
    "name": "Grotle",
    "at": 157,
    "df": 143,
    "st": 181
  },
  {
    "id": 389,
    "name": "Torterra",
    "at": 202,
    "df": 188,
    "st": 216
  },
  {
    "id": 390,
    "name": "Chimchar",
    "at": 113,
    "df": 86,
    "st": 127
  },
  {
    "id": 391,
    "name": "Monferno",
    "at": 158,
    "df": 105,
    "st": 162
  },
  {
    "id": 392,
    "name": "Infernape",
    "at": 222,
    "df": 151,
    "st": 183
  },
  {
    "id": 393,
    "name": "Piplup",
    "at": 112,
    "df": 102,
    "st": 142
  },
  {
    "id": 394,
    "name": "Prinplup",
    "at": 150,
    "df": 139,
    "st": 162
  },
  {
    "id": 395,
    "name": "Empoleon",
    "at": 210,
    "df": 186,
    "st": 197
  },
  {
    "id": 396,
    "name": "Starly",
    "at": 101,
    "df": 58,
    "st": 120
  },
  {
    "id": 397,
    "name": "Staravia",
    "at": 142,
    "df": 94,
    "st": 146
  },
  {
    "id": 398,
    "name": "Staraptor",
    "at": 234,
    "df": 140,
    "st": 198
  },
  {
    "id": 399,
    "name": "Bidoof",
    "at": 80,
    "df": 73,
    "st": 153
  },
  {
    "id": 400,
    "name": "Bibarel",
    "at": 162,
    "df": 119,
    "st": 188
  },
  {
    "id": 401,
    "name": "Kricketot",
    "at": 45,
    "df": 74,
    "st": 114
  },
  {
    "id": 402,
    "name": "Kricketune",
    "at": 160,
    "df": 100,
    "st": 184
  },
  {
    "id": 403,
    "name": "Shinx",
    "at": 117,
    "df": 64,
    "st": 128
  },
  {
    "id": 404,
    "name": "Luxio",
    "at": 159,
    "df": 95,
    "st": 155
  },
  {
    "id": 405,
    "name": "Luxray",
    "at": 232,
    "df": 156,
    "st": 190
  },
  {
    "id": 406,
    "name": "Budew",
    "at": 91,
    "df": 109,
    "st": 120
  },
  {
    "id": 407,
    "name": "Roserade",
    "at": 243,
    "df": 185,
    "st": 155
  },
  {
    "id": 408,
    "name": "Cranidos",
    "at": 218,
    "df": 71,
    "st": 167
  },
  {
    "id": 409,
    "name": "Rampardos",
    "at": 295,
    "df": 109,
    "st": 219
  },
  {
    "id": 410,
    "name": "Shieldon",
    "at": 76,
    "df": 195,
    "st": 102
  },
  {
    "id": 411,
    "name": "Bastiodon",
    "at": 94,
    "df": 286,
    "st": 155
  },
  {
    "id": 412,
    "name": "Burmy",
    "at": 53,
    "df": 83,
    "st": 120
  },
  {
    "id": 413,
    "name": "Wormadam Trash Cloak",
    "at": 127,
    "df": 175,
    "st": 155
  },
  {
    "id": 413,
    "name": "Wormadam Sandy Cloak",
    "at": 141,
    "df": 180,
    "st": 155
  },
  {
    "id": 413,
    "name": "Wormadam",
    "at": 141,
    "df": 180,
    "st": 155
  },
  {
    "id": 414,
    "name": "Mothim",
    "at": 185,
    "df": 98,
    "st": 172
  },
  {
    "id": 415,
    "name": "Combee",
    "at": 59,
    "df": 83,
    "st": 102
  },
  {
    "id": 416,
    "name": "Vespiquen",
    "at": 149,
    "df": 190,
    "st": 172
  },
  {
    "id": 417,
    "name": "Pachirisu",
    "at": 94,
    "df": 172,
    "st": 155
  },
  {
    "id": 418,
    "name": "Buizel",
    "at": 132,
    "df": 67,
    "st": 146
  },
  {
    "id": 419,
    "name": "Floatzel",
    "at": 221,
    "df": 114,
    "st": 198
  },
  {
    "id": 420,
    "name": "Cherubi",
    "at": 108,
    "df": 92,
    "st": 128
  },
  {
    "id": 421,
    "name": "Cherrim",
    "at": 170,
    "df": 153,
    "st": 172
  },
  {
    "id": 422,
    "name": "Shellos",
    "at": 103,
    "df": 105,
    "st": 183
  },
  {
    "id": 423,
    "name": "Gastrodon",
    "at": 169,
    "df": 143,
    "st": 244
  },
  {
    "id": 424,
    "name": "Ambipom",
    "at": 205,
    "df": 143,
    "st": 181
  },
  {
    "id": 425,
    "name": "Drifloon",
    "at": 117,
    "df": 80,
    "st": 207
  },
  {
    "id": 426,
    "name": "Drifblim",
    "at": 180,
    "df": 102,
    "st": 312
  },
  {
    "id": 427,
    "name": "Buneary",
    "at": 130,
    "df": 105,
    "st": 146
  },
  {
    "id": 428,
    "name": "Lopunny Mega Lopunny",
    "at": 282,
    "df": 214,
    "st": 163
  },
  {
    "id": 428,
    "name": "Lopunny",
    "at": 156,
    "df": 194,
    "st": 163
  },
  {
    "id": 429,
    "name": "Mismagius",
    "at": 211,
    "df": 187,
    "st": 155
  },
  {
    "id": 430,
    "name": "Honchkrow",
    "at": 243,
    "df": 103,
    "st": 225
  },
  {
    "id": 431,
    "name": "Glameow",
    "at": 109,
    "df": 82,
    "st": 135
  },
  {
    "id": 432,
    "name": "Purugly",
    "at": 172,
    "df": 133,
    "st": 174
  },
  {
    "id": 433,
    "name": "Chingling",
    "at": 114,
    "df": 94,
    "st": 128
  },
  {
    "id": 434,
    "name": "Stunky",
    "at": 121,
    "df": 90,
    "st": 160
  },
  {
    "id": 435,
    "name": "Skuntank",
    "at": 184,
    "df": 132,
    "st": 230
  },
  {
    "id": 436,
    "name": "Bronzor",
    "at": 43,
    "df": 154,
    "st": 149
  },
  {
    "id": 437,
    "name": "Bronzong",
    "at": 161,
    "df": 213,
    "st": 167
  },
  {
    "id": 438,
    "name": "Bonsly",
    "at": 124,
    "df": 133,
    "st": 137
  },
  {
    "id": 439,
    "name": "Mime Jr.",
    "at": 125,
    "df": 142,
    "st": 85
  },
  {
    "id": 440,
    "name": "Happiny",
    "at": 25,
    "df": 77,
    "st": 225
  },
  {
    "id": 441,
    "name": "Chatot",
    "at": 183,
    "df": 91,
    "st": 183
  },
  {
    "id": 442,
    "name": "Spiritomb",
    "at": 169,
    "df": 199,
    "st": 137
  },
  {
    "id": 443,
    "name": "Gible",
    "at": 124,
    "df": 84,
    "st": 151
  },
  {
    "id": 444,
    "name": "Gabite",
    "at": 172,
    "df": 125,
    "st": 169
  },
  {
    "id": 445,
    "name": "Garchomp Mega Garchomp",
    "at": 339,
    "df": 222,
    "st": 239
  },
  {
    "id": 445,
    "name": "Garchomp",
    "at": 261,
    "df": 193,
    "st": 239
  },
  {
    "id": 446,
    "name": "Munchlax",
    "at": 137,
    "df": 117,
    "st": 286
  },
  {
    "id": 447,
    "name": "Riolu",
    "at": 127,
    "df": 78,
    "st": 120
  },
  {
    "id": 448,
    "name": "Lucario Mega Lucario",
    "at": 310,
    "df": 175,
    "st": 172
  },
  {
    "id": 448,
    "name": "Lucario",
    "at": 236,
    "df": 144,
    "st": 172
  },
  {
    "id": 449,
    "name": "Hippopotas",
    "at": 124,
    "df": 118,
    "st": 169
  },
  {
    "id": 450,
    "name": "Hippowdon",
    "at": 201,
    "df": 191,
    "st": 239
  },
  {
    "id": 451,
    "name": "Skorupi",
    "at": 93,
    "df": 151,
    "st": 120
  },
  {
    "id": 452,
    "name": "Drapion",
    "at": 180,
    "df": 202,
    "st": 172
  },
  {
    "id": 453,
    "name": "Croagunk",
    "at": 116,
    "df": 76,
    "st": 134
  },
  {
    "id": 454,
    "name": "Toxicroak",
    "at": 211,
    "df": 133,
    "st": 195
  },
  {
    "id": 455,
    "name": "Carnivine",
    "at": 187,
    "df": 136,
    "st": 179
  },
  {
    "id": 456,
    "name": "Finneon",
    "at": 96,
    "df": 116,
    "st": 135
  },
  {
    "id": 457,
    "name": "Lumineon",
    "at": 142,
    "df": 170,
    "st": 170
  },
  {
    "id": 458,
    "name": "Mantyke",
    "at": 105,
    "df": 179,
    "st": 128
  },
  {
    "id": 459,
    "name": "Snover",
    "at": 115,
    "df": 105,
    "st": 155
  },
  {
    "id": 460,
    "name": "Abomasnow Mega Abomasnow",
    "at": 240,
    "df": 191,
    "st": 207
  },
  {
    "id": 460,
    "name": "Abomasnow",
    "at": 178,
    "df": 158,
    "st": 207
  },
  {
    "id": 461,
    "name": "Weavile",
    "at": 243,
    "df": 171,
    "st": 172
  },
  {
    "id": 462,
    "name": "Magnezone",
    "at": 238,
    "df": 205,
    "st": 172
  },
  {
    "id": 463,
    "name": "Lickilicky",
    "at": 161,
    "df": 181,
    "st": 242
  },
  {
    "id": 464,
    "name": "Rhyperior",
    "at": 241,
    "df": 190,
    "st": 251
  },
  {
    "id": 465,
    "name": "Tangrowth",
    "at": 207,
    "df": 184,
    "st": 225
  },
  {
    "id": 466,
    "name": "Electivire",
    "at": 249,
    "df": 163,
    "st": 181
  },
  {
    "id": 467,
    "name": "Magmortar",
    "at": 247,
    "df": 172,
    "st": 181
  },
  {
    "id": 468,
    "name": "Togekiss",
    "at": 225,
    "df": 217,
    "st": 198
  },
  {
    "id": 469,
    "name": "Yanmega",
    "at": 231,
    "df": 156,
    "st": 200
  },
  {
    "id": 470,
    "name": "Leafeon",
    "at": 216,
    "df": 219,
    "st": 163
  },
  {
    "id": 471,
    "name": "Glaceon",
    "at": 238,
    "df": 205,
    "st": 163
  },
  {
    "id": 472,
    "name": "Gliscor",
    "at": 185,
    "df": 222,
    "st": 181
  },
  {
    "id": 473,
    "name": "Mamoswine",
    "at": 247,
    "df": 146,
    "st": 242
  },
  {
    "id": 474,
    "name": "Porygon-Z",
    "at": 264,
    "df": 150,
    "st": 198
  },
  {
    "id": 475,
    "name": "Gallade Mega Gallade",
    "at": 326,
    "df": 230,
    "st": 169
  },
  {
    "id": 475,
    "name": "Gallade",
    "at": 237,
    "df": 195,
    "st": 169
  },
  {
    "id": 476,
    "name": "Probopass",
    "at": 135,
    "df": 275,
    "st": 155
  },
  {
    "id": 477,
    "name": "Dusknoir",
    "at": 180,
    "df": 254,
    "st": 128
  },
  {
    "id": 478,
    "name": "Froslass",
    "at": 171,
    "df": 150,
    "st": 172
  },
  {
    "id": 479,
    "name": "Rotom Wash Rotom",
    "at": 204,
    "df": 219,
    "st": 137
  },
  {
    "id": 479,
    "name": "Rotom Mow Rotom",
    "at": 204,
    "df": 219,
    "st": 137
  },
  {
    "id": 479,
    "name": "Rotom Heat Rotom",
    "at": 204,
    "df": 219,
    "st": 137
  },
  {
    "id": 479,
    "name": "Rotom Frost Rotom",
    "at": 204,
    "df": 219,
    "st": 137
  },
  {
    "id": 479,
    "name": "Rotom Fan Rotom",
    "at": 204,
    "df": 219,
    "st": 137
  },
  {
    "id": 479,
    "name": "Rotom",
    "at": 185,
    "df": 159,
    "st": 137
  },
  {
    "id": 480,
    "name": "Uxie",
    "at": 156,
    "df": 270,
    "st": 181
  },
  {
    "id": 481,
    "name": "Mesprit",
    "at": 212,
    "df": 212,
    "st": 190
  },
  {
    "id": 482,
    "name": "Azelf",
    "at": 270,
    "df": 151,
    "st": 181
  },
  {
    "id": 483,
    "name": "Dialga",
    "at": 275,
    "df": 211,
    "st": 205
  },
  {
    "id": 484,
    "name": "Palkia",
    "at": 280,
    "df": 215,
    "st": 189
  },
  {
    "id": 485,
    "name": "Heatran",
    "at": 251,
    "df": 213,
    "st": 209
  },
  {
    "id": 486,
    "name": "Regigigas",
    "at": 287,
    "df": 210,
    "st": 221
  },
  {
    "id": 487,
    "name": "Giratina Origin Forme",
    "at": 225,
    "df": 187,
    "st": 284
  },
  {
    "id": 487,
    "name": "Giratina",
    "at": 187,
    "df": 225,
    "st": 284
  },
  {
    "id": 488,
    "name": "Cresselia",
    "at": 152,
    "df": 258,
    "st": 260
  },
  {
    "id": 489,
    "name": "Phione",
    "at": 162,
    "df": 162,
    "st": 190
  },
  {
    "id": 490,
    "name": "Manaphy",
    "at": 210,
    "df": 210,
    "st": 225
  },
  {
    "id": 491,
    "name": "Darkrai",
    "at": 285,
    "df": 198,
    "st": 172
  },
  {
    "id": 492,
    "name": "Shaymin Sky Forme",
    "at": 261,
    "df": 166,
    "st": 225
  },
  {
    "id": 492,
    "name": "Shaymin",
    "at": 210,
    "df": 210,
    "st": 225
  },
  {
    "id": 493,
    "name": "Arceus",
    "at": 238,
    "df": 238,
    "st": 237
  },
  {
    "id": 494,
    "name": "Victini",
    "at": 210,
    "df": 210,
    "st": 225
  },
  {
    "id": 495,
    "name": "Snivy",
    "at": 88,
    "df": 107,
    "st": 128
  },
  {
    "id": 496,
    "name": "Servine",
    "at": 122,
    "df": 152,
    "st": 155
  },
  {
    "id": 497,
    "name": "Serperior",
    "at": 161,
    "df": 204,
    "st": 181
  },
  {
    "id": 498,
    "name": "Tepig",
    "at": 115,
    "df": 85,
    "st": 163
  },
  {
    "id": 499,
    "name": "Pignite",
    "at": 173,
    "df": 106,
    "st": 207
  },
  {
    "id": 500,
    "name": "Emboar",
    "at": 235,
    "df": 127,
    "st": 242
  },
  {
    "id": 501,
    "name": "Oshawott",
    "at": 117,
    "df": 85,
    "st": 146
  },
  {
    "id": 502,
    "name": "Dewott",
    "at": 159,
    "df": 116,
    "st": 181
  },
  {
    "id": 503,
    "name": "Samurott",
    "at": 212,
    "df": 157,
    "st": 216
  },
  {
    "id": 504,
    "name": "Patrat",
    "at": 98,
    "df": 73,
    "st": 128
  },
  {
    "id": 505,
    "name": "Watchog",
    "at": 165,
    "df": 139,
    "st": 155
  },
  {
    "id": 506,
    "name": "Lillipup",
    "at": 107,
    "df": 86,
    "st": 128
  },
  {
    "id": 507,
    "name": "Herdier",
    "at": 145,
    "df": 126,
    "st": 163
  },
  {
    "id": 508,
    "name": "Stoutland",
    "at": 206,
    "df": 182,
    "st": 198
  },
  {
    "id": 509,
    "name": "Purrloin",
    "at": 98,
    "df": 73,
    "st": 121
  },
  {
    "id": 510,
    "name": "Liepard",
    "at": 187,
    "df": 106,
    "st": 162
  },
  {
    "id": 511,
    "name": "Pansage",
    "at": 104,
    "df": 94,
    "st": 137
  },
  {
    "id": 512,
    "name": "Simisage",
    "at": 206,
    "df": 133,
    "st": 181
  },
  {
    "id": 513,
    "name": "Pansear",
    "at": 104,
    "df": 94,
    "st": 137
  },
  {
    "id": 514,
    "name": "Simisear",
    "at": 206,
    "df": 133,
    "st": 181
  },
  {
    "id": 515,
    "name": "Panpour",
    "at": 104,
    "df": 94,
    "st": 137
  },
  {
    "id": 516,
    "name": "Simipour",
    "at": 206,
    "df": 133,
    "st": 181
  },
  {
    "id": 517,
    "name": "Munna",
    "at": 111,
    "df": 92,
    "st": 183
  },
  {
    "id": 518,
    "name": "Musharna",
    "at": 183,
    "df": 166,
    "st": 253
  },
  {
    "id": 519,
    "name": "Pidove",
    "at": 98,
    "df": 80,
    "st": 137
  },
  {
    "id": 520,
    "name": "Tranquill",
    "at": 144,
    "df": 107,
    "st": 158
  },
  {
    "id": 521,
    "name": "Unfezant",
    "at": 226,
    "df": 146,
    "st": 190
  },
  {
    "id": 522,
    "name": "Blitzle",
    "at": 118,
    "df": 64,
    "st": 128
  },
  {
    "id": 523,
    "name": "Zebstrika",
    "at": 211,
    "df": 136,
    "st": 181
  },
  {
    "id": 524,
    "name": "Roggenrola",
    "at": 121,
    "df": 110,
    "st": 146
  },
  {
    "id": 525,
    "name": "Boldore",
    "at": 174,
    "df": 143,
    "st": 172
  },
  {
    "id": 526,
    "name": "Gigalith",
    "at": 226,
    "df": 201,
    "st": 198
  },
  {
    "id": 527,
    "name": "Woobat",
    "at": 107,
    "df": 85,
    "st": 163
  },
  {
    "id": 528,
    "name": "Swoobat",
    "at": 161,
    "df": 119,
    "st": 167
  },
  {
    "id": 529,
    "name": "Drilbur",
    "at": 154,
    "df": 85,
    "st": 155
  },
  {
    "id": 530,
    "name": "Excadrill",
    "at": 255,
    "df": 129,
    "st": 242
  },
  {
    "id": 531,
    "name": "Audino Mega Audino",
    "at": 147,
    "df": 239,
    "st": 230
  },
  {
    "id": 531,
    "name": "Audino",
    "at": 114,
    "df": 163,
    "st": 230
  },
  {
    "id": 532,
    "name": "Timburr",
    "at": 134,
    "df": 87,
    "st": 181
  },
  {
    "id": 533,
    "name": "Gurdurr",
    "at": 180,
    "df": 134,
    "st": 198
  },
  {
    "id": 534,
    "name": "Conkeldurr",
    "at": 243,
    "df": 158,
    "st": 233
  },
  {
    "id": 535,
    "name": "Tympole",
    "at": 98,
    "df": 78,
    "st": 137
  },
  {
    "id": 536,
    "name": "Palpitoad",
    "at": 128,
    "df": 109,
    "st": 181
  },
  {
    "id": 537,
    "name": "Seismitoad",
    "at": 188,
    "df": 150,
    "st": 233
  },
  {
    "id": 538,
    "name": "Throh",
    "at": 172,
    "df": 160,
    "st": 260
  },
  {
    "id": 539,
    "name": "Sawk",
    "at": 231,
    "df": 153,
    "st": 181
  },
  {
    "id": 540,
    "name": "Sewaddle",
    "at": 96,
    "df": 124,
    "st": 128
  },
  {
    "id": 541,
    "name": "Swadloon",
    "at": 115,
    "df": 162,
    "st": 146
  },
  {
    "id": 542,
    "name": "Leavanny",
    "at": 205,
    "df": 165,
    "st": 181
  },
  {
    "id": 543,
    "name": "Venipede",
    "at": 83,
    "df": 99,
    "st": 102
  },
  {
    "id": 544,
    "name": "Whirlipede",
    "at": 100,
    "df": 173,
    "st": 120
  },
  {
    "id": 545,
    "name": "Scolipede",
    "at": 203,
    "df": 175,
    "st": 155
  },
  {
    "id": 546,
    "name": "Cottonee",
    "at": 71,
    "df": 111,
    "st": 120
  },
  {
    "id": 547,
    "name": "Whimsicott",
    "at": 164,
    "df": 176,
    "st": 155
  },
  {
    "id": 548,
    "name": "Petilil",
    "at": 119,
    "df": 91,
    "st": 128
  },
  {
    "id": 549,
    "name": "Lilligant",
    "at": 214,
    "df": 155,
    "st": 172
  },
  {
    "id": 550,
    "name": "Basculin Blue-Striped Form",
    "at": 189,
    "df": 129,
    "st": 172
  },
  {
    "id": 550,
    "name": "Basculin",
    "at": 189,
    "df": 129,
    "st": 172
  },
  {
    "id": 551,
    "name": "Sandile",
    "at": 132,
    "df": 69,
    "st": 137
  },
  {
    "id": 552,
    "name": "Krokorok",
    "at": 155,
    "df": 90,
    "st": 155
  },
  {
    "id": 553,
    "name": "Krookodile",
    "at": 229,
    "df": 158,
    "st": 216
  },
  {
    "id": 554,
    "name": "Darumaka",
    "at": 153,
    "df": 86,
    "st": 172
  },
  {
    "id": 554,
    "name": "Darumaka Galarian Form",
    "at": 153,
    "df": 86,
    "st": 172
  },
  {
    "id": 555,
    "name": "Darmanitan Zen Mode",
    "at": 243,
    "df": 202,
    "st": 233
  },
  {
    "id": 555,
    "name": "Darmanitan Galarian Form Zen Mode",
    "at": 323,
    "df": 123,
    "st": 233
  },
  {
    "id": 555,
    "name": "Darmanitan",
    "at": 263,
    "df": 114,
    "st": 233
  },
  {
    "id": 556,
    "name": "Maractus",
    "at": 201,
    "df": 130,
    "st": 181
  },
  {
    "id": 557,
    "name": "Dwebble",
    "at": 118,
    "df": 128,
    "st": 137
  },
  {
    "id": 558,
    "name": "Crustle",
    "at": 188,
    "df": 200,
    "st": 172
  },
  {
    "id": 559,
    "name": "Scraggy",
    "at": 132,
    "df": 132,
    "st": 137
  },
  {
    "id": 560,
    "name": "Scrafty",
    "at": 163,
    "df": 222,
    "st": 163
  },
  {
    "id": 561,
    "name": "Sigilyph",
    "at": 204,
    "df": 167,
    "st": 176
  },
  {
    "id": 562,
    "name": "Yamask",
    "at": 95,
    "df": 141,
    "st": 116
  },
  {
    "id": 563,
    "name": "Cofagrigus",
    "at": 163,
    "df": 237,
    "st": 151
  },
  {
    "id": 564,
    "name": "Tirtouga",
    "at": 134,
    "df": 146,
    "st": 144
  },
  {
    "id": 565,
    "name": "Carracosta",
    "at": 192,
    "df": 197,
    "st": 179
  },
  {
    "id": 566,
    "name": "Archen",
    "at": 213,
    "df": 89,
    "st": 146
  },
  {
    "id": 567,
    "name": "Archeops",
    "at": 292,
    "df": 139,
    "st": 181
  },
  {
    "id": 568,
    "name": "Trubbish",
    "at": 96,
    "df": 122,
    "st": 137
  },
  {
    "id": 569,
    "name": "Garbodor",
    "at": 181,
    "df": 164,
    "st": 190
  },
  {
    "id": 570,
    "name": "Zorua",
    "at": 153,
    "df": 78,
    "st": 120
  },
  {
    "id": 571,
    "name": "Zoroark",
    "at": 250,
    "df": 127,
    "st": 155
  },
  {
    "id": 572,
    "name": "Minccino",
    "at": 98,
    "df": 80,
    "st": 146
  },
  {
    "id": 573,
    "name": "Cinccino",
    "at": 198,
    "df": 130,
    "st": 181
  },
  {
    "id": 574,
    "name": "Gothita",
    "at": 98,
    "df": 112,
    "st": 128
  },
  {
    "id": 575,
    "name": "Gothorita",
    "at": 137,
    "df": 153,
    "st": 155
  },
  {
    "id": 576,
    "name": "Gothitelle",
    "at": 176,
    "df": 205,
    "st": 172
  },
  {
    "id": 577,
    "name": "Solosis",
    "at": 170,
    "df": 83,
    "st": 128
  },
  {
    "id": 578,
    "name": "Duosion",
    "at": 208,
    "df": 103,
    "st": 163
  },
  {
    "id": 579,
    "name": "Reuniclus",
    "at": 214,
    "df": 148,
    "st": 242
  },
  {
    "id": 580,
    "name": "Ducklett",
    "at": 84,
    "df": 96,
    "st": 158
  },
  {
    "id": 581,
    "name": "Swanna",
    "at": 182,
    "df": 132,
    "st": 181
  },
  {
    "id": 582,
    "name": "Vanillite",
    "at": 118,
    "df": 106,
    "st": 113
  },
  {
    "id": 583,
    "name": "Vanillish",
    "at": 151,
    "df": 138,
    "st": 139
  },
  {
    "id": 584,
    "name": "Vanilluxe",
    "at": 218,
    "df": 184,
    "st": 174
  },
  {
    "id": 585,
    "name": "Deerling",
    "at": 115,
    "df": 100,
    "st": 155
  },
  {
    "id": 586,
    "name": "Sawsbuck",
    "at": 198,
    "df": 146,
    "st": 190
  },
  {
    "id": 587,
    "name": "Emolga",
    "at": 158,
    "df": 127,
    "st": 146
  },
  {
    "id": 588,
    "name": "Karrablast",
    "at": 137,
    "df": 87,
    "st": 137
  },
  {
    "id": 589,
    "name": "Escavalier",
    "at": 223,
    "df": 187,
    "st": 172
  },
  {
    "id": 590,
    "name": "Foongus",
    "at": 97,
    "df": 91,
    "st": 170
  },
  {
    "id": 591,
    "name": "Amoonguss",
    "at": 155,
    "df": 139,
    "st": 249
  },
  {
    "id": 592,
    "name": "Frillish",
    "at": 115,
    "df": 134,
    "st": 146
  },
  {
    "id": 593,
    "name": "Jellicent",
    "at": 159,
    "df": 178,
    "st": 225
  },
  {
    "id": 594,
    "name": "Alomomola",
    "at": 138,
    "df": 131,
    "st": 338
  },
  {
    "id": 595,
    "name": "Joltik",
    "at": 110,
    "df": 98,
    "st": 137
  },
  {
    "id": 596,
    "name": "Galvantula",
    "at": 201,
    "df": 128,
    "st": 172
  },
  {
    "id": 597,
    "name": "Ferroseed",
    "at": 82,
    "df": 155,
    "st": 127
  },
  {
    "id": 598,
    "name": "Ferrothorn",
    "at": 158,
    "df": 223,
    "st": 179
  },
  {
    "id": 599,
    "name": "Klink",
    "at": 98,
    "df": 121,
    "st": 120
  },
  {
    "id": 600,
    "name": "Klang",
    "at": 150,
    "df": 174,
    "st": 155
  },
  {
    "id": 601,
    "name": "Klinklang",
    "at": 199,
    "df": 214,
    "st": 155
  },
  {
    "id": 602,
    "name": "Tynamo",
    "at": 105,
    "df": 78,
    "st": 111
  },
  {
    "id": 603,
    "name": "Eelektrik",
    "at": 156,
    "df": 130,
    "st": 163
  },
  {
    "id": 604,
    "name": "Eelektross",
    "at": 217,
    "df": 152,
    "st": 198
  },
  {
    "id": 605,
    "name": "Elgyem",
    "at": 148,
    "df": 100,
    "st": 146
  },
  {
    "id": 606,
    "name": "Beheeyem",
    "at": 221,
    "df": 163,
    "st": 181
  },
  {
    "id": 607,
    "name": "Litwick",
    "at": 108,
    "df": 98,
    "st": 137
  },
  {
    "id": 608,
    "name": "Lampent",
    "at": 169,
    "df": 115,
    "st": 155
  },
  {
    "id": 609,
    "name": "Chandelure",
    "at": 271,
    "df": 182,
    "st": 155
  },
  {
    "id": 610,
    "name": "Axew",
    "at": 154,
    "df": 101,
    "st": 130
  },
  {
    "id": 611,
    "name": "Fraxure",
    "at": 212,
    "df": 123,
    "st": 165
  },
  {
    "id": 612,
    "name": "Haxorus",
    "at": 284,
    "df": 172,
    "st": 183
  },
  {
    "id": 613,
    "name": "Cubchoo",
    "at": 128,
    "df": 74,
    "st": 146
  },
  {
    "id": 614,
    "name": "Beartic",
    "at": 233,
    "df": 152,
    "st": 216
  },
  {
    "id": 615,
    "name": "Cryogonal",
    "at": 190,
    "df": 218,
    "st": 190
  },
  {
    "id": 616,
    "name": "Shelmet",
    "at": 72,
    "df": 140,
    "st": 137
  },
  {
    "id": 617,
    "name": "Accelgor",
    "at": 220,
    "df": 120,
    "st": 190
  },
  {
    "id": 618,
    "name": "Stunfisk",
    "at": 144,
    "df": 171,
    "st": 240
  },
  {
    "id": 618,
    "name": "Stunfisk Galarian Form",
    "at": 144,
    "df": 171,
    "st": 240
  },
  {
    "id": 619,
    "name": "Mienfoo",
    "at": 160,
    "df": 98,
    "st": 128
  },
  {
    "id": 620,
    "name": "Mienshao",
    "at": 258,
    "df": 127,
    "st": 163
  },
  {
    "id": 621,
    "name": "Druddigon",
    "at": 213,
    "df": 170,
    "st": 184
  },
  {
    "id": 622,
    "name": "Golett",
    "at": 127,
    "df": 92,
    "st": 153
  },
  {
    "id": 623,
    "name": "Golurk",
    "at": 222,
    "df": 154,
    "st": 205
  },
  {
    "id": 624,
    "name": "Pawniard",
    "at": 154,
    "df": 114,
    "st": 128
  },
  {
    "id": 625,
    "name": "Bisharp",
    "at": 232,
    "df": 176,
    "st": 163
  },
  {
    "id": 626,
    "name": "Bouffalant",
    "at": 195,
    "df": 182,
    "st": 216
  },
  {
    "id": 627,
    "name": "Rufflet",
    "at": 150,
    "df": 97,
    "st": 172
  },
  {
    "id": 628,
    "name": "Braviary",
    "at": 232,
    "df": 152,
    "st": 225
  },
  {
    "id": 629,
    "name": "Vullaby",
    "at": 105,
    "df": 139,
    "st": 172
  },
  {
    "id": 630,
    "name": "Mandibuzz",
    "at": 129,
    "df": 205,
    "st": 242
  },
  {
    "id": 631,
    "name": "Heatmor",
    "at": 204,
    "df": 129,
    "st": 198
  },
  {
    "id": 632,
    "name": "Durant",
    "at": 217,
    "df": 188,
    "st": 151
  },
  {
    "id": 633,
    "name": "Deino",
    "at": 116,
    "df": 93,
    "st": 141
  },
  {
    "id": 634,
    "name": "Zweilous",
    "at": 159,
    "df": 135,
    "st": 176
  },
  {
    "id": 635,
    "name": "Hydreigon",
    "at": 256,
    "df": 188,
    "st": 211
  },
  {
    "id": 636,
    "name": "Larvesta",
    "at": 156,
    "df": 107,
    "st": 146
  },
  {
    "id": 637,
    "name": "Volcarona",
    "at": 264,
    "df": 189,
    "st": 198
  },
  {
    "id": 638,
    "name": "Cobalion",
    "at": 192,
    "df": 229,
    "st": 209
  },
  {
    "id": 639,
    "name": "Terrakion",
    "at": 260,
    "df": 192,
    "st": 209
  },
  {
    "id": 640,
    "name": "Virizion",
    "at": 192,
    "df": 229,
    "st": 209
  },
  {
    "id": 641,
    "name": "Tornadus Therian Forme",
    "at": 238,
    "df": 189,
    "st": 188
  },
  {
    "id": 641,
    "name": "Tornadus",
    "at": 266,
    "df": 164,
    "st": 188
  },
  {
    "id": 642,
    "name": "Thundurus Therian Forme",
    "at": 295,
    "df": 161,
    "st": 188
  },
  {
    "id": 642,
    "name": "Thundurus",
    "at": 266,
    "df": 164,
    "st": 188
  },
  {
    "id": 643,
    "name": "Reshiram",
    "at": 302,
    "df": 232,
    "st": 225
  },
  {
    "id": 644,
    "name": "Zekrom",
    "at": 302,
    "df": 232,
    "st": 225
  },
  {
    "id": 645,
    "name": "Landorus Therian Forme",
    "at": 289,
    "df": 179,
    "st": 205
  },
  {
    "id": 645,
    "name": "Landorus",
    "at": 261,
    "df": 182,
    "st": 205
  },
  {
    "id": 646,
    "name": "Kyurem White Kyurem",
    "at": 341,
    "df": 201,
    "st": 268
  },
  {
    "id": 646,
    "name": "Kyurem Black Kyurem",
    "at": 341,
    "df": 201,
    "st": 268
  },
  {
    "id": 646,
    "name": "Kyurem",
    "at": 270,
    "df": 187,
    "st": 268
  },
  {
    "id": 647,
    "name": "Keldeo Resolute Form",
    "at": 260,
    "df": 192,
    "st": 209
  },
  {
    "id": 647,
    "name": "Keldeo",
    "at": 260,
    "df": 192,
    "st": 209
  },
  {
    "id": 648,
    "name": "Meloetta Pirouette Forme",
    "at": 269,
    "df": 188,
    "st": 225
  },
  {
    "id": 648,
    "name": "Meloetta",
    "at": 250,
    "df": 225,
    "st": 225
  },
  {
    "id": 649,
    "name": "Genesect",
    "at": 252,
    "df": 199,
    "st": 174
  },
  {
    "id": 650,
    "name": "Chespin",
    "at": 110,
    "df": 106,
    "st": 148
  },
  {
    "id": 651,
    "name": "Quilladin",
    "at": 146,
    "df": 156,
    "st": 156
  },
  {
    "id": 652,
    "name": "Chesnaught",
    "at": 201,
    "df": 204,
    "st": 204
  },
  {
    "id": 653,
    "name": "Fennekin",
    "at": 116,
    "df": 102,
    "st": 120
  },
  {
    "id": 654,
    "name": "Braixen",
    "at": 171,
    "df": 130,
    "st": 153
  },
  {
    "id": 655,
    "name": "Delphox",
    "at": 230,
    "df": 189,
    "st": 181
  },
  {
    "id": 656,
    "name": "Froakie",
    "at": 122,
    "df": 84,
    "st": 121
  },
  {
    "id": 657,
    "name": "Frogadier",
    "at": 168,
    "df": 114,
    "st": 144
  },
  {
    "id": 658,
    "name": "Greninja",
    "at": 223,
    "df": 152,
    "st": 176
  },
  {
    "id": 659,
    "name": "Bunnelby",
    "at": 68,
    "df": 72,
    "st": 116
  },
  {
    "id": 660,
    "name": "Diggersby",
    "at": 112,
    "df": 155,
    "st": 198
  },
  {
    "id": 661,
    "name": "Fletchling",
    "at": 95,
    "df": 80,
    "st": 128
  },
  {
    "id": 662,
    "name": "Fletchinder",
    "at": 145,
    "df": 110,
    "st": 158
  },
  {
    "id": 663,
    "name": "Talonflame",
    "at": 176,
    "df": 155,
    "st": 186
  },
  {
    "id": 664,
    "name": "Scatterbug",
    "at": 63,
    "df": 63,
    "st": 116
  },
  {
    "id": 665,
    "name": "Spewpa",
    "at": 48,
    "df": 89,
    "st": 128
  },
  {
    "id": 666,
    "name": "Vivillon",
    "at": 176,
    "df": 103,
    "st": 190
  },
  {
    "id": 667,
    "name": "Litleo",
    "at": 139,
    "df": 112,
    "st": 158
  },
  {
    "id": 668,
    "name": "Pyroar",
    "at": 221,
    "df": 149,
    "st": 200
  },
  {
    "id": 669,
    "name": "FlabÃ©bÃ©",
    "at": 108,
    "df": 120,
    "st": 127
  },
  {
    "id": 670,
    "name": "Floette Eternal Flower",
    "at": 243,
    "df": 217,
    "st": 179
  },
  {
    "id": 670,
    "name": "Floette",
    "at": 136,
    "df": 151,
    "st": 144
  },
  {
    "id": 671,
    "name": "Florges",
    "at": 212,
    "df": 244,
    "st": 186
  },
  {
    "id": 672,
    "name": "Skiddo",
    "at": 123,
    "df": 102,
    "st": 165
  },
  {
    "id": 673,
    "name": "Gogoat",
    "at": 196,
    "df": 146,
    "st": 265
  },
  {
    "id": 674,
    "name": "Pancham",
    "at": 145,
    "df": 107,
    "st": 167
  },
  {
    "id": 675,
    "name": "Pangoro",
    "at": 226,
    "df": 146,
    "st": 216
  },
  {
    "id": 676,
    "name": "Furfrou",
    "at": 164,
    "df": 167,
    "st": 181
  },
  {
    "id": 677,
    "name": "Espurr",
    "at": 120,
    "df": 114,
    "st": 158
  },
  {
    "id": 678,
    "name": "Meowstic Female",
    "at": 166,
    "df": 167,
    "st": 179
  },
  {
    "id": 678,
    "name": "Meowstic",
    "at": 166,
    "df": 167,
    "st": 179
  },
  {
    "id": 679,
    "name": "Honedge",
    "at": 135,
    "df": 139,
    "st": 128
  },
  {
    "id": 680,
    "name": "Doublade",
    "at": 188,
    "df": 206,
    "st": 153
  },
  {
    "id": 681,
    "name": "Aegislash Blade Forme",
    "at": 291,
    "df": 97,
    "st": 155
  },
  {
    "id": 681,
    "name": "Aegislash",
    "at": 97,
    "df": 291,
    "st": 155
  },
  {
    "id": 682,
    "name": "Spritzee",
    "at": 110,
    "df": 113,
    "st": 186
  },
  {
    "id": 683,
    "name": "Aromatisse",
    "at": 173,
    "df": 150,
    "st": 226
  },
  {
    "id": 684,
    "name": "Swirlix",
    "at": 109,
    "df": 119,
    "st": 158
  },
  {
    "id": 685,
    "name": "Slurpuff",
    "at": 168,
    "df": 163,
    "st": 193
  },
  {
    "id": 686,
    "name": "Inkay",
    "at": 98,
    "df": 95,
    "st": 142
  },
  {
    "id": 687,
    "name": "Malamar",
    "at": 177,
    "df": 165,
    "st": 200
  },
  {
    "id": 688,
    "name": "Binacle",
    "at": 96,
    "df": 120,
    "st": 123
  },
  {
    "id": 689,
    "name": "Barbaracle",
    "at": 194,
    "df": 205,
    "st": 176
  },
  {
    "id": 690,
    "name": "Skrelp",
    "at": 109,
    "df": 109,
    "st": 137
  },
  {
    "id": 691,
    "name": "Dragalge",
    "at": 177,
    "df": 207,
    "st": 163
  },
  {
    "id": 692,
    "name": "Clauncher",
    "at": 108,
    "df": 117,
    "st": 137
  },
  {
    "id": 693,
    "name": "Clawitzer",
    "at": 221,
    "df": 171,
    "st": 174
  },
  {
    "id": 694,
    "name": "Helioptile",
    "at": 115,
    "df": 78,
    "st": 127
  },
  {
    "id": 695,
    "name": "Heliolisk",
    "at": 219,
    "df": 168,
    "st": 158
  },
  {
    "id": 696,
    "name": "Tyrunt",
    "at": 158,
    "df": 123,
    "st": 151
  },
  {
    "id": 697,
    "name": "Tyrantrum",
    "at": 227,
    "df": 191,
    "st": 193
  },
  {
    "id": 698,
    "name": "Amaura",
    "at": 124,
    "df": 109,
    "st": 184
  },
  {
    "id": 699,
    "name": "Aurorus",
    "at": 186,
    "df": 163,
    "st": 265
  },
  {
    "id": 700,
    "name": "Sylveon",
    "at": 203,
    "df": 205,
    "st": 216
  },
  {
    "id": 701,
    "name": "Hawlucha",
    "at": 195,
    "df": 153,
    "st": 186
  },
  {
    "id": 702,
    "name": "Dedenne",
    "at": 164,
    "df": 134,
    "st": 167
  },
  {
    "id": 703,
    "name": "Carbink",
    "at": 95,
    "df": 285,
    "st": 137
  },
  {
    "id": 704,
    "name": "Goomy",
    "at": 101,
    "df": 112,
    "st": 128
  },
  {
    "id": 705,
    "name": "Sliggoo",
    "at": 159,
    "df": 176,
    "st": 169
  },
  {
    "id": 706,
    "name": "Goodra",
    "at": 220,
    "df": 242,
    "st": 207
  },
  {
    "id": 707,
    "name": "Klefki",
    "at": 160,
    "df": 179,
    "st": 149
  },
  {
    "id": 708,
    "name": "Phantump",
    "at": 125,
    "df": 103,
    "st": 125
  },
  {
    "id": 709,
    "name": "Trevenant",
    "at": 201,
    "df": 154,
    "st": 198
  },
  {
    "id": 710,
    "name": "Pumpkaboo Super Size",
    "at": 118,
    "df": 120,
    "st": 153
  },
  {
    "id": 710,
    "name": "Pumpkaboo Small Size",
    "at": 122,
    "df": 124,
    "st": 127
  },
  {
    "id": 710,
    "name": "Pumpkaboo Large Size",
    "at": 120,
    "df": 122,
    "st": 144
  },
  {
    "id": 710,
    "name": "Pumpkaboo",
    "at": 121,
    "df": 123,
    "st": 135
  },
  {
    "id": 711,
    "name": "Gourgeist Super Size",
    "at": 182,
    "df": 200,
    "st": 198
  },
  {
    "id": 711,
    "name": "Gourgeist Small Size",
    "at": 171,
    "df": 219,
    "st": 146
  },
  {
    "id": 711,
    "name": "Gourgeist Large Size",
    "at": 179,
    "df": 206,
    "st": 181
  },
  {
    "id": 711,
    "name": "Gourgeist",
    "at": 175,
    "df": 213,
    "st": 163
  },
  {
    "id": 712,
    "name": "Bergmite",
    "at": 117,
    "df": 120,
    "st": 146
  },
  {
    "id": 713,
    "name": "Avalugg",
    "at": 196,
    "df": 240,
    "st": 216
  },
  {
    "id": 714,
    "name": "Noibat",
    "at": 83,
    "df": 73,
    "st": 120
  },
  {
    "id": 715,
    "name": "Noivern",
    "at": 205,
    "df": 175,
    "st": 198
  },
  {
    "id": 716,
    "name": "Xerneas",
    "at": 275,
    "df": 203,
    "st": 270
  },
  {
    "id": 717,
    "name": "Yveltal",
    "at": 275,
    "df": 203,
    "st": 270
  },
  {
    "id": 718,
    "name": "Zygarde",
    "at": 203,
    "df": 232,
    "st": 239
  },
  {
    "id": 719,
    "name": "Diancie Mega Diancie",
    "at": 342,
    "df": 235,
    "st": 137
  },
  {
    "id": 719,
    "name": "Diancie",
    "at": 190,
    "df": 285,
    "st": 137
  },
  {
    "id": 720,
    "name": "Hoopa Hoopa Unbound",
    "at": 341,
    "df": 210,
    "st": 190
  },
  {
    "id": 720,
    "name": "Hoopa",
    "at": 287,
    "df": 206,
    "st": 190
  },
  {
    "id": 721,
    "name": "Volcanion",
    "at": 252,
    "df": 216,
    "st": 190
  },
  {
    "id": 808,
    "name": "Meltan",
    "at": 118,
    "df": 99,
    "st": 130
  },
  {
    "id": 809,
    "name": "Melmetal",
    "at": 226,
    "df": 190,
    "st": 264
  },
  {
    "id": 865,
    "name": "Sirfetch'd",
    "at": 248,
    "df": 176,
    "st": 158
  }
];

export function pokeByName(name) {
  for (i = 0; i < pokedex.length; i++)
    if (pokedex[i].name == name) return pokedex[i];
  return null;
}

export default pokedex;
