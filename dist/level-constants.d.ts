export interface IndexRequest {
    index: number;
}
export interface LevelRequest {
    level: number;
}
declare const levelContants: number[];
export declare function levelToIndex({ level }: LevelRequest): number;
export declare function indexToLevel({ index }: IndexRequest): number;
export declare function getConstant({ level }: LevelRequest): number;
export default levelContants;
