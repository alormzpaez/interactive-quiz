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


export interface DataToGetProblemImage{
    unit_id: string,
    method_id: number,
    problem_type: number
}

export interface UnitDataToCompareWithLocalDB{
    unit_id: string,
    method_id: number,
    problem_type: number
}

export interface ProblemSolvedInLocalDB {
    unit_id: string,
    method_id: number,
    problem_type: number,
    solved_at: string,
    problem_answer: string,
    correct_answer: string
}