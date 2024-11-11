
export interface CurrentProblemShowing {
    unit_id: string;
    method_id: number;
    type: number;
    options: string[];
    correct_answer: string;
    unit_name: string;
    method_name: string;
} 

export interface ProblemInitialState {
    problem: CurrentProblemShowing | null
}