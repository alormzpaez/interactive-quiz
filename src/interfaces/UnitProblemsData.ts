
// Representa un problema individual
export interface ProblemData {
    type: number;
    options: string[];
    correct_answer: string;
}

// Representa un método con un conjunto de problemas
export interface MethodProblemsData {
    unit_id: string;
    method_id: number;
    problems: ProblemData[];
}

