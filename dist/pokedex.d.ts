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
declare const pokedex: PokedexEntry[];
export declare function getByName({ name }: PokedexSearchRequest): PokedexEntry;
export declare const getByFamily: ({ name }: PokedexSearchRequest) => PokedexEntry[];
export default pokedex;
