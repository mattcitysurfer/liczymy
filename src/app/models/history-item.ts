export interface HistoryItem {
    levelSelected: number;
    operationSelected: string;

    firstNumber: number;
    secondNumber: number;
    result: number;
    userResult: number | null;
    isCorrect: boolean;

    date: Date;
}