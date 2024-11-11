import { MethodInterface } from "./UnitsContentsDataInterface";

export interface UnitIds {
    id: string;
}

export interface UnitData {
    id: string;
    name: string;
    description: string;
}



export interface UnitDataToShow {
    id: string;
    name: string;
    description: string;
    topics: TopicToShow[]
}
export interface TopicToShow {
    topic: string;
    methods: MethodInterface[];
}