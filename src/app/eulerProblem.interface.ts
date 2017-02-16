export interface EulerProblem  {
    description: string,
    number: number;
    getResult(input: number);
}