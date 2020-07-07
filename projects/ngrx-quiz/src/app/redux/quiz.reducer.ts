import { createReducer, on } from '@ngrx/store';
import { initialState } from './quiz.model';
import { QuizActions } from './quiz.types';
import { answerCurrentQuestion } from './quiz.helpers';

export const quizReducer = createReducer(initialState, 
    on(QuizActions.reset, _ => 
        initialState), 

    on(QuizActions.answerCurrentQuestion, (state, action) => 
        answerCurrentQuestion(state, action.answerIndex))
);