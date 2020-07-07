import { Question } from '../models/question';
import { Answer } from '../models/answer';

export const QuizFeatureKey = 'quiz';

export interface QuizState {
    questions: Question[];
    answers: Answer[];
}

export const initialState: QuizState = {
    questions: [], 
    answers: []
}