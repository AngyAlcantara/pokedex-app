import { IStat} from "./stat.model";
 
export interface IPokemon {
    id: number;
    name: string;
    type1: string;
    // ?: Indica que es opcional (puede no persistir)
    type2?: string;
    sprite: string;
    heigth: number;
    weight: number;
    abilities: string[];
    hidenAbility: string;
    //stat:{
       // base_stat: number;
        //namee:nstring;
    //};
    stat: IStat[]
}